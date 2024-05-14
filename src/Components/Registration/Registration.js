import React, { useState } from "react";
import { Button, Select, Modal, Checkbox, Input } from "antd";
import "../styles.css";

const { TextArea } = Input;

const { Option } = Select;

export default function Registration() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        className="frameParent"
        style={{ marginBottom: "5px", marginTop: "5px" }}
      >
        <div className="registration-wrapper">
          <Button
            type="primary"
            style={{ backgroundColor: "#2a3958" }}
            onClick={showModal}
          >
            등록
          </Button>
          <div>
            <Select className="selection" defaultValue="승인상태 변경">
              <Option value="승인상태 변경">승인상태 변경</Option>
              <Option value="승인완료">승인완료</Option>
              <Option value="승인거부">승인거부</Option>
            </Select>
            <Button
              type="primary"
              style={{ backgroundColor: "#2a3958", marginLeft: "10px" }}
            >
              저장
            </Button>
          </div>
        </div>
      </div>
      <div className="separator" style={{ marginTop: "10px" }} />
      <Modal
        title="승인거부 사유 입력"
        open={isModalVisible}
        onCancel={handleCancel}
        width={800}
        footer={[
          <div key="footer-buttons" style={{ textAlign: "center" }}>
            <Button className="save-button" key="submit" onClick={handleCancel}>
              저장
            </Button>
            <Button className="cancel-button" key="back" onClick={handleCancel}>
              취소
            </Button>
          </div>,
        ]}
      >
        <section className="content1">
          <div className="memberInfo">
            <div className="label">회원번호</div>
            <div className="input">abc111, abc22</div>
          </div>
          <div className="memberInfo">
            <div className="label">회원명/법인명</div>
            <div className="input">김길동, ㈜가나다라투자</div>
          </div>
          <div className="memberInfo">
            <div
              className="label"
              style={{
                display: "flex",
                alignItems: "center",
                height: "241px",
                borderBottom: "none",
              }}
            >
              승인거부 사유{" "}
              <div
                className="must"
                style={{ width: "4px", height: "4px", marginTop: "-10px" }}
              ></div>
            </div>
            <div className="checkboxes">
              <Checkbox>서류 식별 불가</Checkbox>
              <Checkbox>필수 서류 누락</Checkbox>
              <Checkbox>서류의 내용이 등록된 회원정보와 다름</Checkbox>
              <Checkbox>
                서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인,
                본인서명 등)
              </Checkbox>
              <Checkbox>서류의 유효기간이 초과됨</Checkbox>
              <Checkbox onChange={handleCheckboxChange}>직접 입력</Checkbox>
              <TextArea
                rows={4}
                style={{ width: "570px", marginTop: "5px", paddingTop: "8px" }}
                placeholder="사유 입력"
                disabled={!isChecked}
              />
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
}
