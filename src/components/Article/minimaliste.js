import '../../styles/nav.css';
import '../../styles/articles.scss';
import ph11 from '../../assets/ph11.jpg'


function StyleDeVieMinimaliste() {


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Une vie minimaliste</h1>


            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'un salon minimaliste" src={ph11} />
                </div>

                <div className="publication-txt">

                    <h2 className="titre">Les avantages</h2>
                    <ul>
                        <li> Le minimalisme réduit le temps passé à organiser, nettoyer et gérer les objets.
                            Cela permet de se concentrer sur ce qui est essentiel, important pour soi et ce qui apporte vraiment de la valeur et du sens.
                        </li>

                        <li>Cela permet de mieux gérer son budget et de consacrer davantage de ressources à des expériences ou à des projets plus significatifs.</li>
                        
                        <li>
                            Avec moins de distractions matérielles, il est plus facile de se concentrer sur des objectifs importants, que ce soit dans le domaine professionnel ou personnel.
                            Cela peut entraîner une meilleure connaissance de soi, une vie plus alignée sur ses valeurs, et un sentiment de satisfaction plus profond.
                        </li>
                        
                        <li>
                            Moins de possessions signifie moins de désordre, ce qui réduit le stress visuel et mental.
                            Un espace épuré et organisé est souvent plus apaisant et propice à la concentration.
                            Un espace de travail minimaliste favorise ainsi la créativité et la productivité.
                        </li>
                    </ul>
                </div>

            </div>

        </>

    );
}

export default StyleDeVieMinimaliste;
