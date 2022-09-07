import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as categoryService from '../../../services/categoryService';
function Category() {
    const [category, setCategory] = useState([]);


    useEffect(() => {
        const getDataFormAPI = async () => {
            const data = await categoryService.getAll();
            setCategory(data);
        }
        getDataFormAPI();

    }, [])

    return (<>
        <div className="card-group">
            {category.map((item) => {
                return (<div className="card" key={item.id}>
                    <Link to={`shop/${item.id}`}>
                        <img className="card-img-top" src={item.image} alt="Card image cap" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>

                    </div>
                </div>)

            })}

        </div>
    </>);
}

export default Category;