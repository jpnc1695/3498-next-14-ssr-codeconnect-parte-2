"use client";
import { useRef } from "react"; 
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { Chat } from "../icons/Chat";
import { Textarea } from "../Textarea";
import { Subheading} from "../SubmitHeading";
import { SubmitButton } from "../SubmitButton";
import styles from './commentmodal.module.css'


export const ModalComment = ({action}) => {
  const modalRef = useRef(null);

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={()=> modalRef.current.closeModal()}>
          <Subheading>Deixe seu comentário sobre o Post:</Subheading>
          <Textarea name="text" rows={8} placeholder="Digite aqui..."/>
          <div className={styles.footer}>
              <SubmitButton>
                Comentar
              </SubmitButton>
          </div>         
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
};
