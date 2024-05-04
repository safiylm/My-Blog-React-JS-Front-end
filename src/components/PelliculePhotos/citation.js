import '../../styles/nav.css';
import '../../styles/gallery-photos.scss';
import Nav from '../nav.js';

function Citation() {


    return (
        <div className="App">

            <Nav />

            <div className="container-publications-photos">

                <div className="une-publication">
                    <img src="https://images.pexels.com/photos/20225732/pexels-photo-20225732/free-photo-of-woman-holding-red-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />                
                    <p style={{ fontSize : "20px"}}>La beauté commence au moment où vous décidez d'être vous-même.</p>
                    <p>Coco Chanel </p>
                </div>
                <div className="une-publication">
                    <img src="https://images.pexels.com/photos/2114689/pexels-photo-2114689.jpeg?auto=compress&cs=tinysrgb&w=1200" />                
                    <p style={{ fontSize : "20px"}}>Il faut toujours viser la lune car même en cas d'échec, on atterit dans les étoiles.</p>
                    <p>Oscar Wilde </p>
                </div>
                <div className="une-publication">
                    <img src="https://images.pexels.com/photos/4482677/pexels-photo-4482677.jpeg?auto=compress&cs=tinysrgb&w=1200" />                
                    <p style={{ fontSize : "20px"}}>Le bonheur n'est pas d'avoir tout ce que l'on désire mais d'apprécier ce que l'on a...</p>
                    <p>Paolo Coelho </p>
                </div>

            </div>

        </div>
    );
}

export default Citation;
