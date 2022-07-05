import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>

          <OptionSize handleSetSize={props.handleSetSize} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} getPrice={props.getPrice} sizes={props.sizes} />

          <OptionColor handleSetColor={props.handleSetColor} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} color={props.color} />
          
          <Button 
            type="submit"
            className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>

    );
};

ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    color: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
  };

export default ProductForm;