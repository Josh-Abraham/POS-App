import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './App.css';

class AdminPanel extends Component {
  render() {
    return (
      <div class="modalAdmin">
      <div class="modalAdminContent">
        <h1>  Admin Panel  </h1>
        <button  onClick={this.props.hideAdmin}> Hide Admin </button>
        <form>
        <fieldset>
          <legend>Web Style</legend>
          <p>
            <label>Set New Website Logo</label>
            <input type = "text"
                id = "logoURL"
                placeholder = "Logo URL" />
          </p>
              <button class="button2"  type="button" onClick={this.props.setLogo}> Set Logo </button>
          <p>
            <label>Set New Website Title</label>
            <input type = "text"
                id = "titleText"
                placeholder = "Website Title" />
          </p>
              <button class="button2"  type="button" onClick={this.props.setTitle}> Set Title </button>
        </fieldset>
        </form>
        <form>
        <fieldset>
          <legend>Colour Palette </legend>
          <p  class="column">
            <label>Set Primary Color</label>
            <input type = "text"
                id = "color1"
                placeholder = "Primary Color (#ffffff)" />
          </p>
          <p  class="column">
            <label>Set Secondary Color</label>
            <input type = "text"
                id = "color2"
                placeholder = "Secondary Color (#ffffff)" />
          </p>
          <p class="column">
            <label>Set Accent Color </label>
            <input type = "text"
                id = "color3"
                placeholder = "Accent Color (#ffffff)" />
          </p>
              <button class="button2"  type="button" onClick={this.props.setColors}> Set Palette </button>
        </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>Add Payment Option</legend>
            <p>
              <label>Set Payment Type </label>
              <input type = "text"
                id = "Payment Type"
                placeholder = "Payment Type"
                />
              </p>
              <p>
              <label>Set Payment Information </label>
                <div   class="tooltip">
                <input type = "text"
                  id = "Payment Info"
                  placeholder = "Seperate fields by commas"
                  style={{ width: '300px'}}
                  />
                    <span class="tooltiptext">All Password Fields must contain the word Password</span>
                  </div>
            </p>
              <button  class="button2" type="button" onClick={this.props.addPayOption}> Add Option </button>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>Remove Payment Option</legend>
            <p>
              <input type = "text"
                id = "Payment Type Removed"
                placeholder = "Payment Type"
                />
              </p>
              <button  class="button2" type="button" onClick={this.props.removePayOption}> Remove Option </button>
          </fieldset>
        </form>
        <form>
        <fieldset>
          <legend>Add item</legend>
          <p>
            <input type = "text"
                id = "myText"
                placeholder = "Item name" />
          </p>
          <p>
            <input type = "text"
                id = "price"
                placeholder = "Price"
            />
          </p>
          <p>
            <input type = "myTextArea"
              id = "myImageUrl"
              placeholder = "URL"/>
          </p>
          <p>
            <input type = "myTextArea"
              id = "description"
              placeholder = "Description"/>
          </p>
          <p>
            <input type = "myTextArea"
              id = "id"
              placeholder = "Item ID"/>
          </p>
          <p>
            <input type = "myTextArea"
              id = "category"
              placeholder = "Item Category"/>
          </p>
            <button class="button2"  type="button" onClick={this.props.addNewItem}> Add Item </button>
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend>Remove item</legend>
          <p>
            <input type = "text"
              id = "idRemove"
              placeholder = "ID" />
          </p>
            <button  class="button2" type="button" onClick={this.props.removeItem}> Remove Item </button>
        </fieldset>
      </form>
      </div>
      </div>
    );
  }
}

AdminPanel.proptypes = {
  state: Proptypes.object.isRequired,
  setLogo: Proptypes.func.isRequired,
  setTitle: Proptypes.func.isRequired,
  setColors: Proptypes.func.isRequired,
  addPayOption: Proptypes.func.isRequired,
  removePayOption: Proptypes.func.isRequired,
  addNewItem: Proptypes.func.isRequired,
  removeItem: Proptypes.func.isRequired,
  hideAdmin: Proptypes.func.isRequired,
};

export default AdminPanel;
