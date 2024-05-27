import '../../styles/nav.css';
import '../../styles/gallery-photos.scss';
import Nav from '../nav.js';
import { quotes} from '../Array/citation.js'; 

function Citation() {
 
    return (
        <>
            <Nav />

            <div className="container-publications-photos">
               
                { quotes.map((quote) => 
                    
                    <div key={quote.toString()} className="une-publication">
                        <img src={quote.image} alt='quote '/>
                        <p>{quote.quote.fr[0]}</p>
                        <p>{quote.auteur}</p>
                    </div>
                ) }

            </div>
        </>
    );
}

export default Citation;
