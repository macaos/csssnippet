import React, { Component } from "react";
import data from "../../../Data";
import { css } from "emotion";
import "../scss/Item.scss";

class Item extends Component {
  constructor(props: {}) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const { lastId } = data.pathInfo();
    return (
      <div>
        <h1>{lastId}</h1>
        <div className="section">
          <h3>Wire Frame</h3>
          <div className="html-wire">
            <div className={lastId}>
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
