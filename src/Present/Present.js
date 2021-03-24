import classes from './Present.module.css';

import '../stylesForIcons.css';

import Sprite from '../images/sprite.svg';

let Present = () => {
  return (
    <section className={classes.present}>
      <div className="wrapper">
        <div className="icons">
          <svg width="21" height="21" className="pink-start star6 start-small">
            <use href={Sprite + '#star'} />
          </svg>
          <svg width="21" height="21" className="pink-start star7 ">
            <use href={Sprite + '#star'} />
          </svg>
          <svg width="21" height="21" className="pink-start star8 start-small">
            <use href={Sprite + '#star'} />
          </svg>
          <svg width="21" height="21" className="pink-start star9 start-small">
            <use href={Sprite + '#star'} />
          </svg>
          <svg width="21" height="21" className="pink-start star10 start-medium">
            <use href={Sprite + '#star'} />
          </svg>
          <svg width="21" height="21" className="pink-start star11 start-small">
            <use href={Sprite + '#star'} />
          </svg>
          <svg width="78" height="64" className="gift">
            <use href={Sprite + '#gift'} />
          </svg>
          <svg width="109" height="81" className="garland">
            <use href={Sprite + '#garland'} />
          </svg>
        </div>
        <div className={classes.container}>
          <h2>
            Что подарить?
          </h2>
          <p>
            Мы не по наслышке знаем, как тяжело подобрать подарок малышу, чтобы искренне его обрадывать. И кто как не родители лучше всего знают, что вызовит бурю позитивных эмоций у их малыша!
          </p>
          <p>
            Чтобы избавить вас от головной боли, а нашей малышке доставить больше радости, мы сделали подборку того, что нам действительно нужно.
          </p>
          <p className={classes.end}>
            Но если у вас нет времени ходить по магазинам,
            мы с радостью примим «конвертик» на нашу большую цель —  кроватку для Варюши:)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Present;