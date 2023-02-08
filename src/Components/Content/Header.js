import "./Header.css";

function Header(props) {
  return (
    <div
      className="header"
      style={{
        backgroundImage: "url(" + props.item.bgimg + ")",
      }}
    >
      <h2>{props.item.heading}</h2>
      <p className="text">{props.item.text}</p>
      <div className="header-link">
        <a href={props.item.link}>{props.item.linkTitle}</a>
      </div>
    </div>
  );
}

export default Header;
