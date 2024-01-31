import './CartButton.css';
import { BsCart2 } from "react-icons/bs";

function CartButton() {
    return(
        <button type='button' className='cart-button'>
            <BsCart2 />
            <span className='cart-status'>1</span>
        </button>
    )    
}

export default CartButton;