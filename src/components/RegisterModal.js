import React, {useState} from 'react'
import {Button, Modal, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./img/Bellhop.jpg";

export default function RegisterModal() {
    const [show, setShow] = useState(false);
    const Style={
        height:'200px', 
        width:'250px',
        borderRadius:'2rem', 
        paddingBottom:'2rem'
    }
    return (
        <>
        <Nav.Link onClick={() => setShow(true)}>Exchange</Nav.Link>

        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="contained-modal-title-vcenter"
                        centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="register-modal">
                 Let’s get started
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <img src={logo} alt="logo" style={Style} />
                    <p> You can manage crypto assets from one place</p>
                    <Button as={Link} to="/register" onClick={() => setShow(false)}>Create Account</Button>
                </div>
             
            </Modal.Body>
      </Modal>
    </>
    )
}
