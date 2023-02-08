import "./Productlist.css";
import Products from "./Products";

function Productlist(props) {
  return (
    <div className="productlist">
      <Products val={props.items[0]} />
      <Products val={props.items[1]} />
      <Products val={props.items[2]} />
      <Products val={props.items[3]} />
    </div>
  );
}

export default Productlist;
