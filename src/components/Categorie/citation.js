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
            <h1>Citations </h1>
            <div className="container-publications-photos">



                {lang === "tr" && quotes.map((quote) =>

                    <div key={quote.toString()} className="une-publication">
                        <img src={quote.image} alt='quote ' />
                        <p className="description">{quote.quote.tr[0]}</p>
                        <p className="auteur">{quote.auteur}</p>
                    </div>
                )}

                {(lang === "en") && quotes.map((quote) =>

                    <div key={quote.toString()} className="une-publication">
                        <img src={quote.image} alt='quote ' />
                        <p className="description">{quote.quote.en[0]}</p>
                        <p className="auteur"> {quote.auteur}</p>
                    </div>
                )}
                {(lang === "fr" || lang == null) && quotes.map((quote) =>

                    <div key={quote.toString()} className="une-publication">
                        <img src={quote.image} alt='quote ' />
                        <p className="description">{quote.quote.fr[0]}</p>
                        <p className="auteur">{quote.auteur}</p>
                    </div>
                )}

            </div>
        </>
    );
}

export default Citation;
