import '../../styles/nav.css';
import '../../styles/lifestyle.scss';
import Nav from '../nav';


function EffortEtResultat() {

    return (
        <>
            <h1>Developpement  </h1>
            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'un salon minimaliste" src="https://images.pexels.com/photos/2147487/pexels-photo-2147487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className="publication-txt">

                    <h2 className="titre"></h2>
                    <ul>
                        {/* <li>
                            Büyük bir sabırsızlıkla acelecilik içinde yaşayan günümüzün insanı.
                            kolay öğrenmenin peşinde artık. Dinlemeden öğrenmeye çalışıyor, anlamadan uygulamak istiyor, uygular uygulamaz hemen kazanabilmenin hayalini kuruyor. Ne beyhude bir hayal, ne yersiz bir beklenti
                            İnsan zihninde yazık ki her olayda sonuç odaklı çalışıyor. Sürecin hiç ama hiçbir önemi yok… Oysa hayat bile sürece meftun bir yol... Nasıl öleceğin bile yolu yürüyüş biçimine bağlı. Hayatı nasıl yaşadığının bir önemi var….
                            Sonuç tek başına bir hedef olamaz... Süreç de sonuca dahildir çünkü insan zaten yoldayken büyür, final çizgisinde birden bire gelişmez. O final ipini göğüsleyip ustalıklarıyla zirvelere çıkanlar da uzun yollar boyunca büyüyüp gelişerek geldiler. Zirvede birden bire çiçek açmadılar.
                            Demem o ki, ustalık yolunda acelecilik, en büyük handikaptır… Hatta en büyük düşman… Yürümediğiniz yolun seyyahı olamazsınız. İçinde bulmadığınız deniz hakkında konuşamazsınız. Issızlığında kaybolmadığınız çölü kimseye anlatamazsınız. Hem zaten anladığınızı da hiç kimse inanmaz…
                        </li> */}

                        <li>
                            <strong>L’homme moderne, qui vit dans une grande impatience et précipitation</strong>, cherche désormais à apprendre facilement. Il essaie d’apprendre sans écouter, veut appliquer sans comprendre, et rêve de gagner immédiatement dès qu’il applique. Quelle vaine illusion, quelle attente infondée !
                            Hélas, <strong>l’esprit humain est focalisé sur le résultat dans chaque situation</strong>. Le processus n’a aucune, mais vraiment aucune importance… Pourtant, la vie elle-même est un chemin attaché au processus…
                            Même la manière dont tu mourras dépend de la façon dont tu marches ce chemin. La façon dont tu vis ta vie a de l’importance…
                            <strong> Le résultat ne peut pas être le seul objectif… Le processus fait aussi partie du résultat, car l’être humain grandit en chemin,
                                il ne se développe pas soudainement à la ligne d’arrivée. Ceux qui franchissent la ligne d’arrivée et
                                atteignent les sommets avec leur expertise y sont parvenus en grandissant et en se développant au cours de longs chemins. </strong>
                            Ils n’ont pas fleuri soudainement au sommet.
                            Ce que je veux dire, c’est que l’impatience est le plus grand obstacle sur le chemin de la maîtrise… voire le plus grand ennemi…
                        </li>
                        <li>
                            Vous ne pouvez pas être un voyageur d’un chemin que vous n’avez pas parcouru.
                            Vous ne pouvez pas parler d’une mer dans laquelle vous n’avez pas plongé.
                            Vous ne pouvez raconter à personne un désert dans lequel vous ne vous êtes pas perdu.
                            Et d’ailleurs, personne ne croirait ce que vous prétendez avoir compris…

                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default EffortEtResultat;