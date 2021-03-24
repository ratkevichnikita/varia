
let store = {

  _subscriber() {
    console.log('no subscribes')
  },
  _state: {
    presents: [
      { title:'Игрушка мягкая котик ',
        price:'2 199',
        id: 1,
        link: 'https://www.detmir.ru/product/index/id/3227061/',
        image: 'Картинка',
        selected: false,
      },
      { title:'Игрушка мягкая Pomsies Кали',
        price:'999',
        id:2,
        link: 'https://www.detmir.ru/product/index/id/3263191/',
        image: 'Картинка',
        selected: false,
      },
    ],
    list:[],
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer
  },
  changePresentsValue(id) {
    this._state.presents = this._state.presents.map(item => {
      if (item.id === id) {
        return {
          ...item,
          selected: true,
        }
      }
      return {
        ...item,
      }
    });
    console.log(this._state.presents)
    this._subscriber(this._state)
  }
}

window.store = store;

export default store;