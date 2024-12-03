import '../styles/nav.css';
import '../styles/lifestyle.scss';
import Nav from './nav';

import { array_articles } from "./Array/articles"


function Home() {
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const lang = urlParams.get('lang')

    const getlifestylecontent = array_articles.map((post) =>

        <div className="publication">
            <a href={post.url}>
                <img alt='lifestyle' src={post.image[0]} />
                <div className="publication-txt">

                    {/* {lang === "en" && post.titre.en}
                    {lang === "tr" && post.titre.tr} */}
                    {/*(lang === "fr"|| lang === null) && */  post.titre.fr}

                </div> 
                </a>
        </div>
    );

    return (
        <div className="App">
            <Nav />
            <div className="container-publications-photos">
                {getlifestylecontent}
            </div>
        </div>
    );
}

export default Home;