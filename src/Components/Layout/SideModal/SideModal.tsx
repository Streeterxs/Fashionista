import React from "react";
import Backdrop from "../Backdrop/Backdrop";

import './SideModal.css'

type SideModalProps = {
    showModal: boolean,
    clickBackdrop: () => void
};

const SideModal = ({showModal, clickBackdrop}: SideModalProps) => {
    return (
        <Backdrop show={showModal} clicked={clickBackdrop}>
            <div className="side-modal-wrapper display-flex justify-end">
                <div className="padx-2 side-modal" onClick={event => {
                    event.stopPropagation()
                }}>
                    teste
                </div>
            </div>
        </Backdrop>
    )
};

export default SideModal;

