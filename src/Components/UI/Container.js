import "../UI/Container.css";

function Container(props) {
  let classes = "wrapper " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Container;
