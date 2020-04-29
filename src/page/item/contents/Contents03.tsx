import React, { Component } from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Breadcrumb";
import SourceSection from "../../component/SourceSection";
import "./Contents03.scss"; //######

class Item extends Component {
  currentId: string = "Contents03"; //######
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>{this.currentId}</h1>
        <div className="cp-section">
          <h3 className="h3">
            Wire Frame - <Link to="/item/basic/BasicPattern">Basic01</Link>
          </h3>
          <div className="html-wire">
            <div className="columns">
              <div className="column is-5">
                <p>is-5</p>
              </div>
              <div className="column is-7">
                <p>is-7</p>
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////////////////////// */}
        <div className="cp-section">
          <h3 className="h3">Wire Frame - step02</h3>
          <div className="html-wire">
            <div className="content Contents03-step01">
              <div className="columns">
                <div className="column is-5 column-1">
                  <p>
                    <h2>Voluptate velit</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className="button is-primary">SHOW DETAIL</button>
                  </p>
                </div>
                <div className="column is-7">
                  <p>
                    <div className="columns is-mobile btn-accortion">
                      <div className="column is-10">
                        <i className="xi-mail-read-o"></i>
                        <div>Reprehenderit in voluptate</div>
                      </div>
                      <div className="column is-2">
                        <i className="xi-angle-right"></i>
                      </div>
                    </div>
                    <div className="columns is-mobile btn-accortion">
                      <div className="column is-10">
                        <i className="xi-mail-read-o"></i>
                        <div>Veniam, quis nostrud</div>
                      </div>
                      <div className="column is-2">
                        <i className="xi-angle-right"></i>
                      </div>
                    </div>
                    <div className="columns is-mobile btn-accortion">
                      <div className="column is-10">
                        <i className="xi-mail-read-o"></i>
                        <div>Cupidatat non proident</div>
                      </div>
                      <div className="column is-2">
                        <i className="xi-angle-right"></i>
                      </div>
                    </div>
                    <div className="columns is-mobile btn-accortion">
                      <div className="column is-10">
                        <i className="xi-mail-read-o"></i>
                        <div>Tempor incididunt ut</div>
                      </div>
                      <div className="column is-2">
                        <i className="xi-angle-right"></i>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cp-section source">
          <SourceSection>
            <></>
            <iframe
              className={css`
                border: 0;
              `}
              title="test"
              //   src="https://jsfiddle.net/macaos/u967dgvL/2/embedded/html,css/"
              width="100%"
              height="270"
            ></iframe>
          </SourceSection>
        </div>
        {/* //////////////////////////////////// */}
        <div className="cp-section">
          <h3 className="h3">Wire Frame - step02</h3>
          <div className="html-wire- ">
            <div className="content Contents03-step01 use-example">
              <div className="columns">
                <div className="column is-5 column-1">
                  <p>
                    <h2>Voluptate velit</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className="button is-primary">SHOW DETAIL</button>
                  </p>
                </div>
                <div className="column is-7">
                  <p>
                    <div className="columns is-mobile btn-accortion">
                      <div className="column is-10">
                        <i className="xi-mail-read-o"></i>
                        <div>Reprehenderit in voluptate</div>
                      </div>
                      <div className="column is-2">
                        <i className="xi-angle-right"></i>
                      </div>
                    </div>
                    <div className="columns is-mobile btn-accortion">
                      <div className="column is-10">
                        <i className="xi-mail-read-o"></i>
                        <div>Veniam, quis nostrud</div>
                      </div>
                      <div className="column is-2">
                        <i className="xi-angle-right"></i>
                      </div>
                    </div>
                    <div className="columns is-mobile btn-accortion">
                      <div className="column is-10">
                        <i className="xi-mail-read-o"></i>
                        <div>Cupidatat non proident</div>
                      </div>
                      <div className="column is-2">
                        <i className="xi-angle-right"></i>
                      </div>
                    </div>
                    <div className="columns is-mobile btn-accortion">
                      <div className="column is-10">
                        <i className="xi-mail-read-o"></i>
                        <div>Tempor incididunt ut</div>
                      </div>
                      <div className="column is-2">
                        <i className="xi-angle-right"></i>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cp-section source">
          <SourceSection>
            <></>
            <iframe
              className={css`
                border: 0;
              `}
              title="test"
              //   src="https://jsfiddle.net/macaos/u967dgvL/2/embedded/html,css/"
              width="100%"
              height="270"
            ></iframe>
          </SourceSection>
        </div>
      </div>
    );
  }
}

export default Item;
