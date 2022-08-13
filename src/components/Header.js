import logo from '../images/logo.png';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" width="10%" />
            <div className="links">
                <a href="/">Topic 1</a>
                <a href="/blog">Topic 2</a>
                <a href="/contact">Topic 3</a>
            </div>
        </div>);
}

export default Header;