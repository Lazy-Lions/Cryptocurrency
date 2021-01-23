import React,{useEffect, useState} from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import {
  Segment,
  Grid,
  Header,
  Form,
  Icon,
  Input,
  Button,
} from "semantic-ui-react";
import Responsive from "react-responsive";
import Footer from "../components/Footer";
import { Parallax } from "react-parallax";
import BgImage from "../components/img/bitcoin.png";
import { userState } from "../App";
import { useRecoilValue } from "recoil";

class CurrencyChart extends React.PureComponent {
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
      width: 220,
      height: 150,

      locale: "en",
    });
    this._ref.current.appendChild(script);
    // document.getElementsByTagName("a").removeAttribute("href");
  }
  render() {
    return (
      <div
        class="tradingview-widget-containe container d-flex justify-content-center "
        ref={this._ref}
        // style={{ width: "600px" }}
        style={{ pointerEvents: "none", cursor: "default" }}
      >
        <div
          class="tradingview-widget-container__widget "
          style={{ pointerEvents: "none", cursor: "default" }}
        ></div>
      </div>
    );
  }
}
const Dashboard =()=>{
  const user = useRecoilValue(userState)
  const [width, setWidth] = useState(window.innerWidth)
  const updateDimensions = () => setWidth(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize",updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])
    const Desktop = (props) => <Responsive {...props} minWidth={991} />;
    const Tablet = (props) => (
      <Responsive {...props} minWidth={701} maxWidth={990} />
    );
    const Mobile = (props) => <Responsive {...props} maxWidth={700} />;

    const Headline = (props) => {
      const Style = {
        fontSize: props.Size,
        fontWeight: props.Weight,
        paddingTop: props.PadTop,
      };
      return <div style={Style}>Buy & sell Crypto in minutes</div>;
    };
    const Promoline = (props) => {
      const Style = {
        fontSize: props.Size,
        fontWeight: props.Weight,
        paddingBlock: props.PadBlock,
      };
      return <div style={Style}>Easiest place to buy, sell, and manage</div>;
    };
    const ChartCard = (props) => {
      return (
        <Grid.Column  mobile={16} tablet={8} computer={4}>
          <Segment className="dashboardCard" style={Style.card}>
            <CurrencyChart name={props.currencyName} />
          </Segment>
        </Grid.Column>
      );
    };
    const ContactForm = (props) => {
      const Style = {
        container: {
          backgroundColor: "#b3e5fc",
          paddingBlock: "5rem",
        },
        body: {
          backgroundColor: "#fff",
          marginInline: props.bodyMargin,
          paddingBlock: "2rem",
          color: "whitesmoke",
          textAlign: "center",
          borderRadius: "1rem",
        },
        nameGroup: {
          marginLeft: props.nameMargin,
        },
        fname: {
          width: props.nameWidth,
          paddingBlock: props.namePad,
        },
        lname: {
          width: props.nameWidth,
          paddingBlock: props.namePad,
          marginLeft: props.leftMargin,
        },
        fmsg: {
          width: props.msgWidth,
          paddingBlock: props.namePad,
        },
      };
      return (
        <div style={Style.container}>
          <div>
            <Form style={Style.body}>
              <Header as="h1">
                Contact us
              </Header>
              <Form.Group inline style={Style.nameGroup} widths='equal' stackable>
                <Form.Field >
                  <label>
                    <Icon  name="user" size="big" color='grey' />
                  </label>
                  <Input
                    placeholder="First name"
                    style={Style.fname}
                    className="input-group "
                    transparent
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    placeholder="Last name"
                    style={Style.lname}
                    className="input-group"
                    transparent
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field inline>
                <label>
                  <Icon  name="envelope" size="big"  color='grey'/>
                </label>
                <Input
                  placeholder="Message"
                  style={Style.fmsg}
                  className="input-group"
                  transparent
                />
              </Form.Field>
              <Form.Field inline>
                <label>
                  <Icon  name="phone" size="big"  color='grey'/>
                </label>
                <Input
                  placeholder="Phone"
                  style={Style.fmsg}
                  className="input-group"
                  transparent
                />
              </Form.Field>
              <Button style={{ paddingInline: "60px", height: "40px" ,backgroundColor:'#cfcfcf'}}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      );
    };
    const Style = {
      cardContainer: {
        backgroundColor: "#b3e5fc",
        color: "#bebebe",
      },
      card: {
        backgroundColor: "#98dcfc",
        padding: "1rem",
        borderRadius: "1rem",
        border: "1px solid #E4E6ED",
        textAlign: "center",
        color: "rgb(0, 0, 26)",
        transition: ".5s",
        margin: "1rem 2rem",
        
      },
    };
    const insideStyles = {
      paddingTop: "3rem",
      color: "whitesmoke",
    };
    return (
      <div>
        <Parallax bgImage={BgImage} strength={600}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>
              <Col className="text-center">
                <div>
                  <Mobile>
                    <Headline Size="30px" Weight="700" PadTop="4rem" />{" "}
                  </Mobile>
                  <Desktop>
                    <Headline Size="50px" Weight="1000" PadTop="8rem" />{" "}
                  </Desktop>
                  <Mobile>
                    <Promoline Size="15px" Weight="400" PadBlock="2rem" />{" "}
                  </Mobile>
                  <Desktop>
                    <Promoline Size="20px" Weight="500" PadBlock="4rem" />{" "}
                  </Desktop>
                </div>
                {!user?
                <Form>
                  <Form.Field inline stackable>
                    <Input placeholder="Email address" size="big" />
                    <Button
                      size="big"
                      as={Link}
                      to="/register"
                      style={{ paddingBottom: "1.4rem", marginTop: "1rem" }}
                    >
                      Get Started
                    </Button>
                  </Form.Field>
                </Form>
                :null}
              </Col>
            </div>
          </div>
        </Parallax>
        <div style={Style.cardContainer}>
          <Grid stackable columns={4}>
            <ChartCard currencyName="btc" />
            <ChartCard currencyName="eth" />
            <ChartCard currencyName="bch" />
            <ChartCard currencyName="ltc" />
          </Grid>
        </div>
        <Desktop>
          <ContactForm
            bodyMargin="20%"
            namePad="2%"
            nameWidth="84%"
            msgWidth="90%"
            nameMargin="1.5%"
            leftMargin="0"
          />
        </Desktop>
        <Tablet>
          <ContactForm
            bodyMargin="5%"
            namePad="1%"
            nameWidth="82%"
            msgWidth="90%"
            nameMargin="1%"
            leftMargin="0"
          />
        </Tablet>
        <Mobile>
          <ContactForm
            bodyMargin="2rem"
            namePad=".5rem"
            nameWidth={width - 130}
            msgWidth={width - 130}
            nameMargin="1rem"
            leftMargin="45px"
          />
        </Mobile>
        <Footer/>
      </div>
    );
  }
export default Dashboard
