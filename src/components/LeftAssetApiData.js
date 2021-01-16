import React, { Component } from "react";
import axios from "axios";
import { Table, Segment, Grid } from "semantic-ui-react";
import { Table as Tbl } from "react-bootstrap";
import "../App.css";
import Responsive from "react-responsive";

const Desktop = (props) => <Responsive {...props} minWidth={992} />;
const Mobile = (props) => <Responsive {...props} maxWidth={991} />;

const  LeftAssetItem =({
  device,
  name,
  symbol,
  image,
  price,
  priceChange,
})=> {
  return device === "desktop" ? (
    <Table.Row>
      <Table.Cell className="">
        {/*  style={{ verticalAlign: "sub" }} */}
        <img
          src={image}
          alt={name}
          style={{
            padding: 5,
            objectFit: "contain",
          }}
          height={40}
          width={40}
        />
      </Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{price.toLocaleString()}</Table.Cell>
      <Table.Cell
        style={{
          color: priceChange < 0 ? "#ff1744" : "#00c853",
        }}
      >
        {priceChange.toFixed(2)}%
      </Table.Cell>
    </Table.Row>
  ) : (
    <tr>
      <td className="">
        {/*  style={{ verticalAlign: "sub" }} */}
        <img
          src={image}
          alt={name}
          style={{
            padding: 5,
            objectFit: "contain",
          }}
          height={40}
          width={40}
        />
      </td>

      <td>{price.toLocaleString()}</td>
      <td
        style={{
          color: priceChange < 0 ? "#ff1744" : "#00c853",
        }}
      >
        {priceChange.toFixed(2)}%
      </td>
    </tr>
  );
}
export default class LeftAssetApiData extends Component {

  constructor() {
    super();
    this.state = {
      coins: [],
      search: "",
    };
  }
  apiCall = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true"
      )
      .then((res) => {
        this.setState({ coins: res.data });
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.interval = setInterval(this.apiCall, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const filter1 = this.state.coins.filter(
      (coin) =>
        coin.symbol === "btc" ||
        coin.symbol === "eth" ||
        coin.symbol === "ltc" ||
        coin.symbol === "bch"
    );

    const filteredCoins = filter1.filter((coin) =>
      coin.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return (
      <>
        <Desktop>
          <Grid.Column>
            <Table
              className="ui very basic"
              style={{
                color: "white",
                backgroundColor: "#262D47",
                border: "none",
                padding: 15,
              }}
            >
              <Table.Row>
                <Table.HeaderCell style={{ color: "white" }}>
                  Currency
                </Table.HeaderCell>
                <Table.HeaderCell style={{ color: "white" }}>
                  Name
                </Table.HeaderCell>
                <Table.HeaderCell style={{ color: "white" }}>
                  Current Price
                </Table.HeaderCell>
                <Table.HeaderCell style={{ color: "white" }}>
                  <h5>Change</h5>
                </Table.HeaderCell>
              </Table.Row>
              {/* </Table.Header> */}

              <Table.Body>
                {filteredCoins.map((coin) => {
                  return (
                    <LeftAssetItem
                      device="desktop"
                      name={coin.name}
                      symbol={coin.symbol}
                      image={coin.image}
                      price={coin.current_price}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  );
                })}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Desktop>
        <Mobile>
          <Segment style={{ backgroundColor: "#262d47", color: "white" }}>
            <Tbl
              responsive
              style={{ backgroundColor: "#262d47", color: "white" }}
            >
              <thead>
                <tr>
                  <th>Icon</th>

                  <th>Current Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin) => {
                  return (
                    <LeftAssetItem
                      device="mobile"
                      name={coin.name}
                      symbol={coin.symbol}
                      image={coin.image}
                      price={coin.current_price}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  );
                })}
              </tbody>
            </Tbl>
          </Segment>
        </Mobile>
      </>
    );
  }
}
