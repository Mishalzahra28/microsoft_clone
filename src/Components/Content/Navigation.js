import logo from "../pictures/Microsoft_logo_(2012).svg.png";
import "./Navigation.css";
import Container from "../UI/Container";

function Navigation() {
  return (
    // <Container className="conatiner">
    <div className="nav-bar">
      <ul className="nav-left">
        <li>
          <img src={logo} alt="Microsoft logo" />
        </li>
        <li>
          <a href="https://www.microsoft.com/en/microsoft-365?rtc=1">
            Microsoft 365
          </a>
        </li>
        <li>
          <a href="https://www.microsoft.com/en/microsoft-365/microsoft-office?rtc=1">
            Office
          </a>
        </li>
        <li>
          <a href="https://www.microsoft.com/en-us/windows/">Windows</a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-US">Support</a>
        </li>
      </ul>
      <ul className="nav-right">
        <li>All Microsoft</li>
        <li>Search</li>
        <li>Cart</li>
        <li>Sign in</li>
      </ul>
    </div>
    // </Container>
  );
}

export default Navigation;
