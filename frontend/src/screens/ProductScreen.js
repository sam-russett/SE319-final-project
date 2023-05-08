import "./ProductScreen.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//Actions
import {getProductDetails} from '../redux/actions/productActions';
import {} from '../redux/actions/cartActions';

const ProductScreen = ({match, history}) => {

    return <div className="productscreen">
        <div className="productscreen__left">
            <div className="left__image">
                <img src="https://m.media-amazon.com/images/I/61vM5Z-bBFL._AC_SX679_.jpg" 
                alt="product name"/>
            </div>

            <div className="left__info">
                <p className="left__name">Product 1</p>
                <p>Price: $149.99</p>
                <p>Some interesting things. A longer description would 
                be nice for testing. re do do do dod do</p>
            </div>
        </div>
        <div className="productscreen__right">
            <div className="right__info">
                <p>
                    Price: <span>$149.99</span>
                </p>
                <p>
                    Status: <span>In Stock</span>
                </p>
                <p>
                    Quantity
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </p>
                <p>
                    <button type="button">Add to Cart</button>
                </p>
            </div>
        </div>
    </div>
}

export default ProductScreen;