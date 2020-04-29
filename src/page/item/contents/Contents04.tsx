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
          <h3 className="h3">Wire Frame - step01</h3>
          <div className="html-wire">
            <div className="content Contents04-step01">
              <div className="columns">
                <div className="column is-5 column-1">
                  <p>
                    <div className="grid2x2">
                      <div className="thumb">
                        <div className="bul"></div>
                        <div className="te">
                          <h5>Lorem ipsum dolor sit amet</h5>
                          <div>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et exercitation ullamco laboris
                            nisi ut aliquip
                          </div>
                        </div>
                      </div>
                      <div className="thumb">
                        <div className="bul"></div>
                        <div className="te">
                          <h5>Lorem ipsum dolor sit amet</h5>
                          <div>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et exercitation ullamco laboris
                            nisi ut aliquip
                          </div>
                        </div>
                      </div>
                      <div className="thumb">
                        <div className="bul"></div>
                        <div className="te">
                          <h5>Lorem ipsum dolor sit amet</h5>
                          <div>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et exercitation ullamco laboris
                            nisi ut aliquip
                          </div>
                        </div>
                      </div>
                      <div className="thumb">
                        <div className="bul"></div>
                        <div className="te">
                          <h5>Lorem ipsum dolor sit amet</h5>
                          <div>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et exercitation ullamco laboris
                            nisi ut aliquip
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="column is-7">
                  <div className="dummy-img"></div>
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
        {/* //////////////////////////////////// */}
        <div className="cp-section">
          <h3 className="h3">Use Example - step01</h3>
          <div className="html-wire-">
            <div className="content Contents04-step01">
              <div className="columns">
                <div className="column is-5 column-1">
                  <p>
                    <div className="grid2x2">
                      <div className="thumb">
                        <div className="bul"></div>
                        <div className="te">
                          <h5>Lorem ipsum dolor sit amet</h5>
                          <div>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et exercitation ullamco laboris
                            nisi ut aliquip
                          </div>
                        </div>
                      </div>
                      <div className="thumb">
                        <div className="bul"></div>
                        <div className="te">
                          <h5>Lorem ipsum dolor sit amet</h5>
                          <div>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et exercitation ullamco laboris
                            nisi ut aliquip
                          </div>
                        </div>
                      </div>
                      <div className="thumb">
                        <div className="bul"></div>
                        <div className="te">
                          <h5>Lorem ipsum dolor sit amet</h5>
                          <div>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et exercitation ullamco laboris
                            nisi ut aliquip
                          </div>
                        </div>
                      </div>
                      <div className="thumb">
                        <div className="bul"></div>
                        <div className="te">
                          <h5>Lorem ipsum dolor sit amet</h5>
                          <div>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et exercitation ullamco laboris
                            nisi ut aliquip
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="column is-7">
                  <div className="dummy-img"></div>
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
      </div>
    );
  }
}

export default Item;
