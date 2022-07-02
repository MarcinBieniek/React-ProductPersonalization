import styles from './Product.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Button from '../Button/Button';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>Kodilla shirt</h2>

          <span className={styles.price}>Price: {currentPrice}$</span>

        </header>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => 
              
              <li key={index}>
                <button type="button" onClick={() => {
                  handleSetSize(size.name);
                  getPrice(size.additionalPrice);
                }}
                className={clsx(size.name === currentSize && styles.active)}>
                {size.name}</button>
              </li>)}
            
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>

              {props.colors.map(item => <li key={item}>
                <button type="button" 
                className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} 
                onClick={() => handleSetColor(item)}/>
              </li>)}
            
            </ul>
          </div>
          
          <Button 
            type="submit"
            className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;