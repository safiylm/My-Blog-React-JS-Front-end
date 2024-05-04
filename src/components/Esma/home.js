import imgblog from '../../assets/foreground-desktop-1500w.jpg'
import '../../styles/nav.css';
import Nav from '../nav';
import '../../styles/Home.css';

function ManeviyatHome() {


    return (
        <div className="App">
            <header className="App-header"> </header>

            <div className="div0">
               
                <Nav />
                <div className="div1">
                    <div className="div1-text">
                       

                        <h1>Marifetullah  </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <a href="/2108200015/marifetullah">Visiter</a>

                        <h1>Esma  </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <a href="/2108200015/esma">Visiter</a>

                    </div>
                    <div className="div1-image"><img src={imgblog} /></div>
                </div>

            </div>
        </div>
    );
}

export default ManeviyatHome;