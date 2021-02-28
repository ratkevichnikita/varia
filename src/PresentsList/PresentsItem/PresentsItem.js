import React, {useState} from 'react';
import classes from './PresentsItem.module.css';
import Prod1 from '../../images/prod1.webp';
import Modal from "../Modal/Modal";

let PresentsItem = (props) => {

  const [modalActive, setModalActive] = useState(false);

  const [selected] = useState(false);

    return (
      <li  className={selected ? `${classes.item} ${classes.selected}` : `${classes.item} `}>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.price}>{props.price}₽</p>
        <img src={Prod1} alt="photo" />
        <a className={classes.link} target="_blank" href={props.link}>Где купить</a>
        <button onClick={() => setModalActive(true)} className={classes.btn}>Оставить за нами</button>
        <Modal active={modalActive} id={props.id} selected={selected} setActive={setModalActive} />
      </li>
    )

}


export default PresentsItem;