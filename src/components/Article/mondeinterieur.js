import '../../styles/nav.css';
import '../../styles/articles.scss';

function MondeInterieur() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Mon Monde intérieur</h1>
            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'un salon minimaliste" src="https://images.pexels.com/photos/2147487/pexels-photo-2147487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className="publication-txt">

                    <h2 className="titre"></h2>
                    <ul>
                        <li>He should retreat into his shell for a while and listen to himself thoroughly. He must withdraw into his inner world. Those who have no knowledge of their inner world, are only in love with matter and are lost in worldly pleasures.</li>
                   </ul>
                </div>
            </div>
        </>
    );
}

export default MondeInterieur;
