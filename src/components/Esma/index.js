import '../../styles/esma.scss';
import Nav from "../nav";
import { liste_esma } from './liste';
import video0 from "../../assets/Univers is Museum.mp4"


function Esma() {
    return (
        <>
            <Nav />
            <h1>Esma ül Hüsna </h1>
            {liste_esma.map((x) =>
                <div className="bir-esma" key={x.toString()}>
                    <div className="bir-esma-image" key={x.toString()}>
                        {x.photos.length == 0 ? <video src={video0} autoPlay /> :

                            <div id={"carouselExampleRide" + x.nom} className="carousel slide" data-bs-ride="true">
                                <div className="carousel-inner">
                                {x.photos.map( (photo) => 
                                    <div className="carousel-item active">
                                        <img src={photo} className="d-block w-100" alt="..." />
                                    </div>
                                )}
                                   

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleRide" + x.nom} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleRide" + x.nom} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        }
                    </div>
                    <div className="bir-esma-texte" >
                        <h1>{x.nom}</h1>
                        {x.signification_tr.map((signification) =>
                            <p>{signification}</p>
                        )}

                        {x.tags.map((tag) =>
                            <a id="tag">{tag}</a>
                        )}
                    </div>
                </div>
            )}
        </ >
    );
}

export default Esma;