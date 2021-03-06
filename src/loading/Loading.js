import React from "react";
import PropTypes from "prop-types";
import "./loading.scss";
class Loading extends React.Component {
  render() {
    if (!this.props.show) return null;
    return (
      <div className="bc-loading-bar">
        <svg
          width="200px"
          height="200px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          class="lds-dual-ring"
        >
          <circle
            cx="50"
            cy="50"
            ng-attr-r="{{config.radius}}"
            ng-attr-stroke-width="{{config.width}}"
            ng-attr-stroke="{{config.stroke}}"
            ng-attr-stroke-dasharray="{{config.dasharray}}"
            fill="none"
            stroke-linecap="round"
            r="40"
            stroke-width="4"
            stroke="#fcb711"
            stroke-dasharray="62.83185307179586 62.83185307179586"
            transform="rotate(32.9432 50 50)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="2.7s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    );
  }
}
Loading.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  show: PropTypes.bool
};
Loading.defaultProps = {
  show: true
};
export default Loading;
