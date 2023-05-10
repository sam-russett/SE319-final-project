import "./FormScreen.css";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

//Components
import CartItem from "../components/CartItem";

//Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';
import { userInfo } from './FormScreen';


const OrderSummaryScreen = () => {
    var username = userInfo.username;
    var email = userInfo.email;
    var card = userInfo.card;
    var address = userInfo.address;
    var address2 = userInfo.address2;
    var city = userInfo.city;
    var state = userInfo.state;
    var zip = userInfo.zip;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
    }

    return (
        <div className="formscreen">
                <div className="formscreen_left">
                    <h2>Order Summary</h2>
                    {/* name */}
                    <div>
                        <p><h4>Name: </h4>{username}</p>
                    </div>
                    {/* email */}
                    <div>
                        <p><h4>Email: </h4>{email}</p>
                    </div>
                    {/* card */}
                    <div>
                        <p><h4>Card: </h4>{card}</p>
                    </div>
                    {/* address */}
                    <div>
                        <p><h4>Address: </h4>{address}</p>
                    </div>
                    {/* address 2 */}
                    <div> 
                        <p><h4>Address 2: </h4>{address2}</p>
                    </div>
                    {/* city */}
                    <div>
                        <p><h4>City: </h4>{city}</p>
                    </div>
                    {/* state */}
                    <div>
                        <p><h4>State : </h4>{state}</p>
                    </div>
                    {/* zip code */}
                    <div>
                        <p><h4>Zip Code: </h4>{zip}</p>
                    </div>
                    {/* total */}
                    <div class="total-price">
                        <p><h4>Total: </h4>${getCartSubTotal()}</p>
                    </div>
                </div>
            </div>
    )
};

export default OrderSummaryScreen;