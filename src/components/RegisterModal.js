import React, {useState} from 'react'
import {Button, Modal, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./img/Bellhop.jpg";

export default function RegisterModal() {
    const [show, setShow] = useState(false);
    return (
        <>
        <Nav.Link onClick={() => setShow(true)}>Exchange</Nav.Link>

        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="register-modal"
        >
            <Modal.Header closeButton>
            <Modal.Title id="register-modal">
                 Let’s get started
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <img src={logo} alt="logo" style={{height:'200px', width:'250px', paddingBottom:'2rem'}} />
                    <p>Never a better time than now to start thinking about
                         how you can manage all your finances and crypto assets from one place.</p>
                    <Button as={Link} to="/register" onClick={() => setShow(false)}>Create Account</Button>
                </div>
             
            </Modal.Body>
      </Modal>
    </>
    )
}
