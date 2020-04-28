import React, { Component } from "react";
import { css } from "emotion";
import SourceSection from "../../component/SourceSection";
import { Link } from "react-router-dom";

class Item extends Component {
  currentId: string = "Contents02";
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>{this.currentId}</h1>
        {/* ///////////////////////// */}
        <div className="section">
          <h3>
            Wire Frame - <Link to="/item/layout/Grid01">Basic01</Link>
          </h3>

          <div className="html-wire">
            <div className="grid-2x2">
              <div className="thumb">A</div>
              <div className="thumb">B</div>
              <div className="thumb">C</div>
              <div className="thumb">D</div>
            </div>
          </div>
        </div>

        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Wire Frame - Step01</h3>
          <div className="html-wire">
            <div className="Contents02-step01">
              <div className="col-left">
                <div className="grid2x2">
                  <div className="thumb">A</div>
                  <div className="thumb">B</div>
                  <div className="thumb">C</div>
                  <div className="thumb">D</div>
                </div>
              </div>
              <div className="col-right">
                <div>45%</div>
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
              src="https://jsfiddle.net/macaos/axsvfw51/1/embedded/html,css/"
              width="100%"
              height="270"
            ></iframe>
          </SourceSection>
        </div>
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Wire Frame - Step02</h3>
          <div className="html-wire">
            <div className="Contents02-step02">
              <div className="col-left">
                <div className="grid2x2">
                  <div className="thumb">
                    <div className="bul"></div>
                    <div className="te">
                      <h5>Title</h5>
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
                      <h5>Title</h5>
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
                      <h5>Title</h5>
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
                      <h5>Title</h5>
                      <div>
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et exercitation ullamco laboris
                        nisi ut aliquip
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-right">
                <div className="dummy-img"></div>
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
              src="https://jsfiddle.net/macaos/9513nm64/2/embedded/html,css/"
              width="100%"
              height="270"
            ></iframe>
          </SourceSection>
        </div>
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Use Example 01</h3>
          <div className="html-wire-">
            <div className="Contents02-example01">
              <div className="col-left">
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
              </div>
              <div className="col-right">
                <div className="dummy-img"></div>
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
              src="https://jsfiddle.net/macaos/u967dgvL/2/embedded/html,css/"
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
