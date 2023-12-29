import '../../../styles/auteur-display.scss';
import '../../../styles/citation.scss'
import Nav from "../../nav"

const quotes = [
    {
        "auteur": "Rumi",
        "quote_tr": "Kendini yalnız hissetme, tüm evren senin içinde.",
        "quote_fr": "",
        "quote_en": "Do not feel lonely, the entire universe is inside you.",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Sevenler en sonunda bir yerlerde buluşmazlar. Onlar en başından beri birbirlerinin içindedir. Bütün mesafeler yürekte başlar.",
        "quote_fr": "",
        "quote_en": "Lovers don’t finally meet somewhere. They’re in each other all along.",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_en": " “There are a thousand ways to kneel and kiss the ground; there are a thousand ways to go home again.”",
        "quote_fr": "",
        "quote_tr": "Eğilip yeri öpmenin binlerce yolu var, Yeniden eve dönmenin binlerce yolu.",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Sesini değil sözünü yükselt! Yağmurlardır yaprakları büyüten gök gürültüleri değil.",
        "quote_fr": "",
        "quote_en": "“Raise your words, not voice. It is rain that grows flowers, not thunder.”",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Sopayla kilime vuranın gayesi, kilimi dövmek değil, tozunu almaktır. Allah sana sıkıntı vermekle tozunu, kirini alır. Niye kederlenirsin?",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },

    {
        "auteur": "Rumi",
        "quote_tr": "İki parmağının ucunu gözüne koy. Bir şey görebiliyor musun dünyadan? Sen göremiyorsun diye bu alem yok değildir.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },

    {
        "auteur": "Rumi",
        "quote_tr": "Önemli olan seni tamamlayacak ruhu bulmandır. Her Peygamberin verdiği öğüt aynıdır. Sana ayna olacak insanı bul.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },

    {
        "auteur": "Rumi",
        "quote_tr": "Gönül hissetmezse kulak duymuş neylesin, kalp sevmedikçe el dokunmuş neylesin.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },

    {
        "auteur": "Rumi",
        "quote_tr": "Aradığın seni arayandır.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },

    {
        "auteur": "Rumi",
        "quote_tr": "Unutma, sır gibi seversen eğer muradın gerçekleşir çünkü tohum toprağa gizlenirse yeşerir.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Aşk davaya benzer, cefa çekmek de şahide. Şahidin yoksa davayı kazanamazsın ki.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Dertsiz dua soğuktur. Dertliyken yapılan dua gönülden kopar.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Nasibinde varsa alırsın karıncadan bile ders. Nasibinde yoksa bütün cihan önüne serilse sana ters.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "İyiyi ara, doğruyu ara, güzeli ara fakat kusuru arama.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Kötülük yaptın zaman kork çünkü o bir tohumdur. Allah yeşertir, karşına çıkartır.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Bitkinin güzelliği tohumun iyiliğinden, insanın güzelliği ise kalbinden gelir.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Edep aklın tercümanıdır. Herkes edebi kadar akıllı, aklı kadar şerefli, şerefi kadar değerlidir.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },

    {
        "auteur": "Rumi",
        "quote_tr": "Eğriyi kendinde arayan doğruyu kalbinde bulur.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },

    {
        "auteur": "Rumi",
        "quote_tr": "Akıl bir kuzu, nefîs bir kurt, iman ise çobandır. İman kuvvetli olmazsa nefîs aklı yer.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Birini tanımadıysan kimin ve neyin peşinde olduğuna bak! Anlarsın…",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Kapalı kapı yoktur yanlış anahtar vardır.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Sen böyle güzelken bana söz düşmez. Bakma böyle yazılar yazdığıma, ben aslında 'Oku!' emrine amade seni okuyorum sevgili.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Bırakacağın eli hiç tutma, tutacağın eli isе hiç bırakma. Sahte sevgilere gül olmaktansa, gerçek sevgilere diken ol!",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Minareden düşenin parçası bulunur, bulunur da; Gönülden düşenin parçası bulunmaz. ",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Ey Gönlümün sol yarısı, Aklıma koydum seni, aklım almadı. Yüreğime bıraktım, sana doymadı.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Rumi",
        "quote_tr": "Unutma; senin için başkasından vazgeçen, bir gün mutlaka başkası için senden vazgeçer.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },


];




function Mevlana() {
    return (
        <>
            <Nav />
            <div className='page-quotes'>
                <h1>Mevlana  </h1>

                <h2>Biography</h2>
                <p style={{ "width": "1000px", "margin": "10px auto 50px auto", "font-size": "20px", "lineHeight": "40px" }}>
                    “What you seek is seeking you.” Rumi, originally known as Jalāl ad-Dīn Muhammad Rūmī, was a 13th-century evergreen and ever-famous Persian poet, Islamic scholar, Sufi mystic, and Hanafi faqih. He was born on September 30, 1207, in the region of Balkh in Afghanistan and died on December 17, 1273, in Konya, Turkey. He was entitled Mevlana/Mewlana or Mevlevi/Mawlawi which means (our master or my master). Revered as a great poet and spiritual master, his musings on life, love, Sufism, and the mysteries of our universe are loved by many! Here we bring you the best Rumi quotes that will transform your view on life, love, and the world itself.
                </p>

                <h2>Citation</h2>
                <div className='div-citation'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4-qJyni7Vaeypf1o0D9oDTNnOTYWoONczA&usqp=CAU" id="one-quote-image" />

                    <ol>
                        {quotes.map((quote) =>
                            <li key={quote.toString()}>
                                {quote.quote_tr} </li>
                        )}
                    </ol>
                </div>
            </div>
        </>

    );
}

export default Mevlana;