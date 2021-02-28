import classes from './Modal.module.css';


let Modal = ({active, id, selected, setActive}) => {
  return (
    <div className={active ? `${classes.boxModal} ${classes.active}` : `${classes.boxModal}`} onClick={() => setActive(false)} >
      <div className={active ? `${classes.boxModalContent} ${classes.active}` : `${classes.boxModalContent}`} onClick={event => event.stopPropagation()} >
        <h3>
         Вы подтверждаете свой выбор?
        </h3>
        <p>
          После того, как вы нажмете OK, игрушка станет недоступна для других.
        </p>
        <button className={classes.buttonDefault} onClick={() => selected(true)} >OK</button>
        <button className={classes.buttonSecondary} onClick={() => setActive(false)}  >Отмена</button>
        <span className={classes.boxModalClose} onClick={() => setActive(false)} >&#10006;</span>
      </div>

    </div>
  )
}

export default Modal;