
import './App.css';
import Header from "./Header/Header";
import Greeting from "./Greeting/Greeting";
import Present from "./Present/Present";
import Ideas from "./Ideas/Ideas";
import PresentsList from "./PresentsList/PresentsList";

import firebase from 'firebase';


const showBd = () => {
  const db = firebase.database();
  const name = db.ref('dataBase');
  name.on('value', (elem) => {
    let list = [];
    elem.forEach((el) => {
      list.push(el.val());
    });
    console.log(list)
  })
}


function App(props) {
  showBd()
  return (
    <div className="app">
      <Header />
      <Greeting />
      <Present />
      <Ideas />
      <PresentsList presents={props.state.presents} changePresentsValue={props.changePresentsValue} />

    </div>
  );
}

export default App;
