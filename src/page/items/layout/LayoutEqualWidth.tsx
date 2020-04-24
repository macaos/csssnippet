import React, { Component } from "react";
import { css } from "emotion";

class LayoutEqualWidth extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div>Home - CSS Layout - Card01</div>
        <h1>LayoutEqualWidth</h1>
        <div className="section">
          <h3>Wire Frame</h3>
          <div className="html-wire">
            <div className="LayoutEqualWidth">
              <div className="col">equal width</div>
              <div className="col">equal width</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h3>Use Example</h3>
          <div className="html-wire">
            <div className="LayoutEqualWidth">
              <div className="col">equal width</div>
              <div className="col">equal width</div>
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
            src="http://jsfiddle.net/macaoshu/j56Lt1ga/2/embedded/html,css/"
            width="100%"
            height="450"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default LayoutEqualWidth;
