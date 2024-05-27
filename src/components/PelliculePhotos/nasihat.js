import '../../styles/nav.css';
import '../../styles/gallery-photos.scss';
import Nav from '../nav';
import {   array_nasihat } from "../Array/nasihat";

function LessonsforLife() {

    const getnasihatcontent = array_nasihat.map((post) =>

        <div id={"text" + post.id} className="une-publication">
            <img id="image" src={post.image} alt={"image de "+ post.titre} />
            <div id="div-texte" className='d-flex flex-column align-items-center justify-content-center'>
                <div className="date">02.03.2023</div>
                <h1 className="titre"> {post.titre} </h1>
                <div className="description">{post.texte.map((textee =>
                    <p>{textee}</p>
                ))}</div>

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
