import React, { Component } from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Breadcrumb";

class Item extends Component {
  currentId: string = "EqualWidth";
  depthInfo: string[] = ["Home", "Basic", this.currentId];
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>{this.currentId}</h1>
        <div className="section">
          <h3>Wire Frame - Basic01</h3>
          <div className="html-wire">
            <div className="accordion-01-step1">
              <div className="col-left">
                <div>45%</div>
              </div>
              <div className="col-right">
                <div>55%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>
            Source<i className="fa fa-times"></i>
          </h3>
          <iframe
            className={css`
              border: 0;
            `}
            title="test"
            src="https://jsfiddle.net/macaos/813czpq7/12/embedded/html,css/"
            width="100%"
            height="450"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Item;
