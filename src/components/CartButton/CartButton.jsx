import { useContext } from 'react';
import './CartButton.css';
import { BsCart2 } from "react-icons/bs";
import AppContext from '../../context/AppContext';

function CartButton() {

    const { cartItens, isCartVisible, setIsCartVisible } = useContext(AppContext);    

    return(
        <button onClick={() => {setIsCartVisible(!isCartVisible)} } type='button' className='cart-button'>
            <BsCart2 />

            {cartItens.length > 0 && <span className='cart-status'>{cartItens.length}</span>}
        </button>
    )    
}

export default CartButton;