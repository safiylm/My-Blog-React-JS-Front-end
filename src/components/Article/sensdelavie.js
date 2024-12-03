import '../../styles/nav.css';
import '../../styles/articles.scss';

function SensDeLaVie() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Le sens de la vie </h1>
            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'un salon minimaliste" src="https://images.pexels.com/photos/2147487/pexels-photo-2147487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className="publication-txt">

                    <h2 className="titre"></h2>

                    "Ô cœur ! Où mène ce voyage ?" a dit le poète.  <br />
                    Dans ce voyage de vie que tu as entrepris, as-tu déjà réfléchi aux pas qui te guident ? <br />
                    Sur quel itinéraire marches-tu, vers quel objectif te diriges-tu ? <br />
                    Tout cet effort, tout ce temps, toute cette énergie que tu investis, pour quoi au juste ? <br />
                    Pouvoir t’arrêter pour réfléchir longuement à ces questions est d'une grande valeur... <br />
                    Car il y a un sens, aussi bien dans ce que tu as vécu que dans ce que tu n’as pas vécu. <br />
                    L'important, c'est d'être conscient de ce que tu as choisi et de ce que tu as laissé de côté."
                    <br />
                    "Je te souhaite de chercher en toi tout ce dont tu ressens l'absence."<br />

                    "L'être humain est bien plus que matière ; c'est le sens qui prime. La valeur d'une personne ne se mesure pas aux palais qu'elle possède, mais à la profondeur de ses pensées."

                    {/* "Ey gönül! Bu yolculuk nereye? Demiş Şair. Çıktığın bu yaşam yolculuğunda attığın adımlar seni nereye götürüyor. Düşündün mü hiç? Hangi güzergâh üzerinden, hangi hedefe doğru yürüyorsun? Bunca çaban, bunca emeğin ve bunca zaman boyunca zaman sarf ettiğin güç aslında ne için? Bu sorular üzerinde durup uzan uzadıya düşünebiliyor olman çok değerli... Çünkü yaşadıklarının da yaşamadıklarının da aslında bir anlamı var... Sen yeter ki seçtiklerinin ve seçmediklerini farkında ol.",
                    "Yokluğunu hissettiğin her şeyi kendinde aramanı dilerim.",
                    "İnsan maddeden öte manadır. İnsanların değeri sahip oldukları saraylar değil düşüncelerindeki derinlikler belirler." */}

                </div>
            </div>
        </>
    );
}

export default SensDeLaVie;
