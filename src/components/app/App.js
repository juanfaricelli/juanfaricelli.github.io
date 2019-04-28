import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProduct } from '../../actions';

import './App.scss';

import TitlePrice from '../title-price/TitlePrice';
import Carousel from '../carousel/Carousel';
import ShopPanel from '../shop-panel/ShopPanel';
import Details from '../details/Details';
import SpinnerIcon from '../icons/SpinnerIcon';

class App extends Component {
  constructor(props) {
    super(props);

    props.fetchProduct();
    this.state = {
      price: '0',
    };

    this.updatePrice = this.updatePrice.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.setState({smallView: window.innerWidth <= 1024});
  }

  updatePrice(price) {
    this.setState({ price });
  }

  render() {
    const { title, body_html: details, images, variants} = this.props.product;
    const { smallView, price } = this.state;

    const smallLayout = () => {
      return(
        <div>
          <TitlePrice title={ title } price={ price } />
          <div className="app-section">
            <Carousel images={ images } smallView={ smallView }/>
            <ShopPanel data={ variants } title={ title } updatePrice={ this.updatePrice }  />
            <Details text={ details } />
          </div>
        </div>);
    }

    const bigLayout = () => {
      return(
      <div className="app-section">
        <div className="app-content">
          <Carousel images={ images } smallView={ smallView } />
          <Details text={ details } />
        </div>
        <div className="app-content-side-panel">
          <TitlePrice title={ title } price={ price } />
          <ShopPanel data={ variants } title={ title } updatePrice={ this.updatePrice } />
        </div>
      </div>);
    }

    return (
      <main role="main">
        <div className="app-container">
          { !images ? 
            <SpinnerIcon /> : 
            (smallView ? smallLayout() : bigLayout()) }
        </div>
      </main>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  body_html: PropTypes.string,
  images: PropTypes.array,
  variants: PropTypes.array,
};

const mapStateToProps = state => {
  return { product: state.product };
}

export default connect(mapStateToProps, { fetchProduct })(App);
