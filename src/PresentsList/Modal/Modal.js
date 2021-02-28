import classes from './Modal.module.css';


let Modal = ({active, id, changePresentsValue, children, setSelected, setActive}) => {

  const addClassOnElem = () => {
    let change = 'true';
    setSelected(true)
    changePresentsValue(change)
    setActive(false)
  }

  return (
    <div className={active ? `${classes.boxModal} ${classes.active}` : `${classes.boxModal}`} onClick={() => setActive(false)} >
      <div className={classes.boxModalContent} onClick={event => event.stopPropagation()} >
        {children}
        <button className={classes.buttonDefault} onClick={addClassOnElem} >OK</button>
        <button className={classes.buttonSecondary} onClick={() => setActive(false)}  >Отмена</button>
        <span className={classes.boxModalClose} onClick={() => setActive(false)} >&#10006;</span>
      </div>

    </div>
  )
}

export default Modal;