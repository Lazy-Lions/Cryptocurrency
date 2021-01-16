import React from "react";
import "../App.css";
import {  Card, ListGroup, Row } from "react-bootstrap";
import FourTopperChart from "../components/FourTopperChart";
import { Link } from "react-router-dom";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";

const backColor = { backgroundColor: "#131722" };

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
  return (
    <Card>
      <Card.Img
        variant="bottom"
        src={image}
        className="bg-dark"
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
      <Card.Body className="bg-list ctc">
        <Card.Title
          className="bg-list text-center ctc"
          style={{ fontSize: 30 }}
        >
          {" "}
          {name}
        </Card.Title>
        <Card.Text>
          <FourTopperChart name={symbol} />
          <ListGroup variant="flush">
            <ListGroup.Item style={backColor}>
              <MySpan color="#a8a8a8" elem="Current Price : " />
              {price.toLocaleString()} <MySpan color="#80d8ff" elem="$" />
            </ListGroup.Item>
            <ListGroup.Item style={backColor}>
              <MySpan color="#a8a8a8" elem="Market Capital : " />
              {volume.toLocaleString()} <MySpan color="#80d8ff" elem="$" />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                ...backColor,
                ...{ color: priceChange < 0 ? "#ff1744" : "#00c853" },
              }}
            >
              <MySpan color="#a8a8a8" elem="Percentage (24) : " />
              {priceChange.toFixed(2)}%
            </ListGroup.Item>

            <ListGroup.Item style={backColor}>
              <MySpan color="#a8a8a8" elem="Total Volume : " />
              {marketcap.toLocaleString()}
              <MySpan color="#80d8ff" elem=" $" />
            </ListGroup.Item>

            <ListGroup.Item style={backColor}>
              <MySpan color="#a8a8a8" elem="Highest and Lowest Peek (24 H): " />
              <br />
              <Row
                className="d-flex justify-content-between"
                style={{
                  ...backColor,
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
            <ListGroup.Item style={backColor}>
              <Link
                to={`/details/${symbol}`}
                sym={symbol}
                className="btn btn-info form form-control"
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
