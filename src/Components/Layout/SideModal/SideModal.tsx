import React from "react";
import Backdrop from "../Backdrop/Backdrop";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './SideModal.css'

type SideModalProps = {
    showModal: boolean,
    closeModal: () => void,
    headerContent: string | JSX.Element,
    children?: string | JSX.Element,
    footer?: string | JSX.Element
};

const SideModal = ({showModal, closeModal, headerContent, children, footer}: SideModalProps) => {
    return (
        <Backdrop show={showModal} clicked={closeModal}>
            <div className="side-modal-wrapper display-flex justify-end">
                <div className="side-modal" onClick={event => {
                    event.stopPropagation()
                }}>
                    <div className="display-flex padx-2">
                        <p>
                            <a onClick={closeModal} className="marr-1 cursor-pointer">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                            {headerContent}
                        </p>
                    </div>
                    <div className="side-modal__body">
                        {!!children ? children : null}
                    </div>
                    {
                        footer ?
                        <div className="side-modal__footer">
                            {footer} 
                        </div> :
                        null
                    }
                </div>
            </div>
        </Backdrop>
    )
};

export default SideModal;

