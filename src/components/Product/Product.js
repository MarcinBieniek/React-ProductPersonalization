import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const handleSetSize = (size) => {
    setCurrentSize(size)
  }

  const handleSetColor = (color) => {
    setCurrentColor(color)
  }

  const getPrice = (price) => {
    return setCurrentPrice(props.basePrice + price)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Summary');
    console.log('===========');
    console.log('Name: ', props.title);
    console.log('Price: ', currentPrice);
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage color={currentColor} name={props.name} title={props.title}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        
        <ProductForm 
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          getPrice={getPrice}
          sizes={props.sizes}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          color={props.colors}
          handleSubmit={handleSubmit} 
          title={props.title}
          setCurrentPrice={setCurrentPrice}
          handleSetSize={handleSetSize} 
          handleSetColor={handleSetColor}        
        />
      </div>
    </article>
  )

};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  color: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
}

export default Product;