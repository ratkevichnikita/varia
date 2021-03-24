import classes from './Ideas.module.css';
import Sprite from "../images/sprite.svg";

let Ideas = () => {
  return (
    <section className={classes.Ideas}>
      <div className="wrapper">
        <div className="icons">
          <svg width="72" height="46" className="cloud">
            <use href={Sprite + '#cloud'} />
          </svg>
          <svg width="21" height="21" className="blue-start start-small star12 ">
            <use href={Sprite + '#star'} />
          </svg>
          <svg width="21" height="21" className="blue-start star13">
            <use href={Sprite + '#star'} />
          </svg>
          <svg width="21" height="21" className="blue-start star14 start-small">
            <use href={Sprite + '#star'} />
          </svg>
          <svg width="21" height="21" className="blue-start star15 start-small">
            <use href={Sprite + '#star'} />
          </svg>
        </div>

          <h2>
            Идеи подарков
          </h2>
          <p>
            Огромная просьба, если вы выбрали подарок из списка и хотите его подарить, нажмите специальную кнопку под описанием, чтобы скрыть его из списка, чтобы Варюша не получила два одинаковых подарочка:)
          </p>
      </div>
    </section>
  )
}

export default Ideas;