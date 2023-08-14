import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "./Modal.scss"

const ModalComponent = ({ isModalOpen, setIsModalOpen, setStatus, status, sendStatus }) => {
    return (
        <>
            <Modal title="Create a Post"
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <Button
                        key="Submit"
                        type='primary'
                        disabled={status.length > 0 ? false : true}
                        onClick={sendStatus} >
                        Post
                    </Button>
                ]}>

                <input
                    className='modal-input'
                    type="text"
                    placeholder="What do you wan't to talk about"
                    onChange={(ev) => setStatus(ev.target.value)}
                    value={status} />

            </Modal>
        </>
    );
};

export default ModalComponent;