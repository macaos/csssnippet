import React, { Component } from "react";
import { css } from "emotion";
import SourceSection from "../../component/SourceSection";

class Item extends Component {
  currentId: string = "Grid01";
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>{this.currentId}</h1>
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Wire Frame - Basic</h3>
          <div className="html-wire">
            <div className="LeftRightFixed_CenterAuto">
              <div className="col-left">
                <div>left</div>
              </div>
              <div className="col-center">
                <div>center</div>
              </div>
              <div className="col-right">
                <div>right</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section source">
          <SourceSection>
            <></>
            <iframe
              className={css`
                border: 0;
              `}
              title="test"
              // src="https://jsfiddle.net/macaos/g5srnd74/2//embedded/html,css/"
              width="100%"
              height="270"
            ></iframe>
          </SourceSection>
        </div>
        {/* ///////////////////////// */}
      </div>
    );
  }
}

export default Item;
