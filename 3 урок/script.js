const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

function send(onError, onSuccess, url, method = 'GET', data = null, headers = [], timeout = 60000) {
  let xhr;

  if (window.XMLHttpRequest) {
    // Chrome, Mozilla, Opera, Safari
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // Internet Explorer
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open(method, url, true);


  headers.forEach((header) => {
    xhr.setRequestHeader(header.key, header.value);
  })


  xhr.timeout = timeout;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 400) {
        onError(xhr.statusText)
      } else {
        onSuccess(xhr.responseText)
      }
    }
  }

  xhr.send(data);
}

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
    fetch(`${API_URL}catalogData.json`)
      .then((response) => {
        return response.json();
      })
      .then((request) => {
        this.goods = request.map(good => ({ title: good.product_name, price: good.price }))
        this.render();
      })
      .catch((err) => {
        console.log(err.text)
      })

    // new Promise((resolve, reject) => {
    //   send(
    //     reject,
    //     resolve,
    //     `${API_URL}catalogData.json`
    //   )
    // })
    // .then((request) => {
    //   this.goods = JSON.parse(request).map(good => ({title: good.product_name, price: good.price}))
    //   this.render();
    // })
    // .catch((err) => { 
    //   console.log(err.text)
    // })

    // send(
    //   (err) => { 
    //     console.log(err.text)
    //   },
    //   (request) => {
    //     this.goods = JSON.parse(request).map(good => ({title: good.product_name, price: good.price}))
    //     this.render();
    //   },
    //   `${API_URL}catalogData.json`
    // )

    // this.goods = [
    //   { title: 'Shirt', price: 150 },
    //   { title: 'Socks', price: 50 },
    //   { title: 'Jacket', price: 350 },
    //   { title: 'Shoes', price: 250 },
    // ];
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

}

const list = new GoodsList();
list.fetchGoods();


//makeGETRequest с Promise

function makeGETRequest(url, callback) {


  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

makeGETRequest.then(() => {
  xhr.open('GET', url, true);
})
then(() => {
  xhr.send();
})
  .catch((err) => {
    console.log(err.text)
  })

//корзина


let cartArr = [];
class Cart {
  add() {
    cartArr.push()
  }

  remove(index) {
    cardArr.splice(index, 1);
  }

  getGoods() {
    console.log(cartArr);
  }
}

