import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './App.css';
import CartView from './CartView.js';

class AlphaView extends Component {
  constructor(props) {
  super(props);
  this.state = {
    items: this.props.createItems(),
    view: 'Main',
    addedItems: [],
    selectedItem: {
      name: 'Mom Crew Neck',
      price: 34.95,
      src: 'https://www.bookstore.yorku.ca/outerweb/product_images/CREW_NECK_MOM_L.jpg',
      description: 'Comfy crew neck style sweatshirt, the perfect gift for Mom; 80% Cotton, 20% Polyester; Machine wash; Size and fit: Model is 5’4” wearing a Small',
      id: '#SWW3467',
      category: 'Womens'
    },
    }
  }

  //HELPER FUNCTIONS

  createMiddle(item) {
    this.setState({ selectedItem:  item });
  }

  addToCart() {
    const addTo = this.state.selectedItem;
    const cart = this.state.addedItems;
    cart.push(addTo);
    this.setState({ addedItems: cart });
  }

  removeFromCart(item, index) {
    this.state.addedItems.splice(index, 1);
    this.forceUpdate();
  }

  resetCart() {
      this.setState({ view: 'Checkout' });
  }

  priceCalculation() {
    let price = 0;
    for (let x = 0; x < this.state.addedItems.length; x++) {
      price += this.state.addedItems[x].price;
    }
    return price;
  }

  createMiddle(item) {
    this.setState({ selectedItem:  item });
  }

  createItemObject(item) {
    return (
      <div class="outerContainer" onClick={this.createMiddle.bind(this, item)}>
        <img src={item.src} class={"leftImage"}/>
        <div class="internal">
          <div>
            {item.name}
          </div>
          <div>
            {`$${item.price}`}
          </div>
        </div>
      </div>
    );
  }

  createCart(item, index) {
    index += 1;
    return (
      <div class="outerContainer2">
        <div class="internal2">
          <div class="spacer">
            {item.name}
          </div>
          <div class="spacer2">
            {`$${item.price}`}
          </div>
          <span class="close" onClick={this.removeFromCart.bind(this, item, index)}>&times;</span>
        </div>
      </div>
    );
  }

  onChange(newState) {
    this.setState({ view: newState });
  }

  rightPane(price, cartItems) {
    return (
      <div class="rightpane" style={{ backgroundColor: this.props.state.secondaryColor }}>
      <h1>
        Cart
      </h1>
      <img class="cart" src="https://images.ecosia.org/UJ5r4gW663JODjpyJFdbtGRaPJ0=/0x390/smart/http%3A%2F%2Fwww.free-icons-download.net%2Fimages%2Fshopping-cart-logo-icon-70706.png"/>
      <button class="button2"  type="button" class="styleRight" onClick={this.resetCart.bind(this)}> Check Out </button>
      {cartItems}
      <div class="line"/>
      <div class="topOuter">
      <div> Total Price:  </div>
      <div class="styleRight2"> {`$ ${(Math.floor(price * 100) / 100 )}`} </div>
      </div>
      </div> );
  }

  topPane() {
    const time = this.props.sleep(50, 1);

    return (
      <div class="toppane">
        <li>
          <p align="right" class="bitcoin">
            {time/10000000000}
              <img src="https://cdn4.iconfinder.com/data/icons/proglyphs-shopping-and-finance/512/Coin_-_Bitcoin-512.png"
          width="30"
          height="30"
          class="bitcoin"/></p>
        </li>
      </div>
    );
  }

  leftPane(listItems) {
    return(
      <div class="outer">
        <div id="mySelect" style={{ backgroundColor: this.props.state.accentColor }} class="topnav">
          <button class="unStyle" id="Womens" value="Womens" onClick={this.props.setCurrentCategory.bind(this, "Womens")}>Womens</button>
          <button class="unStyle" id="Mens" value="Mens" onClick={this.props.setCurrentCategory.bind(this, "Mens")}>Mens</button>
        </div>
        <div class="leftpane">
          <div class="leftItems">
              <select id="sortSelection" class="sortOptions" style={{ backgroundColor: this.props.state.accentColor }}
              onClick={this.props.changeSortSelection.bind(this)}>
                {this.props.sortMethods}
              </select>
            {listItems}
          </div>
          {this.props.adminButton}
        </div>
      </div>
    );
  }

  middlePane() {
    return (
      <div class="middlepane" style={{ backgroundColor: this.props.state.primaryColor }}>
          <h><center style={{ backgroundColor: this.props.state.accentColor }}>
            {this.state.selectedItem.name}
          </center></h>
          <div class="imageOverlay">
            <img src={this.state.selectedItem.src}
              class="center"/>
            <div id="div1" class="showMe" style={{ backgroundColor: this.props.state.accentColor }}>
              <p>  <center>
                {`$${this.state.selectedItem.price}`}
              </center></p>
              <p>  <center>
              {this.state.selectedItem.description}
              </center></p>
            </div>
          </div>
          <center><button class="button2" style={{marginTop: '10px'}} type="button" onClick={this.addToCart.bind(this)}> Add to Cart </button></center>
      </div>
    )
  }



  render() {
    let index = -1;
    const listItems = this.props.listItems.map((objects) => this.createItemObject(objects));
    const cartItems =  this.state.addedItems.map((objects) => this.createCart(objects, index));
    const price = this.priceCalculation();
    const topPane = this.topPane();
    const rightPane = this.rightPane(price, cartItems);
    const leftPane = this.leftPane(listItems)
    const middlePane = this.middlePane();
    const  button = (<button class="button3" onClick={this.props.toggleAdmin.bind(this)}> Login </button>);

    if (this.state.view === 'Main') {
      return (
        <div class="container">
          <div class="topOuter">
            <img class="logo" src={this.props.state.companyLogo}/>
            <h1 class="extraPadding">{this.props.state.webTitle}</h1>
          </div>
          {topPane}
          {leftPane}
          {middlePane}
          {rightPane}
          {button}
          {this.props.modal}
          {this.props.adminPanel}
        </div>
      )
    } else {
      return (
        <CartView
        state={this.props.state}
        addedItems={this.state.addedItems}
        time = {this.props.sleep(50, 1.01)}
        onChange = {this.onChange.bind(this)}
        />
      )
    }
  }

}
export default AlphaView;
