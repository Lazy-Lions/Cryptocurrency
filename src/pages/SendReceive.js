import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/auth";
import fire from "../components/config/fire";
import { Button, Modal, Nav } from "react-bootstrap";
import {
  Form,
  Segment,
  Input,
  Grid,
  Divider,
  Header,
  Icon,
} from "semantic-ui-react";
import Responsive from "react-responsive";
import * as CgIcons from "react-icons/cg";
import QRCode from "react-qr-code";
import { useRecoilState } from "recoil";
import {
  btcprivate,
  btcpublic,
  ethpublic,
  ethprivate,
  bchpublic,
  bchprivate,
  ltcpublic,
  ltcprivate,
} from "./Register";
import axios from "axios";

const SendReceive = () => {
  const [btcp, setBtcpublic] = useRecoilState(btcpublic);
  const [btcpr, setBtcprivate] = useRecoilState(btcprivate);
  const [ethp, setEthpublic] = useRecoilState(ethpublic);
  const [ethpr, setEthprivate] = useRecoilState(ethprivate);
  const [bchp, setBchpublic] = useRecoilState(bchpublic);
  const [bchpr, setBchprivate] = useRecoilState(bchprivate);
  const [ltcp, setLtcpublic] = useRecoilState(ltcpublic);
  const [ltcpr, setLtcprivate] = useRecoilState(ltcprivate);
  const [text, setText] = useState("");
  const [coin, setCoin] = useState("");
  const [show, setShow] = useState(false);
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [fee, setFee] = useState("");
  const sendHandler = () => {
    const btcparameter = {
      fromAddress: btcp,
      pkey: btcpr,
      toAddress: receiver,
      amount: amount,
      withFee: fee,
    };
    const ethparameter = {
      fromAddress: ethp,
      pkey: ethpr,
      toAddress: receiver,
      amount: amount,
      withFee: fee,
    };
    const bchparameter = {
      fromAddress: bchp,
      pkey: bchpr,
      toAddress: receiver,
      amount: amount,
      withFee: fee,
    };
    const ltcparameter = {
      fromAddress: ltcp,
      pkey: ltcpr,
      toAddress: receiver,
      amount: amount,
      withFee: fee,
    };

    axios
      .post(
        `http://199.192.16.63/api/send_transaction/${coin}`,
        coin === "BTC"
          ? btcparameter
          : coin === "ETH"
          ? ethparameter
          : coin === "BCH"
          ? bchparameter
          : coin === "LTC"
          ? ltcparameter
          : null,
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    var id = fire.auth().currentUser.uid;
    firebase
      .database()
      .ref("Currency_Info/" + id)
      .once("value")
      .then((snapshot) => {
        setBtcpublic(snapshot.val() && snapshot.val().BtcPublic);
        setBtcprivate(snapshot.val() && snapshot.val().BtcPrivate);
        setEthpublic(snapshot.val() && snapshot.val().EthPublic);
        setEthprivate(snapshot.val() && snapshot.val().EthPrivate);
        setBchpublic(snapshot.val() && snapshot.val().BchPublic);
        setBchprivate(snapshot.val() && snapshot.val().BchPrivate);
        setLtcpublic(snapshot.val() && snapshot.val().LtcPublic);
        setLtcprivate(snapshot.val() && snapshot.val().LtcPrivate);
      });
  }, [
    setBtcpublic,
    setBtcprivate,
    setEthpublic,
    setEthprivate,
    setBchpublic,
    setBchprivate,
    setLtcpublic,
    setLtcprivate,
  ]);
  const Desktop = (props) => <Responsive {...props} minWidth={992} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={991} />;
  return (
    <>
      <Desktop>
        <Nav.Link onClick={() => setShow(true)}>Send/Receive</Nav.Link>
      </Desktop>
      <Mobile>
        <Nav.Link>
          <CgIcons.CgAddR
            size={30}
            onClick={() => setShow(true)}
            className="text-warning"
          />
        </Nav.Link>
      </Mobile>

      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Body style={{ backgroundColor: "#f0f4c3" }}>
          <Segment placeholder style={{ backgroundColor: "#f0f4c3" }}>
            <Icon
              name="close"
              size="large"
              color="red"
              onClick={() => setShow(false)}
              style={{ cursor: "pointer", margin: ".5rem" }}
            />
            <Grid columns={2} relaxed="very" centered stackable>
              <Grid.Column verticalAlign="middle">
                <Header as="h3" color="orange">
                  <Icon name="send" /> Send{" "}
                </Header>
                <Form onSubmit={sendHandler} className="text-left">
                  <Form.Input
                    fluid
                    label="Receiver"
                    value={receiver}
                    placeholder="Crypto Id"
                    onChange={(e) => setReceiver(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    label="Amount"
                    value={amount}
                    placeholder="Enter Amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    label="With Fee"
                    value={fee}
                    placeholder="with fee"
                    onChange={(e) => setFee(e.target.value)}
                  />
                  <Form.Field fluid>
                    <label>Currency</label>
                    <select
                      value={coin}
                      style={{ height: "3rem" }}
                      onChange={(e) => setCoin(e.target.value)}
                    >
                      <option value="Select Currency">----</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                      <option value="BCH">BCH</option>
                      <option value="LTC">LTC</option>
                    </select>
                  </Form.Field>
                  <div className="text-center">
                    <Button type="submit" variant="warning">
                      Continue
                    </Button>
                  </div>
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign="middle" textAlign="center">
                <Header as="h3" inverted color="orange">
                  <Icon name="download" /> Receive{" "}
                </Header>
                <QRCode value={text} />
                <Divider horizontal>Or</Divider>
                <div className="text-center">
                  <Input
                    style={{ height: "3rem", marginInline: "0.5rem" }}
                    icon="id card outline"
                    iconPosition="left"
                    value={text}
                  />
                  <select
                    value={text}
                    style={{ height: "3rem" }}
                    onChange={(e) => setText(e.target.value)}
                  >
                    <option value="Select Currency">----</option>
                    <option value={btcp}>BTC</option>
                    <option value={ethp}>ETH</option>
                    <option value={bchp}>BCH</option>
                    <option value={ltcp}>LTC</option>
                  </select>
                </div>
              </Grid.Column>
            </Grid>
            <Desktop>
              <Divider vertical>Or</Divider>
            </Desktop>
          </Segment>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SendReceive;
