import "./FormScreen.css";
import { useState } from 'react';
import {Link} from 'react-router-dom';

export var userInfo = {
    username : 'asdf',
    email : '',
    card : '',
    address : '',
    address2 : '',
    city : '',
    state : '',
    zip : ''
}
const FormScreen = () => {
    const [inputName, setName] = useState('');
    const [inputEmail4, setEmail] = useState('');
    const [inputCard, setCard] = useState('');
    const [inputAddress, setAddress] = useState('');
    const [inputAddress2, setAddress2] = useState('');
    const [inputCity, setCity] = useState('');
    const [inputState, setState] = useState('');
    const [inputZip, setZip] = useState('');

    userInfo.username = inputName;
    userInfo.email = inputEmail4;
    userInfo.card = inputCard;
    userInfo.address = inputAddress;
    userInfo.address2 = inputAddress2;
    userInfo.city = inputCity;
    userInfo.state = inputState;
    userInfo.zip = inputZip;
    
    return (
        <form>
            <div className="formscreen">
                <div className="formscreen_left">
                    <h2>Form Validation</h2>
                    {/* name */}
                    <div>
                        <label for="inputName" class="form-label">Full Name </label>
                        <input onChange={(e) => {setName(e.target.value);}} type="text" class="form-control" id="inputName"></input>
                    </div>
                    {/* email */}
                    <div>
                        <label for="inputEmail4" class="form-label">Email </label>
                        <input onChange={(e) => {setEmail(e.target.value);}} type="email" class="form-control" id="inputEmail4"></input>
                    </div>
                    {/* card */}
                    <div>
                        <label for="inputCard" class="form-label">Card </label>
                        <input onChange={(e) => {setCard(e.target.value);}} type="text" id="inputCard" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    {/* address */}
                    <div>
                        <label for="inputAddress" class="form-label">Address </label>
                        <input onChange={(e) => {setAddress(e.target.value);}} type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                    </div>
                    {/* address 2 */}
                    <div> 
                        <label for="inputAddress2" class="form-label">Address 2 </label>
                        <input onChange={(e) => {setAddress2(e.target.value);}} type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    {/* city */}
                    <div>
                        <label for="inputCity" class="form-label">City </label>
                        <input onChange={(e) => {setCity(e.target.value);}} type="text" class="form-control" id="inputCity"></input>
                    </div>
                    {/* state */}
                    <div>
                        <label for="inputState" class="form-label">State </label>
                        <input onChange={(e) => {setState(e.target.value);}} type="text" class="form-control" id="inputState"></input>
                    </div>
                    {/* zip code */}
                    <div>
                        <label for="inputZip" class="form-label">Zip </label>
                        <input onChange={(e) => {setZip(e.target.value);}} type="text" class="form-control" id="inputZip"></input>
                    </div>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-success"> <Link to={"/order"}> Order</Link></button>
                    </div>
                </div>
            </div>
        </form>
        
    )
};

export default FormScreen;