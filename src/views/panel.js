import React from 'react'
import api from '../api'

export default class Panel extends React.Component {
    send() {
        let title = document.getElementById("title").value;
        let desc = document.getElementById("desc").value;
        let price = document.getElementById("price").value;
        let img = document.getElementById("img").value;

        let payload = {title, desc, price, img};
        api.insertProduct(payload).then(res => {
            window.alert(`Product inserted successfully`)
        });
    }

    delete() {
        let id = document.getElementById("idDelete").value;
        api.deleteProductById(id).then(res => {
            window.alert(`Product deleted successfully`)
        });
    }

    list() {
        let prod;
        api.getAllProducts().then(product => {
            prod = product.data.data;
            console.log(prod)
        })     
    }

  render() {
    return (
      <div>
          {this.list()}
        <a>DODAJ PRODUKT</a><br/>
        <div>
            <label for="title">title:</label><br/>
            <input id="title" type="text" name="title"/><br/>
            <label for="desc">desc:</label><br/>
            <input id="desc" type="text" name="desc"/><br/>
            <label for="price">price:</label><br/>
            <input id="price" type="number" name="price"/><br/>
            <label for="img">image:</label><br/>
            <input type="file" id="img" name="img" accept="image/*"/><br/><br/>
            <input type="submit" value="Submit"onClick={() => this.send()}/>
        </div><br/><br/><br/>
        <a>USUŃ PRODUKT</a><br/>
        <div>
            <label for="title">id:</label><br/>
            <input id="idDelete" type="text" name="idDelete"/><br/>
            <button onClick={() => this.delete()}>Usuń</button>
        </div>
      </div>
    );
  }
}