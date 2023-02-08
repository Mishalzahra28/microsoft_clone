import "./Products.css";

function Products(props) {
  return (
    <div className="product">
      <img src={props.val.image} alt="" />
      <h3 className="pheading">{props.val.heading}</h3>
      <p>{props.val.para}</p>
      <a href={props.val.link}>{props.val.linkTitle}</a>
    </div>
  );
}

export default Products;
