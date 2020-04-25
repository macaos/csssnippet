import React, { Component } from "react";
import { css } from "emotion";
import "../scss/Item.scss";

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
            <div className="row-t2">
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

        <div className="section">
          <h3>
            Source<i className="fa fa-times"></i>
          </h3>
          <iframe
            className={css`
              border: 0;
            `}
            title="test"
            src="https://jsfiddle.net/macaos/e8ryckjt/1/embedded/html,css/"
            width="100%"
            height="150"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Item;
