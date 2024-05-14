import { Button, Modal, Upload } from "antd";
import React from "react";
import "../styles.css";

const { Dragger } = Upload;

export default function ImagesModal({ visible, onCancel }) {
  return (
    <Modal
      title="서류 보기"
      open={visible}
      onCancel={onCancel}
      width={600}
      height={800}
      footer={[
        <div key="footer-buttons" style={{ textAlign: "center" }}>
          <Button
            className="file-download-button"
            key="back"
            onClick={onCancel}
          >
            파일 다운로드
          </Button>
          <Button className="save-button" key="back" onClick={onCancel}>
            확인
          </Button>
        </div>,
      ]}
    >
      <div
        className="memberInfo"
        style={{
          border: "1px solid #d7d8da",
          borderRadius: "10px",
        }}
      >
        <div
          className="label"
          style={{
            display: "flex",
            alignItems: "center",
            height: "400px",
            width: "70px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          서류{" "}
          <div
            className="must"
            style={{ width: "4px", height: "4px", marginTop: "-10px" }}
          ></div>
        </div>
        <div style={{ maxHeight: "400px", overflowY: "auto", padding: "10px" }}>
          <div>
            <Dragger
              style={{
                padding: "160px 180px 130px 160px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
              accept=".jpg,.png,.jpeg"
              multiple={false}
            >
              <p style={{ alignItems: "center" }}>img</p>
            </Dragger>
          </div>
          <div>
            <Dragger
              style={{
                padding: "160px 180px 130px 160px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
              accept=".jpg,.png,.jpeg"
              multiple={false}
            >
              <p style={{ alignItems: "center" }}>img</p>
            </Dragger>
          </div>
          <div>
            <Dragger
              style={{
                padding: "160px 180px 130px 160px",
                borderRadius: "10px",
              }}
              accept=".jpg,.png,.jpeg"
              multiple={false}
            >
              <p style={{ alignItems: "center" }}>img</p>
            </Dragger>
          </div>
        </div>
      </div>
    </Modal>
  );
}
