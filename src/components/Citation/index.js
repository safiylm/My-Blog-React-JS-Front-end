import '../../styles/App.css';
import '../../styles/citation.scss';
import Nav from "../nav";
import Auteurs from "./Auteur/index"
function Citation() {
    return (
        <>
            <Nav />
            <div className='div-citation'>

                <h1>Des Citations </h1>
                <ol>
                <img src="https://blog.hubspot.com/hs-fs/hubfs/famous-quotes-rand.webp?width=1300&height=928&name=famous-quotes-rand.webp" />

                    <li> "Winning isn't everything, but wanting to win is." -Vince Lombardi</li>
                    <li>"Whether you think you can or you think you can't, you're right." -Henry Ford</li>
                    <li>"Be yourself; everyone else is already taken." -Oscar Wilde</li>
                    <li>""In three words I can sum up everything I've learned about life: it goes on." -Robert Frost"</li>
                    <li>"In the end, it's not the years in your life that count. It's the life in your years." -Abraham Lincoln"</li>
                    <li>Dert etme, bak ne diyor Rahman; 'Allah bilir siz bilmezsiniz.' - Bakara, 216</li>
                    <li>Derdimi dinledim derdimden iğrendim. Onun derdini gördüm derdime imrendim. - Hz. Mevlana</li>
                    <li>Var mı kardeşim Allah'tan başka ilah, yakın bir dost? Ağlayacak omuz arama bulamazsın. Koşsana seccadene, Alemlerin Rabb'ine anlatsana derdini. Dinlemez mi sanıyorsun? Dert veren derman vermez mi bilmiyor musun?</li>
                    <li>Sevgili olmak, dost olmaktır; Dert ortağı olmak, birlikte gülmek, birlikte ağlamaktır.. Yani sevgili olmak tek hayatı, iki kişi yaşamaktır...</li>
                    <img src="https://blog.hubspot.com/hs-fs/hubfs/best-quotes-winfrey.webp?width=1300&height=940&name=best-quotes-winfrey.webp"/>
                </ol>
            </div>
            <Auteurs/>
        </ >
    );
}

export default Citation;