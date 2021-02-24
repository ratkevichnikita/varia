import classes from './PresentsItem.module.css';
import Prod1 from '../../images/prod1.webp';


let PresentsItem = (props) => {
  return (
    <li className={classes.item}>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.price}>{props.price}₽</p>
      <img src={Prod1} alt="photo"/>
      <a className={classes.link} target="_blank" href={props.link}>Где купить</a>
      <button className={classes.btn}>Оставить за нами</button>
    </li>
  )
}

export default PresentsItem;