import '../../styles/nav.css';
import '../../styles/gallery-photos.scss';
import Nav from '../nav';

import {array_lifestyle} from "../Array/lifestyle"




function Lifestyle() {


    const getlifestylecontent = array_lifestyle.map((post) =>

        <div className="une-publication">
            {post.image.length == 1 ?
                <img alt='lifestyle' src={post.image[0]} />
                :
                <div id={"#carouselExampleRide"+post.id } className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        {post.image.map((image) =>
                            <div className="carousel-item active">
                                <img alt='lifestyle' src={image} className="d-block w-100" />
                            </div>
                        )}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleRide"+post.id } data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleRide"+post.id } data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            }


            <div className="date">02.03.2023</div>
            <h1 className="titre">{post.titre.en}</h1>
            <p className="description">{post.texte.en}</p>
            <a className="readmore">Read More </a>

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

export default Lifestyle;


