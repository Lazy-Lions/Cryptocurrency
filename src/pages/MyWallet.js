import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { GrBitcoin } from "react-icons/gr";
import { SiLitecoin } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { RiBitCoinFill } from "react-icons/ri";
import MyCard from "../components/Card";
import LeftAssetApiData from "../components/LeftAssetApiData";
import { Link } from "react-router-dom";
import "../App.css";

const MyWalletCard = () => {
        
  return (
    <Container fluid style={{ padding: "1rem" }}>
      <Grid stackable columns={4}>
        <Grid.Column>
          <MyCard coin="btc" />
        </Grid.Column>
        <Grid.Column>
          <MyCard coin="eth" />
        </Grid.Column>
        <Grid.Column>
          <MyCard coin="ltc" />
        </Grid.Column>
        <Grid.Column>
          <MyCard coin="bch" />
        </Grid.Column>
      </Grid>
    </Container>
  );
};
const MyWallet = () => {
  const Style = {
    container: {
      backgroundColor: "#1a1a1c",
      color: "whitesmoke",
      paddingInline:'2rem'
    },
  };

  return (
      <div className="fixPad " style={Style.container}>
        <Grid.Row style={{padding:'1.5rem'}}>
        <Link to="/details/btc">
            <RiBitCoinFill
              className="market"
              size={60}
              style={{
                backgroundColor: "#FF9319",
                padding: 10,
                borderRadius: 10,
                marginRight: 10,
              }}
            />
          </Link>
          <Link to="/details/eth">
            <FaEthereum
              className="market"
              size={60}
              style={{
                backgroundColor: "#62688F",
                padding: 10,
                borderRadius: 10,
                marginRight: 10,
              }}
            />
          </Link>
          <Link to="/details/ltc">
            <SiLitecoin
              className="market"
              size={60}
              style={{
                backgroundColor: "#325A98",
                padding: 10,
                borderRadius: 10,
                marginRight: 10,
              }}
            />
          </Link>
          <Link to="/details/bch">
            <GrBitcoin
              className="market"
              size={60}
              style={{
                backgroundColor: "#30B750",
                padding: 10,
                borderRadius: 10,
              }}
            />
          </Link>
        </Grid.Row>
        <Grid.Row style={{ height: 30 }}></Grid.Row>
        <Grid.Row>
          <MyWalletCard />
        </Grid.Row>
        <Grid stackable columns={2}>
          <Grid.Column width={10}>
            <h4 style={{ marginTop: 20 }}>Assets</h4>
            <LeftAssetApiData />
          </Grid.Column>
          <Grid.Column width={6}>
            <h4 style={{ marginTop: 20 }}>Recent Transaction</h4>
            <LeftAssetApiData />
          </Grid.Column>
        </Grid>
    </div>
  );
};
export default MyWallet;