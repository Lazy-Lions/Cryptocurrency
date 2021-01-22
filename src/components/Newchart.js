import React from "react";

export default class Newchart extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol:
        this.props.name === "btc"
          ? "COINBASE:BTCUSD"
          : this.props.name === "eth"
          ? "COINBASE:ETHUSD"
          : this.props.name === "ltc"
          ? "COINBASE:LTCUSD"
          : "COINBASE:BCHUSD",
      showSymbolLogo: true,
      // colorTheme: "red",
      // color: "red",
      isTransparent: true,
      dateRange: "1D",
      colorTheme: "light",
      trendLineColor: "#37a6ef",
      underLineColor: "#FFECB3",
      width: 200,
      height: 150,

      locale: "en",
    });
    this._ref.current.appendChild(script);
    // document.getElementsByTagName("a").removeAttribute("href");
  }
  render() {
    return (
      <div
        class="tradingview-widget-containe container"
        ref={this._ref}
        // style={{ width: "600px" }}
        style={{ pointerEvents: "none", cursor: "default" }}
      >
        <div
          class="tradingview-widget-container__widget"
          style={{ pointerEvents: "none", cursor: "default" }}
        ></div>
      </div>
    );
  }
}