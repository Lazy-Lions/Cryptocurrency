import React, {useState}  from 'react'
import * as IoIcons from 'react-icons/io'
import {Modal} from 'react-bootstrap'

export default function Notification() {
    const [lgShow, setLgShow] = useState(false);
    
    return (
        <div>
               <IoIcons.IoMdNotificationsOutline size={30} onClick={() => setLgShow(true)}/>
               <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Notification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>you earned $250 from Bitcoin</p>
                    <p>you earned $1250 from Bitcoin</p>
                    <p>you earned $2050 from Bitcoin</p> 
                </Modal.Body>
                </Modal> 
            </div>
    )
}
