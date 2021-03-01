let store = {
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
    ]
  },
  getState() {
    return this._state;
  },
  changePresentsValue(id) {
    this._state.presents = this._state.presents.map(item => {
      if (item.id === id) {
        return {
          ...item,
          selected: true
        }
      }
      return {
        ...item,
        selected: false
      }
    });
    console.log(this._state.presents)
    // this._state.presents.selected = selectProduct;
  }
}

window.store = store;

export default store;