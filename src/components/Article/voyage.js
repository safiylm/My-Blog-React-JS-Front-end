import '../../styles/nav.css';
import '../../styles/articles.scss';
import ph11 from '../../assets/ph11.jpg'


function Voyager() {


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Voyager</h1>
            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'un salon minimaliste" src="https://images.pexels.com/photos/2147487/pexels-photo-2147487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className="publication-txt">

                    <h2 className="titre"></h2>
                    <ul>
                        <li>En découvrant de nouvelles cultures, traditions et modes de vie, les voyageurs développent une ouverture d’esprit.</li>

                        <li>Voyager permet de sortir de sa zone de confort, d’acquérir de nouvelles compétences et de développer sa confiance en soi.</li>
                                                
                        <li>Les expériences vécues en voyage (rencontres, paysages, activités) se transforment souvent en souvenirs précieux qui enrichissent la vie émotionnelle et le bonheur à long terme. </li>
                        <li>Voyager c'est aussi prendre une pause dans sa routine, ce qui fait du bien. 
                            C'est se retirer de la vie de tout les jours pour se reposer, réflechir, se donner du temps pour faire un bilan de sa vie.</li>
                    </ul>
                </div>

            </div>

        </>

    );
}

export default Voyager;
