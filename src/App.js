import React, { Component } from 'react';
import AdminPanel from './AdminPanel.js';
import AlphaView from './AlphaView.js';


class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    items: this.createItems(),
    view: 'Main',
    showModal: false,
    userName: 'JavaDD',
    password: 'withMilk',
    webTitle: 'York University Campus Store',
    showAdmin: false,
    companyLogo: 'https://images.ecosia.org/fvnMKNHdkdTvHOB4DOU5zy-4S1c=/0x390/smart/http%3A%2F%2Fjeffwarren.org%2Fwp-content%2Fuploads%2Fyork_logo.png',
    time: 1,
    selectedItem: {
      name: 'Mom Crew Neck',
      price: 34.95,
      src: 'https://www.bookstore.yorku.ca/outerweb/product_images/CREW_NECK_MOM_L.jpg',
      description: 'Comfy crew neck style sweatshirt, the perfect gift for Mom; 80% Cotton, 20% Polyester; Machine wash; Size and fit: Model is 5’4” wearing a Small',
      id: '#SWW3467',
      category: 'Womens'
  },
    addedItems: [],
    secondaryColor: '#f2d7d7',
    primaryColor: '#bf3131',
    accentColor: 'rgba(244, 246, 247, 0.93)',
    paymentMethods: ['PayPal', 'Gift Card', 'YU Card'],
    paymentInfo: ['First Name,Last Name,Account Id,PayPal Password',
                  'Card Number,Varification Password',
                  'Student Name,Student Number,Passport York Password'],
    sortMethods: [ 'Alphabetical', 'Price - Low to High', 'Price - High to Low'],
    sortMethodSelected: 'Alphabetical',
    categories: ['Womens'],
    category: 'Womens'
  }
}


createItems() {
  let x = 0;
  const items = [];
  let  item0 = {
        name: 'Mom Crew Neck',
        price: 34.95,
        src: 'https://www.bookstore.yorku.ca/outerweb/product_images/CREW_NECK_MOM_L.jpg',
        description: 'Comfy crew neck style sweatshirt, the perfect gift for Mom; 80% Cotton, 20% Polyester; Machine wash; Size and fit: Model is 5’4” wearing a Small',
        id: '#SWW3467',
        category: 'Womens'
    };
let  item1 = {
        name: 'Unisex Deluxe Hood',
        price: 59.95,
        src: 'https://www.bookstore.yorku.ca/outerweb/product_images/UNISEX_DELUXE_HOOD_L.jpg',
        description: 'Hooded unisex sweatshirt, perfect for a cozy fall day; 90% Cotton, 10% Polyester; Machine wash; Size and fit: Model is 6’0” and male, wearing a Large',
        id: '#SWU2637',
        category: 'Womens'
    };
let  item2 = {
        name: 'Unisex French Terry Hood',
        price: 62.95,
        src: 'https://www.bookstore.yorku.ca/outerweb/product_images/WOMENS_TWILL_HOODIE_L.jpg',
        description: 'Thin, hooded unisex sweatshirt, perfect for warmer fall days; 70% Cotton, 30% Polyester; Machine wash cold; Size and fit: Model is 5’8” and male, wearing a Medium',
        id: '#SWU9940',
        category: 'Womens'
    };
let  item3 = {
        name: 'Renu Her Work Sock Crew',
        price: 70.00,
        src: 'https://www.bookstore.yorku.ca/outerweb/product_images/RENU_HER_WORK_SOCK_CREW_L.jpg',
        description: 'Knit crew neck style sweatshirt; 55% Cotton, 25% Acrylic, 15% Nylon, 5% Wool; Machine wash; Size and Fit: Model is 5’5” wearing a Small',
        id: '#SWW7734',
        category: 'Womens'
    };
let  item4 = {
        name: 'Womens ¼ Zip Fleece',
        price: 69.95,
        src: 'https://www.bookstore.yorku.ca/outerweb/product_images/WOMENS_QUARTER_ZIP_FLEECE_SWEATER_L.jpg',
        description: 'Fleece knit zip-up sweater for cold winter nights; 60% Fleece, 40% Cotton; Machine wash cold; Size and fit: Model is 5’6”, wearing a Medium',
        id: '#SWW9463',
        category: 'Womens'
    };
items.push(item0);
items.push(item1);
items.push(item2);
items.push(item3);
items.push(item4);


  return items;
}

  onChange(newState) {
    this.setState({ view: newState });
  }

  clone(src) {
  return JSON.parse(JSON.stringify(src));
}


  toggleAdmin() {
    this.setState({ showModal: !this.state.showModal });
  }

  closeModal() {
      this.setState({ showModal: false });
  }

  showModal() {
    return (
      <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onClick={this.closeModal.bind(this)}>&times;</span>
        <div class="container2">
        <label for="uname"><b>Username</b></label>
        <input id="UserName" type="text" placeholder="Enter Username" name="uname" required/>

        <label for="psw"><b>Password</b></label>
        <input  id="Password" type="password" placeholder="Enter Password" name="psw" required/>

        <button class="button" type="submit" onClick={this.shouldContinue.bind(this)}>Login</button>
   </div>
      </div>

    </div>
    );
  }

  shouldContinue() {
    const userName = document.getElementById('UserName').value;
    const password = document.getElementById('Password').value;
    if (userName === this.state.userName && password === this.state.password) {
      this.setState({ showAdmin: true, showModal: false});
     }
  }

  sleep(delay, increment) {
    let start = new Date().getTime();
    let addTo = increment;
    while (new Date().getTime() < start + delay) {
      addTo += Math.random();
    }
    return addTo;
  }

  hideAdmin() {
    this.setState({ showAdmin: false });
  }

  showAdminPanel() {
    return (
      <AdminPanel
          state={this.state}
          setLogo={this.setLogo.bind(this)}
          setTitle={this.setTitle.bind(this)}
          setColors={this.setColors.bind(this)}
          addPayOption={this.addPayOption.bind(this)}
          removePayOption={this.removePayOption.bind(this)}
          addNewItem={this.addNewItem.bind(this)}
          removeItem={this.removeItem.bind(this)}
          hideAdmin={this.hideAdmin.bind(this)}
          addCategory={this.addCategory.bind(this)}
      />
    )
  }


  // Global Admin Functions
  addNewItem() {
    const itemName = document.getElementById('myText').value;
    const price = document.getElementById('price').value;
    const src = document.getElementById('myImageUrl').value;
    const description = document.getElementById('description').value;
    const id = document.getElementById('id').value;
    const category = document.getElementById('category').value;

    const newItem = {
      name: itemName,
      price: price,
      src: src,
      description: description,
      id: id,
      category: category
    }
    const items = this.state.items;
    items.push(newItem);
    this.setState({ items: items });
  }

  removeItem() {
    const items = this.state.items;
    const id = document.getElementById('idRemove').value;
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id === id) {
        items.splice(i, 1);
      }
    }

    this.setState({ items: items });
  }

  setColors() {
      const primary = document.getElementById('color1').value;
      const secondary = document.getElementById('color2').value;
      const accent = document.getElementById('color3').value;
      this.setState({ primaryColor: primary, secondaryColor: secondary, accentColor: accent });
  }
  setLogo() {
      const logo = document.getElementById('logoURL').value;
      this.setState({ companyLogo: logo });
  }

  setTitle() {
    const title = document.getElementById('titleText').value;
    this.setState({ webTitle: title });
  }

  showMe() {
    document.getElementById('div1').style.display = 'block';
  }

  hideMe() {
    document.getElementById('div1').style.display = 'none';
  }

  addPayOption() {
    const type = document.getElementById('Payment Type').value;
    const info = document.getElementById('Payment Info').value;
    this.state.paymentMethods.push(type);
    this.state.paymentInfo.push(info);
  }

  removePayOption() {
    const type = document.getElementById('Payment Type Removed').value;
    for (let i = 0; i < this.state.paymentMethods.length; i++) {
      if (type === this.state.paymentMethods[i]) {
        this.state.paymentMethods.splice(i, 1);
        this.state.paymentInfo.splice(i, 1);
      }
    }
  }

  addCategory() {
      const type = document.getElementById('CategoryAdd').value;
      const newCategories = this.clone(this.state.categories);
      newCategories.push(type);
      this.setState({ categories: newCategories });
  }

  createSortMethods (type) {
    return (
      <option id={type} value={type}>{type}</option>
    );
  }

  changeSortSelection() {
    const type = document.getElementById('sortSelection').value;
    this.setState({ sortMethodSelected: type });
  }

  setCurrentCategory(newCategory) {
    this.setState({ category: newCategory });
  }


  sortItems(type) {
    let baseItems = [];
    let items = [];
    let result = [];
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].category === this.state.category) {
        baseItems.push(this.state.items[i]);
      }
    }
    if (type === 'Alphabetical') {
        result = baseItems.map(a => a.name);
        result = result.sort();
        for (let x = 0; x < result.length; x++) {
          for (let i = 0; i < baseItems.length; i++) {
            if (baseItems[i].name === result[x]) {
              items.push(baseItems[i]);
              break;
            }
          }
        }
    } else {
      result = baseItems.map(a => a.price);
      result = result.sort();
      if (type === 'Price - Low to High') {
        for (let x = 0; x < result.length; x++) {
          for (let i = 0; i < baseItems.length; i++) {
            if (baseItems[i].price === result[x]) {
              items.push(baseItems[i]);
              break;
            }
          }
        }
      } else {
        for (let x = result.length; x > -1; x--) {
          for (let i = 0; i < baseItems.length; i++) {
            if (baseItems[i].price === result[x]) {
              items.push(baseItems[i]);
              break;
            }
          }
        }
      }
    }

    return items;
  }


  render() {
    let index = -1;
    let listItems = this.sortItems(this.state.sortMethodSelected);
    const sortMethods = this.state.sortMethods.map((type) => this.createSortMethods(type));
    const modal = this.state.showModal ? this.showModal() : null;
    const adminPanel = this.state.showAdmin ? this.showAdminPanel() : null;

      if (this.state.view === 'Main' ) {
        return (
          <AlphaView
            state={this.state}
            createItems={this.createItems.bind(this)}
            listItems={listItems}
            sleep={this.sleep.bind(this)}
            changeSortSelection={this.changeSortSelection.bind(this)}
            sortMethods={sortMethods}
            setCurrentCategory={this.setCurrentCategory.bind(this)}
            modal={modal}
            adminPanel={adminPanel}
            toggleAdmin={this.toggleAdmin.bind(this)}
            onChange = {this.onChange.bind(this)}
          />
      )
      } else {
        return (
        null
        );
      }
  }
}

export default App;
