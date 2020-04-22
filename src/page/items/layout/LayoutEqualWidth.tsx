import React, { Component } from "react";
import Prism from "prismjs";

class LayoutEqualWidth extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div>
        <div>Home - CSS Layout - Card01</div>
        <h1>LayoutEqualWidth</h1>
        <h2>Wire Frame</h2>
        <div className="html-wire">
          <div className="LayoutEqualWidth">
            <div className="col">equal width</div>
            <div className="col">equal width</div>
          </div>
        </div>

        <h2>Use Example</h2>
        <div className="html-wire">
          <div className="LayoutEqualWidth">
            <div className="col">equal width</div>
            <div className="col">equal width</div>
          </div>
        </div>

        <h2>Source</h2>
        <h3>html</h3>
        <div className="source html">
          <pre>
            <code className="language-html">
              {`
<div className="LayoutEqualWidth">
  <div className="col">equal width</div>
  <div className="col">equal width</div>
</div>
`}
            </code>
          </pre>
        </div>
        <h3>css</h3>
        <div className="source css">
          <pre>
            <code className="language-css">
              {`
.LayoutEqualWidth {
      display: flex;
      padding: 10px;
      .col{
          flex-basis: 100%;
          text-align: center;
      }
  }
`}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default LayoutEqualWidth;
