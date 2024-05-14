import React from "react";
import { Select } from "antd";
import "../styles.css";

const { Option } = Select;

export default function DropDowns({ setPageSize }) {
  const handlePageSizeChange = (value) => {
    setPageSize(Number(value));
  };
  return (
    <>
      <div
        className="frameParent"
        style={{
          paddingTop: "10px",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="memberInfo">
          <h3 className="h3">회원 목록</h3>
          <div className="bracket-div">
            <span className="span">(총 100명 | 승인대기</span>
            <span className="span1">{` `}</span>
            <span className="span2">
              <span className="span3">1</span>
            </span>
            <span className="span">건)</span>
          </div>
        </div>
        <div className="filter">
          <Select className="selection" defaultValue="승인여부 전체">
            <Option value="승인여부 전체">승인여부 전체</Option>
            <Option value="승인대기">승인대기</Option>
            <Option value="승인완료">승인완료</Option>
            <Option value="승인거부">승인거부</Option>
          </Select>
          <Select className="selection" defaultValue="신청일시순">
            <Option value="신청일시순">신청일시순</Option>
            <Option value="승인일시순">승인일시순</Option>
          </Select>
          <Select
            className="selection"
            defaultValue="10개씩 보기"
            onChange={handlePageSizeChange}
          >
            <Option value="10">10개씩 보기</Option>
            <Option value="50">50개씩 보기</Option>
            <Option value="100">100개씩 보기</Option>
          </Select>
        </div>
      </div>
      <div className="separator" style={{ marginTop: "15px" }} />
    </>
  );
}
