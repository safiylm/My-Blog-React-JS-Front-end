
import '../../styles/nav.css';
import '../../styles/articles.scss';

function EtreSoiMeme() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Cesse d'imiter, Sois toi-même  </h1>
            <div className="d-none publication">

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

            <div className='article-texte-main'>
            "Nous sommes tous présents dans les histoires, mais il n'est pas nécessaire d'en être les héros.  
            <br /> <br />
Dans ces récits, il existe aussi des personnages qui vivent dans l'insouciance. Si l'on se concentre uniquement sur le héros, on ne trouve pas de changements à opérer en soi-même.  
<br /> <br />
Prends un moment pour regarder ta propre vie : combien de fois as-tu pensé : 'Que vont-ils dire si je fais cela ?' ou 'Je devrais agir ainsi pour qu'ils me jugent positivement.'  
<br /> <br />
Cela donne l'impression que nous vivons notre vie pour les autres. Mais pourquoi ne pas se demander plutôt : 'Si je fais cela, que dirait Dieu ?'  
<br /> <br />
L’**ikhlas** signifie : 'Ne prendre aucun témoin à part Allah.' Même ton ego ne doit pas être un témoin.  
<br /> <br />
Nous ne sommes pas nous-mêmes parce que nous avons cette envie de gonfler notre ego.  
<br /> <br />
Un homme regarde une série télévisée où il y a un héros qui combat les injustices, se bat contre ses ennemis avec courage, et finit par conquérir la plus belle femme. Il parle en aphorismes, avec des paroles pleines de sagesse.  
<br /> <br />
Le lendemain, il imite la façon de marcher, de regarder et de parler de cet acteur. Il n’est plus lui-même. D’autres deviennent des icônes, et il cherche à devenir cette image, puis une autre... un sportif, une célébrité...  
<br /> <br />
Au final, il réalise qu'il a cherché à être tout le monde sauf lui-même.  
<br /> <br />
Ne pas avoir de personnalité propre est une souffrance. Pourtant, si tu veux être différent, sois simplement toi-même. Tu n’as pas besoin de devenir quelqu’un d’autre, ta véritable différence réside dans ton essence.  
<br /> <br />
Si tu consacres l’énergie que tu perds à imiter les autres à découvrir ce qui est en toi, tu résoudras le problème.  
<br /> <br />
**Serdar Tuncer & Uğur Işılak : Cesse d’imiter, sois toi-même.**" </div>
        </>
    );
}

export default EtreSoiMeme;
