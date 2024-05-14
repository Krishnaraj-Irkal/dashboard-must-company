import { useEffect, useState } from "react";
import "../styles.css";

const GroupComponent = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(1);

  function highlightTab(tabIndex) {
    setHighlightedIndex(tabIndex);
  }

  useEffect(() => {
    const buttons = document.querySelectorAll(".tab");
    buttons.forEach((button, index) => {
      if (index === highlightedIndex) {
        button.classList.add("active");
        button.style.backgroundColor = "#2a3958";
        button.style.color = "#fff";
      } else {
        button.classList.remove("active");
        button.style.backgroundColor = "#ebeef3";
        button.style.color = "#2a3958";
      }
    });
  }, [highlightedIndex]);

  return (
    <div className="frameParent">
      <div className="frameWrapper">
        <div className="frameContainer">
          <div className="parent">
            <h2 className="h2">회원상세</h2>
            <div className="frameDiv">
              <div className="mustParent">
                <div className="must" />
                <div className="wrapper">
                  <div className="div">필수항목</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="separator" />
      <div className="button-tab">
        <button
          className={`tab first-button ${
            highlightedIndex === 0 ? "active" : ""
          }`}
          onClick={() => highlightTab(0)}
        >
          <div>기본정보 관리</div>
        </button>
        <button
          className={`tab ${highlightedIndex === 1 ? "active" : ""}`}
          onClick={() => highlightTab(1)}
        >
          <div>투자유형 관리</div>
        </button>
        <button
          className={`tab ${highlightedIndex === 2 ? "active" : ""}`}
          onClick={() => highlightTab(2)}
        >
          <div>입출금내역 조회</div>
        </button>
        <button
          className={`tab ${highlightedIndex === 3 ? "active" : ""}`}
          onClick={() => highlightTab(3)}
        >
          <div>영업내역 조회</div>
        </button>
        <button
          className={`tab ${highlightedIndex === 4 ? "active" : ""}`}
          onClick={() => highlightTab(4)}
        >
          <div>투자내역 조회</div>
        </button>
        <button
          className={`tab ${highlightedIndex === 5 ? "active" : ""}`}
          onClick={() => highlightTab(5)}
        >
          <div>채권내역 조회</div>
        </button>
        <button
          className={`tab ${highlightedIndex === 6 ? "active" : ""}`}
          onClick={() => highlightTab(6)}
        >
          <div>SMS 관리</div>
        </button>
        <button
          className={`tab ${highlightedIndex === 7 ? "active" : ""}`}
          onClick={() => highlightTab(7)}
        >
          <div>상담내역 관리</div>
        </button>
        <button
          className={`tab last-button ${
            highlightedIndex === 8 ? "active" : ""
          }`}
          onClick={() => highlightTab(8)}
        >
          <div>1:1문의내역 조회</div>
        </button>
      </div>
      <div className="separator" />
    </div>
  );
};

export default GroupComponent;
