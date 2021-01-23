import React from "react";
import "../App.css";
import { Card, ListGroup, Row } from "react-bootstrap";
import FourTopperChart from "../components/FourTopperChart";
import { Link } from "react-router-dom";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";
// "#131722"

const backColorbtc = { backgroundColor: "orange" };
const backColoreth = { backgroundColor: "#adb4db" };
const backColorltc = { backgroundColor: "#c4bebe" };
const backColorbch = { backgroundColor: "#0ac18e" };

const MySpan = ({ color, elem }) => {
  return <span style={{ color: color }}>{elem}</span>;
};

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  lastUpdate,
  highPeek,
  lowPeek,
}) => {
  const headerColor =
    symbol === "btc"
      ? "grad_color_btc"
      : symbol === "eth"
      ? "grad_color_eth"
      : symbol === "ltc"
      ? "grad_color_ltc"
      : "grad_color_bch";

  const bodyColor =
    symbol === "btc"
      ? backColorbtc
      : symbol === "eth"
      ? backColoreth
      : symbol === "ltc"
      ? backColorltc
      : backColorbch;
  return (
    <Card>
      <Card.Img
        variant="bottom"
        src={image}
        className={headerColor}
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          // paddingLeft: 170,
          objectFit: "contain",

          // paddingRight: 170,
        }}
        height={120}
        width={100}
      />
      <Card.Body style={bodyColor}>
        <Card.Title className="bg-list text-center ctc" style={bodyColor}>
          {name}
        </Card.Title>
        <Card.Text>
          <FourTopperChart name={symbol} />
          <ListGroup variant="flush">
            <ListGroup.Item style={bodyColor}>
              <MySpan color="#000" elem="Current Price : " />
              {price.toLocaleString()} <MySpan color="#80d8ff" elem="$" />
            </ListGroup.Item>
            <ListGroup.Item style={bodyColor}>
              <MySpan color="#000" elem="Market Capital : " />
              {volume.toLocaleString()} <MySpan color="#80d8ff" elem="$" />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                ...bodyColor,
                ...{
                  color: priceChange < 0 ? "#ff1744" : "#00695c",
                  fontWeight: "bold",
                },
              }}
            >
              <MySpan color="#000" elem="Percentage (24) : " />
              {priceChange.toFixed(2)}%
            </ListGroup.Item>

            <ListGroup.Item style={bodyColor}>
              <MySpan color="#000" elem="Total Volume : " />
              {marketcap.toLocaleString()}
              <MySpan color="#80d8ff" elem=" $" />
            </ListGroup.Item>

            <ListGroup.Item style={bodyColor}>
              <MySpan color="#000" elem="Highest and Lowest Peek (24 H): " />
              <br />
              <Row
                className="d-flex justify-content-between"
                style={{
                  bodyColor,
                  ...{ paddingRight: 10, padddingLeft: 10, margin: 2 },
                }}
              >
                <div>
                  {highPeek}{" "}
                  <MdTrendingUp
                    style={{
                      backgroundColor: "green",
                    }}
                  />{" "}
                </div>
                <div>
                  {lowPeek}{" "}
                  <MdTrendingDown
                    style={{
                      backgroundColor: "red",
                    }}
                  />{" "}
                </div>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item style={bodyColor}>
              <Link
                to={`/details/${symbol}`}
                sym={symbol}
                className="btn btn-outline-danger form form-control"
              >
                Details
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-dark ctc">
        <small className=" bg-dark">
          Last updated on <br /> {new Date(lastUpdate).toLocaleTimeString()}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Coin;