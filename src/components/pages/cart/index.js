import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, updateCart } from "../../../redux/actions/cart";
import InputCart from "./input";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispath = useDispatch();
    const input = useRef();
    const update = (e, data) => {

        if (e.target.className === 'plus') {
            var item = {
                id: data.id,
                quantity: data.quantity + 1,

            }
            // input.current.defaultValue += 1;
            dispath(updateCart(item));

        } else {
            var item = {
                id: data.id,
                quantity: data.quantity - 1,
            }

            dispath(updateCart(item));
        }
    }
    const setValue = (e) => {
        e.target.value = 100
    }
    return (<>

        <section className="h-100 h-custom" >
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card shopping-cart" >
                            <div className="card-body text-black">

                                <div className="row">
                                    <div className="col-lg-6 px-5 py-4">

                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                                        {cart.cartItems.map(item => {
                                            return (

                                                < div className="d-flex align-items-center mb-5" key={item.id}>

                                                    <div className="flex-shrink-0">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                                                            className="img-fluid w-50" alt="Generic placeholder image" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                                        <h5 className="text-primary">{item.name}</h5>
                                                        <h6 >Color: white</h6>
                                                        <div className="d-flex align-items-center">
                                                            <p className="fw-bold mb-0 me-5 pe-3">{item.price}$</p>
                                                            <div className="def-number-input number-input safari_only d-flex">
                                                                <button
                                                                    className="minus" onClick={(e) => update(e, item)}>-</button>

                                                                <InputCart quantity={item.quantity} id={item.id} />

                                                                <button
                                                                    className="plus" onClick={(e) => update(e, item)}>+</button>
                                                            </div>
                                                        </div>
                                                        <button onClick={() => dispath(deleteCart(item.id))}>X</button>
                                                    </div>
                                                </div>
                                            )

                                        })}



                                        <hr className="mb-4" />

                                        <div className="d-flex justify-content-between px-x">
                                            <p className="fw-bold">Discount: </p>
                                            <p className="fw-bold">95$</p>
                                        </div>
                                        <div className="d-flex justify-content-between p-2 mb-2" >
                                            <h5 className="fw-bold mb-0">Total: </h5>
                                            <h5 className="fw-bold mb-0">2261$</h5>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>);
}

export default Cart;