
import '../../styles/nav.css';
import '../../styles/articles.scss';

function EtreSoiMeme() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

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
                    "Hikayelerin içinde biz varız, hikayenin kahramanı olmak zorunda değiliz.",
                "Hikayenin gaflet içinde olan figurleride var.Gafil adamları alırım, oradan bakarım.",

                "Kahramanı alırsan kendinde değiştirecek bir şey bulamazsın.",

                "Bir dön hayatımıza bak, şöyle yaparsam “ne derler?” şunu şöyle yapim ki şöyle desinler.",
                "Sanki başkaları için yaşıyoruz hayatı. Peki şu “Şöyle yaparsam Allah ne der?”.",
                "İhlas : 'Allahtan gayrısını şahit tutmamak'.Nefsini dahil dahi etme.",
                "Kendimiz olmama sebebimiz nefsimizi büyük gösterme arzusu.",

                "Adam bir dizi izliyor orada bir kahraman var, kötüleri yok ediyor, bir kötülük olduğu zaman onu oradan kaldırıyor.Düşmanlarla müthiş şekilde savaşıyor, filmin en güzel kızıyla beraber olabiliyor, konuştu herşey aforizma şeklinde.",

                " Ertesi gün yürüyüşü de o aktor, bakışıda o aktor, konuşması da ona benzetmeye çalışıyor, kendisi yok ortada.Başka bir şey ikon haline geliyor ondan sonra o olmaya başlıyor derken bir başkası, derken bir başka moda ikonu, bir futbolcu vs ....derken bir bakmışsın hayat bitmiş.Gelmiş diyor ki 'Herkes oldum da bir kendim olamadım'.",
                " Bu çok acı bir şey şahsiyetin oturmaması.Oysaki farklı görünmek istiyorsan kendin ol, başka biri olmana gerek yok, farklılık senin özünde.Başkasına benzeme için harcadığın o enerjiyi benim içimde neler var diyerek bir kere yönlendiren, dışarı için harcadığın enerji onda birini yöneltmiş olsan mevzu hallolacak.Serdar Tuncer & Uğur Işılak : Bırak taklidi, kendin ol."
          
                    </ul>
                </div>
            </div>
        </>
    );
}

export default EtreSoiMeme;
