import classes from "./Modal.module.css";
import { ModalProps } from "./ModalProps";

function Modal({ children, visible, setVisible }: ModalProps) {
  const rootClasses = [classes.modalWrapper];
  if (visible) {
    rootClasses.push(classes.active);
  }

  function closeModal(e: any) {
    setVisible(false);
  }

  return (
    <div onClick={closeModal} className={rootClasses.join(" ")}>
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={classes.modal}
      >
        <h1>Area coordinates</h1>
        {children}
      </section>
    </div>
  );
}

export default Modal;
