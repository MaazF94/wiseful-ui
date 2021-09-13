import "./NavBar.css";

function NavBar() {
    return (
        <div className="NavBar">
        <h1 className="Logo">wiseful</h1>
        <div className="Links">
          <h1 className="LinkText">ABOUT</h1>
          <h1 className="LinkText">SERVICES</h1>
          <h1 className="LinkText">CAREER TIPS</h1>
          <h1 className="LinkText">FAQ</h1>
          <h1 className="LinkText">EMPLOYERS</h1>
        </div>
        <div className="BtnGroup">
          <button className="LoginBtn">LOGIN</button>
          <button className="SignUpBtn">SIGN UP</button>
        </div>
      </div>
    );
}

export default NavBar;