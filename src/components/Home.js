import { useEffect, useState } from "react";
import Article from "./Article";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                // if(!res.ok){
                //     throw Error('Could not fetch the data')
                // }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setBlogs(data);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(`${err.message}, please try to run the command: npx json-server --watch data/db.json --port 8000 in a different command terminal`);
            });
    }, []);
    return (
        <div>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading</div>}
            {blogs && <Article blogs={blogs} />}
        </div>
    );
}

export default Home;