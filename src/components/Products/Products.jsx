import fetchProducts from "../../api/fetchProducts";
import "./Products.css";
import { useEffect, useContext } from "react";
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";
import AppContext from "../../context/AppContext";

export const  Products = () => {

  const {products , setProducts, loading, setLoading} = useContext(AppContext);    
  
  /* eslint-disable */
  useEffect(() => {
    fetchProducts("").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  },[]);
  /* eslint-enable */

  

  return loading ? (
    <Loading />
  ) : (
    <section className="products container">
      {products.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </section>
  );
}

