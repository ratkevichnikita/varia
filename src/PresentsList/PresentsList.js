import classes from './PresentsList.module.css';
import PresentsItem from "./PresentsItem/PresentsItem";


let PresentsList = (props) => {
  let ProductElem = props.presents.map(item => <PresentsItem title={item.title} id={item.id} price={item.price} link={item.link}
                                                             image={item.image}/>)

  return (
    <div className="wrapper-long">
      <ul className={classes.list}>
        {ProductElem}
      </ul>

    </div>
  )
}

export default PresentsList;