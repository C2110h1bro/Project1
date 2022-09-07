import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../../redux/actions/cart";

function InputCart({ quantity, id }) {

    const [input, setInput] = useState(quantity)
    const dispatch = useDispatch();
    useEffect(() => {
        setInput(quantity)
        // console.log(data)
    }, [quantity])
    const setValue = (value) => {
        setInput(value)
    }
    const update = () => {
        let item = {
            id: id,
            quantity: input
        };
        dispatch(updateCart(item))
    }
    return (<>
        <input name="quantity" value={input} onChange={(e) => setValue(e.target.value)} onBlur={() => update()} />
    </>);
}

export default InputCart;