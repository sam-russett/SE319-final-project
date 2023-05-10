import "./FormScreen.css";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


const FormScreen = () => {

    return (
        <form>
            <div className="formscreen">
                <div className="formscreen_left">
                    <h2>Form Validation</h2>
                    {/* name */}
                    <div>
                        <label for="inputName" class="form-label">Full Name </label>
                        <input type="text" class="form-control" id="inputName"></input>
                    </div>
                    {/* email */}
                    <div>
                        <label for="inputEmail4" class="form-label">Email </label>
                        <input type="email" class="form-control" id="inputEmail4"></input>
                    </div>
                    {/* card */}
                    <div>
                        <label for="inputCard" class="form-label">Card </label>
                        <input type="text" id="inputCard" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    {/* address */}
                    <div>
                        <label for="inputAddress" class="form-label">Address </label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                    </div>
                    {/* address 2 */}
                    <div> 
                        <label for="inputAddress2" class="form-label">Address 2 </label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    {/* city */}
                    <div>
                        <label for="inputCity" class="form-label">City </label>
                        <input type="text" class="form-control" id="inputCity"></input>
                    </div>
                    {/* state */}
                    <div>
                        <label for="inputState" class="form-label">State </label>
                        <input type="text" class="form-control" id="inputState"></input>
                    </div>
                    {/* zip code */}
                    <div>
                        <label for="inputZip" class="form-label">Zip </label>
                        <input type="text" class="form-control" id="inputZip"></input>
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
                        <button type="submit" class="btn btn-success"> <Link to={"/orderj/m"}> Order</Link></button>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default FormScreen;