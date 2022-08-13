import { useEffect, useState } from "react";
import Article from "./Article";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setisPending(false);
                    setBlogs(data);
                })
                .catch(err => {
                    console.log(err.message);
                });
        }, 1000);
    }, []);
    return (
        <div>
            {isPending && <div>Loading</div>}
            {blogs && <Article blogs={blogs} />}
        </div>
    );
}

export default Home;