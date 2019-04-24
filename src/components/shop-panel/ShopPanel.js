import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KEYS from '../../utils/labels';

import ColorPicker from '../color-picker/ColorPicker';
import StockLabel from '../stok-label/StockLabel';
import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';

const MIN_UNITS_LIMIT = 10;

class ShopPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: '',
      filteredStock: [],
      stock: '0',
      band: [],
      selectedBand: '',
      cup: [],
      selectedCup: '',
    };

    this.availableColors = this.availableColors.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.selectValue = this.selectValue.bind(this);
  }

  componentDidMount() {
    this.selectColor(this.availableColors(this.props.data)[0]);
  }
  
  availableColors(data) {
    let availableColors = [];
    data.map((item) => {
      return !availableColors.includes(item.option1) &&
      availableColors.push(item.option1);
    });
    return availableColors;
  }
  
  selectColor(selectedColor) {
    const options = this.getOptions(selectedColor);
    this.setState({
      selectedColor,
      band: options.bandOptions,
      cup: options.cupOptions,
      filteredStock: options.filteredStock,
      selectedBand: '',
      selectedCup: '',
      stock: '0',
    });
    this.props.updatePrice(`0`);
  }

  selectValue(event) {
    const { filteredStock, selectedColor, selectedBand, selectedCup } = this.state;
    const selectedValue = event.target.value;
    const isBand = parseInt(selectedValue) > 0;
    let stockParams = [filteredStock, selectedColor, selectedBand, selectedCup];
    let options = filteredStock.filter(({option2}) => {
      return option2.includes(selectedValue);
    }).map(({option2}) => {
      return isBand ? option2.slice(2, option2.length) : option2.slice(0, 2);
    });
    let nextState = {};
    if (options.length) {
      nextState = isBand ? {
        selectedBand: selectedValue,
        cup: options,
      } : {
        selectedCup: selectedValue,
        band: options,
      };
    } else {
      options = this.getOptions(selectedColor);
      this.updatePrice('0');
      nextState = {
        selectedColor,
        band: options.bandOptions,
        cup: options.cupOptions,
        filteredStock: options.filteredStock,
        selectedBand: '',
        selectedCup: '',
        stock: '0',
      }
    }
    this.setState(nextState);
    stockParams[isBand ? 2 : 3] = selectedValue;
    if (selectedValue === KEYS.SELECT) {
      this.getStock();
    } else {
      this.getStock(...stockParams);
    }
  }

  getOptions(selectedColor) {
    let bandOptions = [], cupOptions = [];
    const filteredStock = this.props.data.filter( item => {
      return item.option1 === selectedColor && item.inventory_quantity >= MIN_UNITS_LIMIT;
    });
    filteredStock.map(({option2}) => {
      const bandValue = option2.slice(0, 2);
      const cupValue = option2.slice(2, option2.length);
      if (!bandOptions.includes(bandValue)) {
        bandOptions.push(bandValue);
      }
      if (!cupOptions.includes(cupValue)) {
        cupOptions.push(cupValue);
      }
      return '';
    });
    cupOptions.sort();
    return {
      filteredStock,
      bandOptions,
      cupOptions
    }
  }

  getStock(filteredStock, color, band, cup) {
    let newStock = '0';
    if (filteredStock && color && band && cup) {
      const foundItem = filteredStock.find(({option1, option2}) => {
        return option1 === color && option2 === `${ band }${ cup }`.toUpperCase();
      });
      if (foundItem && foundItem.inventory_quantity) {
        this.updatePrice(foundItem.price);
        newStock = foundItem.inventory_quantity.toString();
      }
    }
    this.setState({
      stock: newStock,
    });
  }

  updatePrice(newPrice) {
    newPrice = newPrice.split('.');
    this.props.updatePrice(`${newPrice[0]}${newPrice[1] && newPrice[1] !== '00' ? '.'+newPrice[1] : ''}`);
  }

  render() {
    const { data, title } = this.props;
    const { selectedColor, selectedBand, selectedCup, band, cup, stock } = this.state;
    const availableColors = this.availableColors(data);
  
    const defaultClassPrefix = `shop-panel`;

    const addToBag = () => {
      if (parseInt(stock) && selectedBand && selectedCup) {
        alert(`${ KEYS.BOUGHT_1 } ${ title } - ${ selectedBand }${ selectedCup } ${ KEYS.BOUGHT_2 }`, stock);
      }
    }
  
    return (
      <div className={`${defaultClassPrefix}-container`}>
        <ColorPicker availableColors={ availableColors } onChange={ this.selectColor } selectedColor={ selectedColor }/>
        <StockLabel stock={ stock }/>
        <div className={`${defaultClassPrefix}-dropdowns`}>
          <div className={`${defaultClassPrefix}-dropdowns-band-size`}>
            <Dropdown selectedValue={ selectedBand } label={ KEYS.BAND_SIZE } options={ band } onChange={ this.selectValue }/>
          </div>
          <div className={`${defaultClassPrefix}-dropdowns-cup-size`}>
            <Dropdown selectedValue={ selectedCup } label={ KEYS.CUP_SIZE } options={ cup } onChange={ this.selectValue }/>
          </div>
        </div>
        <Button label={ KEYS.ADD_TO_BAG } fn={addToBag}/>
      </div>
    );
  }
}

ShopPanel.propTypes = {
  data: PropTypes.array,
};

ShopPanel.defaultProps = {
  data: [],
};

export default ShopPanel;