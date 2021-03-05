import React from "react";
import './App.css';
import Header from "./Header/Header";
import Greeting from "./Greeting/Greeting";
import Present from "./Present/Present";
import Ideas from "./Ideas/Ideas";
import PresentsList from "./PresentsList/PresentsList";

import firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presents: [],
    }
    this.showBd = this.showBd.bind(this)
    this.handleSelected = this.handleSelected.bind(this)
  }

  showBd = () => {
    const db = firebase.database();
    const name = db.ref('dataBase');
    name.on('value', (elem) => {
      let list = [];
      elem.forEach((el) => {
        list.push(el.val());
      });
      this.setState({
        presents: list
      })

    })
  }

  handleSelected = (id) => {
    let selectedItem = this.state.presents[id - 1];
    selectedItem.selected = true;

    const db = firebase.database();
    const name = db.ref('dataBase/prod' + id).set(selectedItem);
  }

  componentDidMount() {
    this.showBd()
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Greeting/>
        <Present/>
        <Ideas/>
        <PresentsList presents={this.state.presents} selected={this.handleSelected}
                      changePresentsValue={this.props.changePresentsValue}/>
      </div>
    )
  }
}


