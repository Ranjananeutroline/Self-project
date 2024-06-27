import React, { useState } from "react";
import "./WasteService.css";
import Data from "./Data";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';


function WasteService({ showItemMoreButton = false, showReadMoreLink = true }) {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const handleShowModal = (item) => {
        setModalContent(item);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return(
        <div>
            <h3 className='wservice-title'>Waste Services</h3>
            <div className="wservice-container">
                {Data.map((item) => (
                    <div key={item.id} className="wservice-item">
                        <div>
                            <img src={item.image} alt="waste management" height={"30px"} width={"30px"}/>
                            <div>
                                <h5 className="witem-title">{item.title}</h5>
                                <p>{item.text}</p>
                                {showItemMoreButton && (
                                    <div className='more-btn'>
                                        <button onClick={() => handleShowModal(item)}>
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                {showReadMoreLink && (
                    <div className="wservice-read">
                        <Link to="/services">
                            <button className="wservice-read-btn">Read More</button>
                        </Link>
                    </div>
                )}
            </div>

            <Modal show={showModal} onHide={handleCloseModal} className="waste-modal">
                <Modal.Header closeButton>
                    <Modal.Title className='waste-title'>{modalContent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='waste-body'>
                    <img src={modalContent.image} alt="waste management" height={"50px"} width={"50px"}/>
                    <p className="waste-text">{modalContent.text}</p>
                </Modal.Body>
                <Modal.Footer className='waste-footer'>
                    <button className='waste-btn' onClick={handleCloseModal}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default WasteService;
