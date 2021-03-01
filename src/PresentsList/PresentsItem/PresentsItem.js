import React, {useState} from 'react';
import classes from './PresentsItem.module.css';
import Prod1 from '../../images/prod1.webp';
import Modal from "../Modal/Modal";

const PresentsItem = (props) => {

  const [modalActive, setModalActive] = useState(false);



    return (
      <li  className={props.selected ? `${classes.item} ${classes.selected}` : `${classes.item} `}>
        <h3>{props.title}</h3>
        <p className={classes.price}>{props.price}₽</p>
        <img src={Prod1} alt="photo" />
        <a className={classes.link} target="_blank" href={props.link}>Где купить</a>
        <button onClick={() => setModalActive(true)} className={classes.btn}>Оставить за нами</button>
        <Modal
          active={modalActive}
          id={props.id}

          setActive={setModalActive}
          changePresentsValue={props.changePresentsValue}
        >
          <h3>
            Вы подтверждаете свой выбор?
          </h3>
          <p>
            После того, как вы нажмете OK, игрушка станет недоступна для других.
          </p>
        </Modal>
      </li>
    )

}


export default PresentsItem;