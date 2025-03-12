import { Link } from "react-router-dom";
import "../styles/productCard.css";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
    </Link>
  );
};

export default ProductCard;
