import React, { Component } from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import classnames from "classnames";
import SourceSection from "../../component/SourceSection";

class Item extends Component {
  currentId: string = "Header02";
  depthInfo: string[] = ["Home", "Basic", this.currentId];
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>{this.currentId}</h1>
        {/* // */}

        {/* ///////////////////////// */}
        <div className="section">
          <h3>Wire Frame - Basic</h3>
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
              src="https://jsfiddle.net/macaos/g5srnd74/2//embedded/html,css/"
              width="100%"
              height="270"
            ></iframe>
          </SourceSection>
        </div>
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Wire Frame - Step01</h3>
          <div className="html-wire">
            <div className="Header02-step01">
              <div className="col-left">
                <i className="xi-globus xi-2x icon"></i>
                <div className="logo">LOGO</div>
              </div>
              <div className="col-center">
                <div>
                  <button> ABOUT </button>
                  <button> WORK </button>
                  <button> SERVICE </button>
                  <button> BLOG </button>
                  <button> CONTACT </button>
                </div>
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
              src="https://jsfiddle.net/macaos/jLovahx2/3/embedded/html,css/"
              width="100%"
              height="300"
            ></iframe>
          </SourceSection>
        </div>
        {/* // */}
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Wire Frame - Step02</h3>
          <div className="html-wire">
            <div className="Header02-step02">
              <div className="col-left">
                <i className="xi-globus xi-2x icon"></i>
                <div className="logo">LOGO</div>
              </div>
              <div className="col-center">
                <div className="buttons">
                  <button> ABOUT </button>
                  <button className="active"> WORK </button>
                  <button> SERVICE </button>
                  <button> BLOG </button>
                  <button> CONTACT </button>
                </div>
              </div>
              <div className="col-right">
                <i className="xi-user-o xi-x"></i>
                <i className="xi-bell-o xi-x"></i>
                <i className="xi-search xi-x"></i>
                <i className="xi-cart-o xi-x"></i>
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
              src="https://jsfiddle.net/macaos/a5Leqc2y/3/embedded/html,css/"
              width="100%"
              height="300"
            ></iframe>
          </SourceSection>
        </div>

        {/* // */}
        {/* ///////////////////////// */}
        <div className="section">
          <h3>Use Example 01</h3>
          <div className="html-wire-">
            <div className="Header02-step02">
              <div className="col-left">
                <i className="xi-globus xi-2x icon"></i>
                <div className="logo">LOGO</div>
              </div>
              <div className="col-center">
                <div className="buttons">
                  <button> ABOUT </button>
                  <button className="active"> WORK </button>
                  <button> SERVICE </button>
                  <button> BLOG </button>
                  <button> CONTACT </button>
                </div>
              </div>
              <div className="col-right">
                <i className="xi-user-o xi-x"></i>
                <i className="xi-bell-o xi-x"></i>
                <i className="xi-search xi-x"></i>
                <i className="xi-cart-o xi-x"></i>
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
              src="https://jsfiddle.net/macaos/a5Leqc2y/3/embedded/html,css/"
              width="100%"
              height="300"
            ></iframe>
          </SourceSection>
        </div>

        {/* // */}
      </div>
    );
  }
}

export default Item;
