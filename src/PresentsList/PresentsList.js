import classes from './PresentsList.module.css';
import PresentsItem from "./PresentsItem/PresentsItem";


export default function PresentsList (props)  {
  return (
    <div className="wrapper-long">
      <ul className={classes.list}>
          {
              props.presents.map((item, k) => (
                  <PresentsItem
                      changePresentsValue={props.changePresentsValue}
                      selected={item.selected}
                      title={item.title}
                      id={item.id}
                      price={item.price}
                      link={item.link}
                      image={item.image}
                      key={k}
                      handleSelected={props.selected}
                  />)
              )
          }
      </ul>

    </div>
  )
}
