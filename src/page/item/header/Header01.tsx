import React, { Component } from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import classnames from "classnames";
import SourceSection from "../../component/SourceSection";

class Item extends Component {
  currentId: string = "Header01";
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
            <div className="LeftAutoSizeFitRightContentSize">
              <div className="col-left">
                <div>left : auto size fit</div>
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

        <div className="section">
          <h3>Wire Frame - Step01</h3>
          <div className="html-wire">
            <div className="Header01-step01">
              <div className="logo">
                <i className="xi-globus xi-2x icon"></i>
                <div className="text">LOGO</div>
              </div>
              <div className="col-right">
                <button> ABOUT </button>
                <button> WORK </button>
                <button> SERVICE </button>
                <button> BLOG </button>
                <button> CONTACT </button>
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
              src="https://jsfiddle.net/macaos/xyomtsu0/6/embedded/html,css/"
              width="100%"
              height="300"
            ></iframe>
          </SourceSection>
        </div>
        {/* // */}
        <div className="section">
          <h3>Wire Frame - Step02</h3>
          <div className="html-wire">
            <div className="Header01-step02">
              <div className="logo">
                <i className="xi-globus xi-2x icon"></i>
                <div className="text">LOGO</div>
              </div>
              <div className="buttons">
                <button className="active"> ABOUT </button>
                <button> WORK </button>
                <button> SERVICE </button>
                <button> BLOG </button>
                <button> CONTACT </button>
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
              src="https://jsfiddle.net/macaos/bht9xk4v/2/embedded/html,css/"
              width="100%"
              height="300"
            ></iframe>
          </SourceSection>
        </div>
        {/* // */}
        <div className="section">
          <h3>Use Example 01</h3>
          <div className="html-wire-">
            <div className="Header01-example01">
              <div className="logo">
                <i className="xi-globus xi-2x icon"></i>
                <div className="text">LOGO</div>
              </div>
              <div className="buttons">
                <button className="active"> ABOUT </button>
                <button> WORK </button>
                <button> SERVICE </button>
                <button> BLOG </button>
                <button> CONTACT </button>
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
              src="https://jsfiddle.net/macaos/rayeo7nL/3/embedded/html,css/"
              width="100%"
              height="300"
            ></iframe>
          </SourceSection>
        </div>
        {/* // */}
        <div className="section">
          <h3>Use Example 02</h3>
          <div className="html-wire-">
            <div className="Header01-example02">
              <div className="logo">
                <i className="xi-globus xi-2x icon"></i>
                <div className="text">LOGO</div>
              </div>
              <div className="row-right buttons">
                <button className="active"> ABOUT </button>
                <button> WORK </button>
                <button> SERVICE </button>
              </div>
              <div className="row-right">
                <button> CONTACT </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section">
          <h3>Use Example 03</h3>
          <div className="html-wire-">
            <div className="Header01-example02">
              <div className="logo">
                <i className="xi-globus xi-2x icon"></i>
                <div className="text">LOGO</div>
              </div>
              <div className="row-right buttons">
                <button className="active"> ABOUT </button>
                <button> WORK </button>
                <button> SERVICE </button>
                <button> BLOG </button>
                <button> CONTACT </button>
              </div>
              <div className="row-right">
                <i className="xi-user-o xi-x"></i>
                <i className="xi-bell-o xi-x"></i>
                <i className="xi-search xi-x"></i>
                <i className="xi-cart-o xi-x"></i>
                <i className="xi-bars xi-2x"></i>
              </div>
            </div>
          </div>
        </div> */}

        <div className="section">
          <h3>Use Example 03</h3>
          <div className="html-wire-">
            <div className="Header01-example02">
              <div className="logo">
                <i className="xi-globus xi-2x icon"></i>
                <div className="text">LOGO</div>
              </div>
              <div className="row-right buttons">
                <button className="active"> ABOUT </button>
                <button> WORK </button>
                <button> SERVICE </button>
              </div>
              <div className="row-right">
                <i className="xi-user-o xi-x"></i>
                <i className="xi-search xi-x"></i>
                <i className="xi-bars xi-2x"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Use Example 04</h3>
          <div className="html-wire-">
            <div className="Header01-example02">
              <div className="logo">
                <i className="xi-globus xi-2x icon"></i>
                <div className="text">LOGO</div>
              </div>
              <div className="row-right">
                <i className="xi-user-o xi-x"></i>
                <i className="xi-bell-o xi-x"></i>
                <i className="xi-search xi-x"></i>
                <i className="xi-cart-o xi-x"></i>
              </div>
            </div>
          </div>
        </div>

        {/* // */}
      </div>
    );
  }
}

export default Item;
