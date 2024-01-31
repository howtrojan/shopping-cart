import './Header.css'
import { SearchBar } from '../SearchBar/SearchBar'
import CartButton from '../CartButton/CartButton'

export const Header = () => {
    return(
    <header className="header">
        <div className="container">
            <SearchBar/>      
            <CartButton/>      
        </div>
    </header>)
}

