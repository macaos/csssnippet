import React, { Component } from "react";
import data from "../../../Data";
import { css } from "emotion";
import "../scss/Item.scss";
import SourceSection from "../../component/SourceSection";

class Item extends Component {
  constructor(props: {}) {
    super(props);
    // console.log("window.location", data.pathInfo().arr);
  }
  componentDidMount() {}
  render() {
    const { lastId } = data.pathInfo();
    return (
      <div>
        <h1>Basic Pattern</h1>
        <div className="section">
          <h3>EqualWidth</h3>
          <div className="html-wire">
            <div className="EqualWidth">
              <div className="col">
                <div>50%</div>
              </div>
              <div className="col">
                <div>50%</div>
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
              src="https://jsfiddle.net/macaos/5xmjkahg/10/embedded/html,css/"
              width="100%"
              height="230"
            ></iframe>
          </SourceSection>
        </div>
        {/* ///////////////////////// */}
        <div className="section">
          <h3>EqualWidth3</h3>
          <div className="html-wire">
            <div className="EqualWidth">
              <div className="col">
                <div>33%</div>
              </div>
              <div className="col">
                <div>33%</div>
              </div>
              <div className="col">
                <div>33%</div>
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
              src="https://jsfiddle.net/macaos/ck5bz0d9/1//embedded/html,css/"
              width="100%"
              height="270"
            ></iframe>
          </SourceSection>
        </div>
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Width 45% 55%</h3>
          <div className="html-wire">
            <div className="Width45_55">
              <div className="col-left">
                <div>45%</div>
              </div>
              <div className="col-right">
                <div>55%</div>
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
              src="https://jsfiddle.net/macaos/rhnumj5a/8/embedded/html,css/"
              width="100%"
              height="350"
            ></iframe>
          </SourceSection>
        </div>
        {/* ///////////////////////// */}
        <div className="section">
          <h3>LeftFixed-RightAuto</h3>
          <div className="html-wire">
            <div className="LeftFixed-RightAuto">
              <div className="col-left">
                <div>left</div>
              </div>
              <div className="col-right">
                <div>right1</div>
                <div>right2</div>
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
              src="https://jsfiddle.net/macaos//6f5a9Lqy/4/embedded/html,css/"
              width="100%"
              height="280"
            ></iframe>
          </SourceSection>
        </div>
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Wire Frame - Basic01</h3>
          <div className="html-wire">
            <div className="LeftRightFixed_CenterAuto">
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

        <div className="section source">
          <SourceSection>
            <></>
            <iframe
              className={css`
                border: 0;
              `}
              title="test"
              src="https://jsfiddle.net/macaos/g5srnd74/2/embedded/html,css/"
              width="100%"
              height="350"
            ></iframe>
          </SourceSection>
        </div>
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Left : AutoSizeFit - Right : ContentSize</h3>
          <div className="html-wire">
            <div className="LeftAutoSizeFitRightContentSize">
              <div className="col-left">
                <div>
                  left : auto size fit<br></br>OOOO OO OOOO O OOOOOOOO.
                </div>
              </div>
              <div className="col-right">
                <div> right : contents size </div>
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
              src="https://jsfiddle.net/macaos/3h1nm4vz/2/embedded/html,css/"
              width="100%"
              height="300"
            ></iframe>
          </SourceSection>
        </div>

        {/* ///////////////////////// */}
        <div className="section">
          <h3>
            Left : AutoSizeFit - Right1 : ContentSize - Right2 : ContentSize
          </h3>
          <div className="html-wire">
            <div className="LeftAutoSizeFitRightContentSize">
              <div className="col-left">
                <div>
                  left : auto size fit<br></br>OOOO OO OOOO O OOOOOOOO.
                </div>
              </div>
              <div className="col-right">
                <div> right1 : contents size </div>
              </div>
              <div className="col-right">
                <div> right2 : contents size </div>
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
              src="https://jsfiddle.net/macaos/9s1zhcj5/3/embedded/html,css/"
              width="100%"
              height="300"
            ></iframe>
          </SourceSection>
        </div>

        {/* //
        //
        //
        // */}
      </div>
    );
  }
}

export default Item;
