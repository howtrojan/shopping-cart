import { BsSearch } from "react-icons/bs";
import './SearchBar.css';
import { useState, useContext } from "react";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

export const SearchBar = () => {
    const { setProducts, setLoading } = useContext(AppContext);   
    const [searchValue, setSeachValue] = useState('');
    const HandleSearch = async(event) => {
      event.preventDefault();
      setLoading(true);
      const products = await fetchProducts(searchValue);
      setProducts(products);
      setLoading(false);
      setSeachValue('');
    }    

  return (
    <form className="search-bar" onSubmit={HandleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos, marcas e muito mais... "
        className="search-input"
        onChange={ ({ target }) => setSeachValue(target.value)}     
        required
      />      
      <button type="submit" className="search-button">
        <BsSearch />
      </button>
    </form>
  );
};
