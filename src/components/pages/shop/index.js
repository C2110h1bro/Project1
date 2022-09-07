import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as productService from '../../../services/productService';

function Shop() {
    const [listProduct, setListProduct] = useState([]);
    let { id } = useParams();
    useEffect(() => {

        const getDataFormAPI = async () => {
            const data = await productService.findByCategory_id(id);
            setListProduct(data);
        }
        getDataFormAPI();

    }, [])
    var _html = [];
    const panginate = () => {

        for (let index = 1; index <= Math.ceil(listProduct.length); index++) {
            _html.push(<li className="page-item" key={index}><a className="page-link" href="" onClick={(event) => getData(index, event)}>{index}</a></li>)
        }

    }
    panginate();

    const getData = (index, e) => {
        e.preventDefault();
        const getDataFormAPI = async () => {
            const data = await productService.findByCategory_id(id, index);
            setListProduct(data);
        }
        getDataFormAPI();
    }
    return (<>

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
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                {_html.map(item => {
                    return item
                })}

                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </>);
}

export default Shop;