
import './App.css';
import Header from "./Header/Header";
import Greeting from "./Greeting/Greeting";
import Present from "./Present/Present";
import Ideas from "./Ideas/Ideas";
import PresentsList from "./PresentsList/PresentsList";

import firebase from 'firebase';

let componentDidMount = () => {
  const db = firebase.database();
  console.log(db)
}

function App(props) {
  componentDidMount()
  return (
    <div className="app">
      <Header />
      <Greeting />
      <Present />
      <Ideas />
      <PresentsList presents={props.state.presents} />

    </div>
  );
}

export default App;
