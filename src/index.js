import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';

import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBCHeqgj4C6UIp3lFLf4xC65xDi3a3OMGw",
  authDomain: "varia-e0a0d.firebaseapp.com",
  databaseURL: "https://varia-e0a0d-default-rtdb.firebaseio.com",
  projectId: "varia-e0a0d",
  storageBucket: "varia-e0a0d.appspot.com",
  messagingSenderId: "508121360188",
  appId: "1:508121360188:web:9c1b54b0016f5ec5e92039"
}

firebase.initializeApp(firebaseConfig);

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} changePresentsValue={store.changePresentsValue.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireTree(store.getState())

store.subscribe(renderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
