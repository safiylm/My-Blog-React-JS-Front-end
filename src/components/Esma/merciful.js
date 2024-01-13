import '../../styles/esma-display.scss';
import video0 from "../../assets/Univers is Museum.mp4"
import Nav from "../nav";

function Merciful() {


    const esmalar = [
        {
            "nom": "Raûf",
            "signification_tr": ["Kullarına karşı ileri derecede merhamet ve şefkat sahibi olan Rauf. ",
                "Kullarının sıkıntılarını ortadan kaldıran Rauf.", "Allah kullarına akıl ve iyiyi kötüyü ayırt etme yeteneği vermiştir.",
                "Kullarını, işledikleri suçlardan dolayı hemen cezalandırmaz. Onlara hatalarından dönmesi için fırsat tanır. İnanan kullarının kusurlarını bağışlar, iyi amellerine fazlasıyla mükâfât verir."
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['merciful',]

        },
        {
            "nom": "Gaffâr",
            "signification_tr": ["Dâimâ affeden",
                "Ey kullarının günahlarını örten, ayıp ve kusurlarını bağışlayan; tekrarlanan günahları bağışlayan; mağfireti, bağışlaması sonsuz olan Gaffar.",
                "Ey kullarını tüm Mânevî kirlerden, günahlardan temizleyen Gaffar."],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['merciful',]

        },
        {
            "nom": "Afüvv",
            "signification_tr": [
                "Hiç bir sorumluluk kalmayacak şekilde günahları affeden demektir.",
                "Allah Teâlâ, günahları kökünden kazıyıp tamamen yok eder.Kirâmen kâtibin meleklerinin kayıtlarını siler.Hatırlayıp mahçup olmasınlar diye kullarına işledikleri günahları da unutturur.Bu isimden nasip alan kul, bir taraftan devamlı Allah’tan af diler, diğer taraftan ümitsizliğe kapılmaz.Kullara karşı da çok affedici olur.",
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['merciful',]

        },
        {
            "nom": "Tevvâb",
            "signification_tr": [
                "Tövbe eden kullarının tövbelerini kabul eden ve tövbede muvaffak kılan demektir.",
                "Allah Teâlâ, kullarını tövbeye sevkeden ve tövbelerini kabul edendir.Kendisine yönelen kullarının günahlarını affedendir.Tövbeleri kabul edip günahları bağışlayandır.Kul, işlediği günahlardan pişman olur, tövbeye yönelirse Allah onu tövbesinde başarılı kılar ve tövbesini kabul eder."],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['merciful',]

        },
        {
            "nom": "",
            "signification_tr": [],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['merciful',]

        },

    ];


    return (
        <div className="App">
        <Nav/>

            <h1>Esma ül Hüsna </h1>
            {esmalar.map((x) =>
                <div className="bir-esma" key={x.toString()}>
                    <div className="bir-esma-image" key={x.toString()}>
                        {x.photos.length == 0 ? <video src={video0} autoPlay /> : <img src={x.photos[0]} />}
                    </div>

                    <div className="bir-esma-texte" >
                        <h1>{x.nom}</h1>
                        {x.signification_tr.map((signification) =>
                            <p>{signification}</p>
                        )}

                        {x.tags.map((tag) =>
                            <a id="tag">{tag}</a>
                        )}
                    </div>

                </div>

            )
            }
        </div >

    );
}

export default Merciful;
