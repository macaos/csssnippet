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
            <div className="grid-2x2">
              <div className="thumb">A</div>
              <div className="thumb">B</div>
              <div className="thumb">C</div>
              <div className="thumb">D</div>
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
              src="https://jsfiddle.net/macaos/otfbdp2w/8/embedded/html,css/"
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
