import '../../styles/nav.css';
import '../../styles/articles.scss';

function Lecture() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Lire </h1>
            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'un salon minimaliste" src="https://images.pexels.com/photos/2147487/pexels-photo-2147487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className="publication-txt">

                    <h2 className="titre"></h2>
                    <ul>
                        <li>10 benefits of reading: Mental Stimulation, Stress Reduction,  Knowledge, Vocabulary Expansion, Memory Improvement,  Stronger Analytical Thinking Skills, Improved Focus and Concentration, Better Writting Skills, Tranquillity,  Free Entertrainment </li>
                   </ul>
                </div>
            </div>
        </>
    );
}

export default Lecture;
