"use client";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { Chat } from "../icons/Chat";
import { useRef } from "react"; 

export const ModalComment = () => {
  const modalRef = useRef(null);

  return (
    <>
      <Modal ref={modalRef}>
        <h1>Olá meu mano !!!</h1>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
};
