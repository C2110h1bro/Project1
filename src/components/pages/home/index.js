import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as productService from '../../../services/productService';
import { Link } from 'react-router-dom';
import Category from './Category';
import { useDispatch, useSelector } from 'react-redux';
import { giam, tang } from '../../../redux/actions';
import { addToCart } from '../../../redux/actions/cart';
function Home() {

    const [listProduct, setListProduct] = useState([]);
    const [dcm, setDcm] = useState('Son')
    useEffect(() => {

        const getDataFormAPI = async () => {
            const data = await productService.getAll();
            setListProduct(data);
        }
        getDataFormAPI();
    }, [])
    const counter = useSelector((state) => state.counter)

    const dispath = useDispatch();
    return (<>

        <OwlCarousel className='owl-theme' loop margin={0} items={1} nav dots>
            <div className='item'>
                <img src="https://induongquang.com/data/upload/banner-son-moi.jpg" />
            </div>
            <div className='item'>
                <img src="https://induongquang.com/data/upload/banner-son-moi.jpg" />
            </div>
            <div className='item'>
                <img src="https://induongquang.com/data/upload/banner-son-moi.jpg" />
            </div>
            <div className='item'>
                <img src="https://induongquang.com/data/upload/banner-son-moi.jpg" />
            </div>

        </OwlCarousel>

        <div className="row">
            <h1 className="text-center bg-danger ">Danh mục sản phẩm {counter}</h1>
            <Category />
        </div>

        <div className="row">

            {listProduct.map((item, index) => {

                return (
                    <div className="col-lg-4 mb-3" key={index}>
                        <div className="card">
                            <img className="card-img-top" src={item.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <Link to={`detail/${item.id}`} className="btn btn-outline-primary">
                                    Xem Chi tieets
                                </Link>

                                <button type="button" className="btn btn-primary" onClick={() => dispath(addToCart(item))}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>



    </>);
}

export default Home;