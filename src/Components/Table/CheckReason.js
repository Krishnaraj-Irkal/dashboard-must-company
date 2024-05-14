import React from "react";
import { Modal, Button, Checkbox, Input } from "antd";
import "../styles.css";

const { TextArea } = Input;

export default function CheckReason({ visible, onCancel }) {
  return (
    <>
      <Modal
        title="승인거부 사유 확인"
        open={visible}
        onCancel={onCancel}
        width={800}
        footer={[
          <div key="footer-buttons" style={{ textAlign: "center" }}>
            <Button className="save-button" key="back" onClick={onCancel}>
              확인
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
              <Checkbox disabled>서류 식별 불가</Checkbox>
              <Checkbox disabled>필수 서류 누락</Checkbox>
              <Checkbox disabled>서류의 내용이 등록된 회원정보와 다름</Checkbox>
              <Checkbox disabled>
                서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인,
                본인서명 등)
              </Checkbox>
              <Checkbox disabled>서류의 유효기간이 초과됨</Checkbox>
              <Checkbox checked="true" disabled>
                직접 입력
              </Checkbox>
              <TextArea
                rows={4}
                style={{ width: "570px", marginTop: "5px", paddingTop: "8px" }}
                placeholder=" 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
                금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
                금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
                금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
                금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
                금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가"
                disabled
              />
            </div>
          </div>
        </section>
        <div className="memberInfo" style={{ marginTop: "20px" }}>
          <div className="memberData">최근저장일시</div>
          <div className="memberInput">2022-01-01 09:00:00</div>
          <div className="memberData" style={{ marginLeft: "5px" }}>
            최근저장일시
          </div>
          <div className="memberInput">김관리자</div>
        </div>
      </Modal>
    </>
  );
}
