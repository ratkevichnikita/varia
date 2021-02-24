import classes from './Greeting.module.css';

import '../stylesForIcons.css';

import Heart from '../images/heart.svg';

import Sprite from '../images/sprite.svg';

let Greeting = () => {
  return (
    <section className={classes.greeting}>
      <div className="icons">
        <svg width="21" height="21" className="blue-start star1">
          <use href={Sprite + '#star'} />
        </svg>
        <svg width="21" height="21" className="blue-start star2 start-small">
          <use href={Sprite + '#star'} />
        </svg>
        <svg width="21" height="21" className="blue-start star3 start-small">
          <use href={Sprite + '#star'} />
        </svg>
        <svg width="21" height="21" className="blue-start star4 start-small">
          <use href={Sprite + '#star'} />
        </svg>
        <svg width="21" height="21" className="blue-start star5 start-medium">
          <use href={Sprite + '#star'} />
        </svg>
        <svg width="57" height="73" className="icecream">
          <use href={Sprite + '#icecream'} />
        </svg>
        <svg width="46" height="45" className="cake">
          <use href={Sprite + '#cake'} />
        </svg>
      </div>
      <div className="wrapper">
        <div className={classes.info}>
            <h2>
              Всем привет!
            </h2>
            <p className={classes.text}>
              Дорогие, спасибо Вам, что смогли разделить с нами наш маленький, но уже такой большой праздник!
            </p>
          <div className={classes.adress}>
            <p>
              Мы будем ждать вас по адресу:
            </p>
            <p>
              ул. Интернациональная, 30, <br/> ТЦ Южный “Индиго”
            </p>
            <p>
              05 Апреля, 12:00
            </p>
          </div>
          <p className={classes.end}>
            Не забудьте взять сменку или теплые носочки для себя и наших маленьких гостей!
            <img src={Heart} alt="heart"/>
          </p>
        </div>
        </div>
    </section>
  )
}

export default Greeting;