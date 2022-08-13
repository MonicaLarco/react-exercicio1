import imgs from '../images/image-art-1.jpg';
const Article = ({ blogs }) => {
    // const blogs = [
    //     { title: 'How to customize your coffee mug', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', author: 'Olivia', id: 1 },
    //     { title: 'Where to buy good coffee', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', author: 'Popeye', id: 2 },
    //     { title: 'Do you know...', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', author: 'Lou', id: 3 }
    // ];

    return (
        <div>
            {blogs.map((blog) => (
                <div className="blog-preview-layout" key={blog.id}>
                    <img src={ imgs } alt="" className="image-size" />
                    <div className="blog-preview">
                        <h2>{ blog.title }</h2>
                        <h5>Written by { blog.author }</h5>
                        <p>{ blog.body.slice(0, 150).trim() }</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Article;