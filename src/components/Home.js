import imgblog from '../assets/foreground-desktop-1500w.jpg'
import '../styles/App.css';
import '../styles/nav.css';
import Nav from './nav';

function Home() {


    return (
        <div className="App">
            <header className="App-header"> </header>

            <div className="div0">
               
                <Nav />
                <div className="div1">
                    <div className="div1-text">
                        <h1>The lifestyle I want  </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <a href="/lifestyle">Visiter</a>

                        <h1>Lessons for my Life  </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <a href="/lessonsforLife">Visiter</a>
                    </div>
                    <div className="div1-image"><img src={imgblog} /></div>
                </div>


                <div className="div2">
                    <div>
                       <a href="/liste-recette">Mes Recettes</a> 
                    </div>

                    <div>
                       <a href="/marifetullah">Marifetullah</a> 
                    </div>

                    <div>
                       <a href="/esma"> Esma </a> 
                    </div>

                    <div>
                       <a href="/citation"> Citation </a> 
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Home;
