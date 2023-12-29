import '../../styles/App.css';
import '../../styles/nav.css';
import '../../styles/blog-article.scss';
import {articles} from "../Array/array-articles.js";

import Nav from '../nav';

function Blog() {

    return (
        <div className="App">
            <Nav />

            <br /> <h1>Les Articles </h1><br /><br />

            <div className='div-container-article'>

                {articles.map((item) =>
                    <div key={item} className='div-container-article-item'>
                        <img src={item.image} />
                        <a href={"/blog/article?id="+ item.id}><h4>{item.titre}</h4></a>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Blog;
