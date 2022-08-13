import { useEffect, useState } from "react";
import Article from "./Article";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    }, []);
    return (
        <div>
            {blogs && <Article blogs={blogs} />}
        </div>
    );
}

export default Home;