import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./header.module.css";
import logo from "../../../asset/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useRef, useState } from "react";
import BoxCart from "./boxCart";
import Search from "./Search";
import { useSelector } from "react-redux";

let cx = classNames.bind(styles);


function Header() {
    const counter = useSelector(state => state.counter)
    const [showCart, setShowCart] = useState(false);
    const iconCart = useRef()
    const cart = useSelector((state) => state.cart)

    useEffect(() => {

        const outSide = (e) => {
            // console.log(e.path[0]);
            // console.log(iconCart.current);
            if (e.path[0] != iconCart.current) {
                setShowCart(false);
            }
        }
        document.body.addEventListener('click', outSide);
        return () => document.body.removeEventListener('click', outSide);
    }, [])
    return (
        <>
            <header className={cx('container-fluid', 'header')}>
                <div className="row">
                    <div className="col-lg-3">
                        <Link to="/">
                            <img src={logo} className={cx('header__logo')} />
                            <span>Cui code {counter} </span>
                        </Link>
                    </div>

                    <div className="col-lg-9 d-flex justify-content-between align-items-center">
                        <div className="position-relative">
                            <Search />
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="hihi bg-danger" >
                                <a href="#" className="p-5" onClick={() => setShowCart(!showCart)} ref={iconCart}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </a>
                                {cart.cartNumber}
                                {showCart}
                            </ div>

                            <FontAwesomeIcon icon={faUser} />
                            <FontAwesomeIcon icon={faCartShopping} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>

                {showCart && <BoxCart />}

            </header>

        </>
    );
}

export default Header;