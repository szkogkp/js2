class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  getTotalCost() {
    let totalCost = 0;
    for (let i = 0; i < this.goods.length; i++) {
      totalCost += this.goods[i].price;
    }
    return totalCost;
  }

}

class Cart {
  constructor() {

  }
  clear() { }
}

class CartEl {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  remove() { }
  add() { }
}


const list = new GoodsList();
list.fetchGoods();
list.render();

// 3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.

class Hamburger {
  constructor(base, filling) {
    this.base = base;
    this.filling = filling;
  }

  addSeasoning() {
    this.seasoning = true;
  }

  addMayonnaise() {
    this.mayonnaise = true;
  }

  getQuantity() {
    let calories = 0;
    let price = 0;

    switch (this.base) {
      case 'Little':
        price += 50;
        calories += 20;
        break;
      case 'Big':
        price += 100;
        calories += 40;
        break;
      default:
        console.log('Неверная база');
        return;
    }

    switch (this.filling) {
      case 'Cheese':
        price += 10;
        calories += 20;
        break;
      case 'Salad':
        price += 20;
        calories += 5;
        break;
      case 'Potato':
        price += 15;
        calories += 10;
        break;
      default:
        console.log('Неверная начинка');
        return;
    }

    if (this.seasoning) {
      price += 15;
      calories += 0;
    }

    if (this.mayonnaise) {
      price += 20;
      calories += 5;
    }

    console.log(`Цена: ${price}\nКалорий: ${calories}`);
  }
}

let cheezburger = new Hamburger('Big', 'Salad');