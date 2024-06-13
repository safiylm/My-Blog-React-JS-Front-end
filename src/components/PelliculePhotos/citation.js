import '../../styles/nav.css';
import '../../styles/gallery-photos.scss';
import Nav from '../nav.js';
import { quotes } from '../Array/citation.js';

function Citation() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')
    console.log(lang)
    return (
        <>
            <Nav />

            <div className="container-publications-photos">

                {lang == "fr" && quotes.map((quote) =>

                    <div key={quote.toString()} className="une-publication">
                        <img src={quote.image} alt='quote ' />
                        <p>{quote.quote.fr[0]}</p>
                        <p>{quote.auteur}</p>
                    </div>
                )}

                {lang == "tr" && quotes.map((quote) =>

                    <div key={quote.toString()} className="une-publication">
                        <img src={quote.image} alt='quote ' />
                        <p>{quote.quote.tr[0]}</p>
                        <p>{quote.auteur}</p>
                    </div>
                )}

                {(lang == "en" || lang == null ) && quotes.map((quote) =>

                    <div key={quote.toString()} className="une-publication">
                        <img src={quote.image} alt='quote ' />
                        <p>{quote.quote.en[0]}</p>
                        <p>{quote.auteur}</p>
                    </div>
                )}

            
            </div>
        </>
    );
}

export default Citation;
