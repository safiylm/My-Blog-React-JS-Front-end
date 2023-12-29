import '../../styles/App.css';
import '../../styles/nav.css';
import '../../styles/blog-article.scss';
import { articles } from "../Array/array-articles.js";
import Nav from '../nav';
function createMarkup() {
    return { __html: '<strong>First Second</strong' };
}

function Article() {

    const queryParameters = new URLSearchParams(window.location.search)
    const id_param = queryParameters.get("id")


    return (
        <div className="App">
            <Nav />

            <div className='div-display-article'>
                {articles.filter(e => e.id == id_param).map((item) =>
                    <div key={item}>
                        
                        <br />  <h1>{item.titre}</h1><br /> <br />
                        <img src={item.image} />
                        
                        {item.contenu.map((i) =>
                            <div key={i}>
                                <div dangerouslySetInnerHTML={{ '__html': i }} />
                            </div>
                        )}

                    </div>
                )}
            </div>
        </div>
    );
}

export default Article;
