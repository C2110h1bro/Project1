import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../../redux/actions/cart";
import * as productService from '../../../services/productService';
function Detail() {
    let { id } = useParams();
    const [detail, setDetail] = useState({});
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {

        const getDataFormAPI = async () => {
            const data = await productService.find(id);
            console.log(data);
            setDetail(data);
        }
        getDataFormAPI();
    }, [])


    return (<>
        <h1>Ten sp : {detail.name}</h1>
        <img src={detail.image} />
        <form className="form-inline">
            <div className="form-group">

                <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId" value={value} onChange={(e) => { setValue(e.target.value) }} />
                <button type="button" className="btn btn-outline-primary" onClick={() => { dispatch(addToCart(detail, value)) }}>Mua</button>
            </div>
        </form>
    </>);
}

export default Detail;