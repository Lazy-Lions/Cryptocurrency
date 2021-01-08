import React, { Component } from "react";

export default class FourTopperChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        
        {
          description: (this.props.name=='btc')?"BTC":(this.props.name=='eth')?"ETH":(this.props.name=='ltc')?"LTC":"BCH",
          proName: (this.props.name=='btc')? "COINBASE:BTCUSD":(this.props.name=='eth')?"COINBASE:ETHUSD":(this.props.name=='ltc')?"COINBASE:LTCUSD":"COINBASE:BCHUSD",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
      width: 80,
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