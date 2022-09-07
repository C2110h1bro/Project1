import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
let cx = classNames.bind(styles);
function BoxCart() {
    const cart = useSelector((state) => state.cart)
    return (
        <>
            <div className={cx('box-cart')}>
                {cart.cartItems.map((item) => {
                    return (
                        <div className="media" key={item.id}>
                            <a className="d-flex align-items-center" href="#">
                                <img src="https://tophinhanh.com/wp-content/uploads/2021/12/anh-anime-nu-xinh-nhu-thien-than-full-hd-1-564x375.jpg"
                                    alt="" className={cx('avt')} />
                            </a>
                            <div className="media-body">
                                <span>qty: {item.quantity}</span>
                                <h5>{item.name}</h5>
                            </div>
                        </div>
                    )

                })}

                <Link to="/cart" className="btn btn-primary btn-block">Xem Giỏ Hnafg</Link >
            </div>
        </>
    );
}

export default BoxCart;