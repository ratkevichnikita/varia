let store = {
  _state: {
    presents: [
      { title:'Игрушка мягкая котик ',
        price:'2 199',
        id: 1,
        link: 'https://www.detmir.ru/product/index/id/3227061/',
        image: 'Картинка'
      },
      { title:'Игрушка мягкая Pomsies Кали',
        price:'999',
        id:2,
        link: 'https://www.detmir.ru/product/index/id/3263191/',
        image: 'Картинка'
      },
    ]
  },
  getState() {
    return this._state;
  }
}


export default store;