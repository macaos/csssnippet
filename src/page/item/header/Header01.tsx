import React, { Component } from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Breadcrumb from "../../Breadcrumb";

class Item extends Component {
  currentId: string = "Header01";
  depthInfo: string[] = ["Home", "Basic", this.currentId];
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>{this.currentId}</h1>
        <div className="section">
          <h3>
            Wire Frame - <Link to="/item/Basic01">Basic01</Link>
          </h3>
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
          <h3>Wire Frame - step02</h3>
          <div className="html-wire">
            <i
              className={classnames([
                "xi-line-weight xi-2x",
                css`
                  color: #f4580b;
                `
              ])}
            ></i>
            <div className="accordion-01-step2">
              <div className="col-left">
                <h3>Voluptate velit</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button>SHOW DETAIL</button>
              </div>
              <div className="col-center"></div>
              <div className="col-right">
                <div className="btn-accortion">
                  <div className="title">
                    <i className="xi-mail-read-o">
                      <span>Reprehenderit in voluptate</span>
                    </i>
                  </div>
                  <div className="arrow">
                    <i className="xi-angle-right"></i>
                  </div>
                </div>
                <div className="btn-accortion">
                  <div className="title">
                    <i className="xi-users-o">
                      <span>Veniam, quis nostrud</span>
                    </i>
                  </div>
                  <div className="arrow">
                    <i className="xi-angle-right"></i>
                  </div>
                </div>

                <div className="btn-accortion">
                  <div className="title">
                    <i className="xi-presentation">
                      <span>Cupidatat non proident</span>
                    </i>
                  </div>
                  <div className="arrow">
                    <i className="xi-angle-right"></i>
                  </div>
                </div>

                <div className="btn-accortion">
                  <div className="title">
                    <i className="xi-mail-read-o">
                      <span>Tempor incididunt ut</span>
                    </i>
                  </div>
                  <div className="arrow">
                    <i className="xi-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h3>Use Example</h3>
          <div className="html">
            <div className="accordion-01-step2">
              <div className="col-left">
                <h3>Voluptate velit</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button>SHOW DETAIL</button>
              </div>
              <div className="col-center"></div>
              <div className="col-right">
                <div className="btn-accortion">
                  <div className="title">
                    <i className="xi-mail-read-o">
                      <span>Reprehenderit in voluptate</span>
                    </i>
                  </div>
                  <div className="arrow">
                    <i className="xi-angle-right"></i>
                  </div>
                </div>
                <div className="btn-accortion">
                  <div className="title">
                    <i className="xi-users-o">
                      <span>Veniam, quis nostrud</span>
                    </i>
                  </div>
                  <div className="arrow">
                    <i className="xi-angle-right"></i>
                  </div>
                </div>

                <div className="btn-accortion">
                  <div className="title">
                    <i className="xi-presentation">
                      <span>Cupidatat non proident</span>
                    </i>
                  </div>
                  <div className="arrow">
                    <i className="xi-angle-right"></i>
                  </div>
                </div>

                <div className="btn-accortion">
                  <div className="title">
                    <i className="xi-mail-read-o">
                      <span>Tempor incididunt ut</span>
                    </i>
                  </div>
                  <div className="arrow">
                    <i className="xi-angle-right"></i>
                  </div>
                </div>
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
