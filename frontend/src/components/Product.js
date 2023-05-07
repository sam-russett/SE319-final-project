import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='product'>
            <img src="https://m.media-amazon.com/images/I/61vM5Z-bBFL._AC_SX679_.jpg" 
            alt="product name"/>

            <div className='product__info'>
                <p className='info__name'>Product 1</p>
                <p className='info__description'>Some interesting things. A longer description would 
                be nice for testing. re do do do dod do</p>

                <p className='info__price'>149.99</p>

                <Link to={`/product/${1111}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product;