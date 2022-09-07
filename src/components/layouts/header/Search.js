import classNames from "classnames/bind";
import styles from "./header.module.css";
import BoxSearch from "./boxSearch";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import * as productService from '../../../services/productService';
let cx = classNames.bind(styles);
function Search() {
    const [keyWord, setKeyWord] = useState('');
    const [show, setShow] = useState(true);
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        console.log('hihi')
        const fillter = async (keyWord) => {
            const data = await productService.fillter(keyWord);
            setListProduct(data);
            console.log('dmc');
        }

        const timer = setTimeout(() => {
            fillter(keyWord);
        }, 1000)
        return () => clearTimeout(timer);
    }, [keyWord])
    return (
        <>
            <input placeholder="Nhập từ khóa tìm kiếm" className={cx('input__header')} onChange={(e) => setKeyWord(e.target.value.trim())} />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon_search')} />
            {keyWord != '' && <BoxSearch keyWord={keyWord} data={listProduct} />}
        </>
    );
}

export default Search;