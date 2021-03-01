
import './App.css';
import Header from "./Header/Header";
import Greeting from "./Greeting/Greeting";
import Present from "./Present/Present";
import Ideas from "./Ideas/Ideas";
import PresentsList from "./PresentsList/PresentsList";

import firebase from 'firebase';

let componentDidMount = () => {
  const db = firebase.database();
  const title = db.ref('title');
  const title1 = title.on('value', elem => elem.val() )
  console.log(title1)
}

function App(props) {
  componentDidMount()

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
