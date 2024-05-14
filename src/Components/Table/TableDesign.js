import React, { useState } from "react";
import { Button, Table, Modal } from "antd";
import data from "./data.json";
import "../styles.css";
import CheckReason from "./CheckReason";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { CustomScroll } from "react-custom-scroll";

export default function TableDesign({ pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const getStatusStyle = (status) => {
    switch (status) {
      case "승인대기":
        return { backgroundColor: "#FFEDD5", color: "#9A3412" };
      case "승인거부":
        return { backgroundColor: "#FEE2E2", color: "#991B1B" };
      case "승인완료":
        return {
          backgroundColor: "#DCFCE7",
          color: "#166534",
          borderRadius: "5px",
        };
      default:
        return {};
    }
  };

  const columns = [
    {
      title: "NO",
      dataIndex: "no",
      key: "no",
      width: "3%",
      align: "center", // Aligning content to center
    },
    {
      title: "기존유형",
      dataIndex: "oldType",
      key: "oldType",
      width: "8%",
      align: "center",
    },
    {
      title: "신청유형",
      dataIndex: "newType",
      key: "newType",
      width: "8%",
      align: "center",
    },
    {
      title: "제출서류",
      dataIndex: "documents",
      key: "documents",
      width: "8%",
      align: "center",
      render: (text) => (
        <Button
          style={{
            backgroundColor: "#EBEEF3",
            border: "1px solid #D7D8DA",
            borderRadius: "5px",
            padding: "5px 10px", // Adjust padding as needed
          }}
        >
          {text}
        </Button>
      ),
    },
    {
      title: "신청일시",
      dataIndex: "applyDate",
      key: "applyDate",
      width: "13%",
      align: "center", // Aligning content to center
    },
    {
      title: "승인여부",
      dataIndex: "approvalStatus",
      key: "approvalStatus",
      width: "10%",
      align: "center",
      render: (text, record) => (
        <div
          style={{
            ...getStatusStyle(text),
            fontSize: "13px",
            padding: "5px 10px",
            display: "inline-block",
            borderRadius: "50px",
            fontWeight: 700,
            cursor: "pointer", // Add cursor pointer
          }}
          onClick={() => {
            setSelectedRecord(record);
            setIsModalVisible(true);
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: <div style={{ textAlign: "center" }}>승인거부 사유</div>, // Centering title
      dataIndex: "rejectionReason",
      key: "rejectionReason",
      align: "left", // Aligning content to left
    },
    {
      title: "승인일시",
      dataIndex: "approvalDate",
      key: "approvalDate",
      width: "13%",
      align: "center", // Aligning content to center
    },
    {
      title: "관리자",
      dataIndex: "admin",
      width: "10%",
      key: "admin",
      align: "center",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.approvalStatus !== "승인대기",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const customPagination = {
    showSizeChanger: false,
    itemRender: (current, type, originalElement) => {
      if (type === "prev") {
        return (
          <>
            <Button className="arrow-button" onClick={() => setCurrentPage(1)}>
              <DoubleLeftOutlined />
            </Button>
            <Button
              className="arrow-button"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <LeftOutlined />
            </Button>
          </>
        );
      }
      if (type === "next") {
        return (
          <>
            <Button
              className="arrow-button"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <RightOutlined />
            </Button>
            <Button
              className="arrow-button"
              onClick={() => setCurrentPage(totalPages)}
            >
              <DoubleRightOutlined />
            </Button>
          </>
        );
      }
      if (type === "page") {
        return (
          <Button
            onClick={() => setCurrentPage(current)}
            style={{
              fontWeight: current === currentPage ? "bold" : "normal",
              border: "none",
              background: current === currentPage ? "#2a3958" : "transparent",
              color: current === currentPage ? "white" : "black",
              borderRadius: "5px",
              paddingTop: "3px",
            }}
          >
            {current}
          </Button>
        );
      }
      return originalElement;
    },
  };

  const totalPages = Math.ceil(data.length / pageSize);

  const currentPageData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="frameParent" style={{ marginTop: "10px" }}>
      <CustomScroll heightRelativeToParent="100%">
        <Table
          className="table-design container"
          columns={columns}
          dataSource={currentPageData}
          scroll={{ x: 1300 }}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          locale={{
            margin: "30px",
            emptyText: "조회 결과가 없습니다",
          }}
          pagination={{
            ...customPagination,
            className: "custom-pagination",
            current: currentPage,
            total: data.length,
            pageSize: pageSize,
          }}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setSelectedRecord(record);
                setIsModalVisible(true);
              }, // click row
            };
          }}
        />
      </CustomScroll>
      <CheckReason
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
    </div>
  );
}
