import '../../styles/nav.css';
import '../../styles/articles.scss';
import Nav from '../nav';
import ph3 from '../../assets/ph3.jpg'


function Subconscient() {

    return (
        <>
            <h1>Sous conscience </h1>

            <div className="publication">
                <div className="publication-image">
                    <img alt="photo d'une famille" src="https://images.pexels.com/photos/20513314/pexels-photo-20513314/free-photo-of-osorno-sunset.jpeg" />
                </div>

                <div className="publication-txt">

                    <ul>
                        {/* "Bilinçaltı gördüğüne çok çabuk ikna olur. Sürekli gördüğü şeyi de bilinç düzeyinde hakikate dönüştürür. Gördüğünü var etmeye başlarsın. Bilinç düzeyinde izlediğin şeye dönüşeceksin. Çevrenin düşünce şekli, yaşam biçimi, vizyonu, alışkanlıkları seni etkileyecektir. Hayata bakışını yeniden şekillendirecektir. Böylece bilincin yeniden kurgulanacaktır.",
                        "Tam da bu yüzden: “Kiminle gezdiğine, kiminle arkadaşlık yaptığına dikkat ettin. Çünkü bülbül güle, karga çöplüğe götürür.” demiş Mevlâna. Yine tam da bu yüzden, insan ne izlediğini, ne dinlediğini iyi seçmeli, çünkü onlarla içeriyi besliyoruz. Bu seçimler belirliyor ilerideki olacağımız kişiyi.",
                        "Etrafındaki ailen, dostların, arkadaşların, komşuların, temas ettiklerin, küçük gibi görünen geniş bir kalabalıklar topluğu var ve onlarda senin gelişim sürecine dahildirler. Bu yolculukta etrafındaki hiçkimse yok sayamazsın. Çünkü sen onların sözlerini işittin aklına taktın, etkilendin ve onların sözlerine göre şekil aldın. Dolayısıyla şimdiki sen de onların da bir payı var. Sufiler terbiye sürecinden geçerken bir konu üzerinde uzunca dururlar ve şöyle derler : Sen aslında sana söylenenlersin."
                        <br /> <br />*/}
                        <li>
                            Le subconscient est rapidement influencé par ce qu'il perçoit. Il transforme ce qu'il voit et entend chaque jour en réalité, et ainsi, vous changez. Vous devenez ce que vous regardez et ce que vous écoutez quotidiennement.
                        </li>

                        <li>La façon de penser de votre entourage, leur style de vie, leur vision ainsi que leurs habitudes vous affecteront. Cela modèle votre vision de la vie. Ainsi, votre conscience est construite. 
                            C’est exactement pourquoi vous devez faire attention à vos fréquentations
                            « Vous devez faire attention avec qui vous voyagez et avec qui vous vous liez d’amitié. Parce que le rossignol mène à la rose et le corbeau mène à la décharge. dit Mevlana.
                        </li>
                        <li>
                            Nous devons choisir avec soin ce que nous regardons et ce que nous écoutons, car nous nous nourrissons d’eux. Ces choix déterminent la personne que nous devenons.
                            Notre entourage est également inclus dans votre processus de développement. Vous ne pouvez ignorer personne autour de vous.
                            Parce que vous avez entendu leurs paroles, vous y avez pensé, vous avez été influencé par elles et vous avez pris forme selon leurs paroles.
                            Par conséquent, "vous êtes réellement ce qu'on vous dit".
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Subconscient;