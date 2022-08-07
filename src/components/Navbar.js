import logo from '../images/logo.png';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            {/* <h1>O & P's Coffee Mugs</h1> */}
            <img src={ logo } alt="logo" width="10%"/>
            <div className="links">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact Us</a>
            </div>
        </nav>
     );
}
 
export default Navbar;