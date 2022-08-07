import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container-fluid">
                <Form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <Button className="btn" type="submit">Go</Button>
                </Form>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;