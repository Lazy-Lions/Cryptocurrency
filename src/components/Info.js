import React, { useEffect, useState } from "react";
import firebase from "firebase";
import fire from "../components/config/fire";
import "firebase/auth";
import { Button, Form, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { firstnameState, lastnameState } from "../pages/Register";

const Info = () => {
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [fname, setFname] = useRecoilState(firstnameState);
  const [lname, setLname] = useRecoilState(lastnameState);
  useEffect(() => {
    var id = fire.auth().currentUser.uid;
    firebase
      .database()
      .ref("User_Info/" + id)
      .once("value")
      .then((snapshot) => {
        setFname(snapshot.val() && snapshot.val().Firstname);
        setLname(snapshot.val() && snapshot.val().Lastname);
        setBirthday(snapshot.val() && snapshot.val().Birthday);
        setGender(snapshot.val() && snapshot.val().Gender);
        setAddress(snapshot.val() && snapshot.val().Address);
        setCity(snapshot.val() && snapshot.val().City);
        setPostcode(snapshot.val() && snapshot.val().Postcode);
        setCountry(snapshot.val() && snapshot.val().Country);
      });
  }, [
    setFname,
    setLname,
    setBirthday,
    setGender,
    setAddress,
    setCity,
    setPostcode,
    setCountry,
  ]);
  const submitHandler = (event) => {
    alert("Info saved Succesfully");
    event.preventDefault();
    var id = fire.auth().currentUser.uid;
    firebase
      .database()
      .ref("User_Info/" + id)
      .set({
        Firstname: fname,
        Lastname: lname,
        Birthday: birthday,
        Gender: gender,
        Address: address,
        City: city,
        Postcode: postcode,
        Country: country,
      });
  };
  return (
    <div
      className="text-center"
      style={{ backgroundColor: "#64b5f6", padding: "1rem" }}
    >
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="firstname">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              value={fname}
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="lastname">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              value={lname}
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="firstname">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              required
              type="date"
              value={birthday}
              placeholder="Birthday"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              required
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              style={{ height: "3rem" }}
              custom
            >
              <option value="Male" selected>
                Male
              </option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              value={address}
              placeholder="#House, #Road"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              value={city}
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="postcode">
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              required
              type="text"
              value={postcode}
              placeholder="Postcode"
              onChange={(e) => setPostcode(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              type="text"
              value={country}
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Info;
