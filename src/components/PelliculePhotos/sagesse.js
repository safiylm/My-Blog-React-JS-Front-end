import '../../styles/nav.css';
import '../../styles/gallery-photos.scss';
import Nav from '../nav';
import {   array_nasihat } from "../Array/sagesse";

function LessonsforLife() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')


    const getnasihatcontent = array_nasihat.map((post) =>

        <div id={"text" + post.id} className="une-publication">
            <img id="image" src={post.image} alt={"image de "+ post.titre} />
            <div id="div-texte" className='d-flex flex-column align-items-center justify-content-center'>
                <div className="date">02.03.2023</div>
            
                <h1 className="titre">
                {lang == "fr" && post.titre.fr}
                {(lang == "en" || lang == null) && post.titre.en}
                {lang == "tr" && post.titre.tr}
            </h1>
            <div className="description">
                {lang == "fr" && post.texte.fr}
                {(lang == "en" || lang == null) && post.texte.en}
                {lang == "tr" && post.texte.tr}
            </div>
                <button id="btn-fermer" onClick={() => document.getElementById("text" + post.id).classList.remove("expand")}>Fermer</button>
                <button onClick={() => document.getElementById("text" + post.id).classList.add("expand")} className="readmore">Read More </button>
            </div>
        </div>


    );

    return (
        <div className="App">

            <Nav />

            <div className="container-publications-photos nasihat">
                {getnasihatcontent}

            </div>

        </div>
    );
}

export default LessonsforLife;
