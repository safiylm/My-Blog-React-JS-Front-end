import '../../styles/esma-display.scss';
import video0 from "../../assets/Univers is Museum.mp4"
import Nav from "../nav";

function Power() {


    const esmalar = [
        {
            "nom": "Kerim",
            "signification_tr": ["ihsânı, in’âmı, lütfu, keremi bol olan, sonsuz cömert demektir.",
                "Allah Teâlâ, her türlü faziletin sahibidir. Hiç bir karşılık beklemeden verendir. Yardımı ve ikrâmı sonsuz ve sınırsızdır. Muktedirken, affedendir. Va’dini yerine getirendir. Kendisine sığınanı yüz üstü bırakmayandır. Az da olsa işlenen iyi ameli kabul eden, karşılığını fazlasıyla verendir. Bu isimden nasip alan kul, cimriliğin her çeşidinden kurtulur. Allah’ın kendisine verdiği nimetleri diğer kullarıyla paylaşmasını bilir. Şahsiyetini zedeleyecek her türlü rezillikten kurtulur."
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },

        {
            "nom": "Vehhab",
            "signification_tr": ["Allah Teâlâ, bağışı çok olandır, karşılıksız verendir, nimetlerinin ardı arkası kesilmeyendir. İnanan inanmayan ayırımı yapmaksızın bütün kullarına nimetlerini bol bol verendir. Rahmeti gereği lütfu bol olan ve hayırlı işlerde başarıya ulaştırandır.",

            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },


        {
            "nom": "Nâfi",
            "signification_tr": ["Fayda veren; dilediği kuluna hayırlı ve faydalı olanı veren demektir.",
                "Allah Teâlâ, zararlı gibi görünen her şeyi sezilmez yollarla faydalı hale getirendir. Çaresizlerin imdadına yetişendir. Kulunu hayra ve iyiliğe yöneltendir."
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },

        {
            "nom": "Selâm",
            "signification_tr": ["Her türlü eksiklikten, ayıptan, kusurdan, değişim ve yok oluştan münezzeh ve sâlim olan",
                "Kullarını her türlü kötülüklerden, tehlikelerden selâmete çıkaran; Cennetteki kullarına selam veren demektir."
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },
        {
            "nom": "Mümin",
            "signification_tr": ["Güven veren, va’dine güvenilen; inananları korku ve endişeden güvende kılan; mü’minlerin îmân ve samimiyetini tasdik eden; mûcizeler vermek suretiyle Peygamberlerinin doğruluğunu isbatlayan; kendisine sığınanları koruyan, emniyetle rahatlandıran demektir.",
                "Allah’ın kullarına en büyük nimetlerinden biri, îmândır.Diğeri, emniyettir.İnsan; canı, malı, ırzı, namusu için her zaman bir endişe ve korku içinde kalsaydı, bu ne büyük bir azap olurdu.Bu isim bir kulda tecellî edince, o kulun kalbine imân iyice yerleşir.O, güvenilir biri olur.Allah Teâlâ, mü’min isminin bir tecellisi olarak inananları korkulardan güvende kılıyor."
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },


        {
            "nom": "Hadi",
            "signification_tr": ["Hidayet veren. Kulunu muradına erdiren. Kulluğu hayırlı yollara muvaffak kılan. Inanacak kalplerde hidâyeti yaratan. Ebedî mutluluğu sağlayacak doğru yolu gösteren ve doğru yola ulaştıran. Yolunu şaşırmışlara rehberlik eden Hadi. "],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },
        {
            "nom": "Mâcid",
            "signification_tr": ["şânı ve kadri büyük; kerem ve cömertliği bol demektir. Allah Teâlâ, yardımı, ihsânı bol olandır. O’nun kullarına olan kerem ve cömertliği ifâdeye sığmaz, ölçüye gelmez. Bir taraftan kullarını iyi işler yapmaya muvaffak kılar, öbür taraftan onları güzel sıfatlara sahip olduklarından över.",
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },

        {
            "nom": "Reşîd",
            "signification_tr": ["Irşad eden; doğru yolu gösteren demektir.",
                "Allah Teâlâ, bütün işleri isabetli olan ve hedefine ulaşandır. Her şeyi ezelî takdirine göre yürüten, bir nizam ve hikmet üzere sonuna ulaştırandır. Lüzumsuz, faydasız, boş iş yapmayandır. Fiilleri dâimâ yerinde olandır. Devamlı olarak hakka isabet edendir. Hiç kimsenin yol göstermesine muhtaç olmayandır."
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },
        {
            "nom": "Nûr",
            "signification_tr": ["Nurlandıran, ışık veren, nur kaynağı; âlemleri nurlandıran; istediği simalara, zihinlere ve gönüllere nur yağdıran demektir.",
                "Allah Teâlâ, varlığı apaçık olandır. Nuru yaratan, onunla gökleri ve yeri aydınlatandır. Kulunun kalbini, gönlünü îmân nuruyla aydınlatarak hidâyete ermesini ve doğruyu bulmasını sağlayandır."
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },
        {
            "nom": "Mucib",
            "signification_tr": ["Kendine yalvaranların isteklerini veren; kullarının dileklerine ve dualarına karşılık veren demektir.",
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
        },
        {
            "nom": "Fettah",
            "signification_tr": ["Kendine yalvaranların isteklerini veren; kullarının dileklerine ve dualarına karşılık veren demektir.",
                "Bir şeyi açmak, (iyilik kapılarını açan) ",
                "taraflar arasında hüküm vermek, (bütün anlaşmazlıkların nihaî hakemliğini yapmak suretiyle mutlak adaleti gerçekleştiren, hak ile bâtılı birbirinden ayırıp durumu açıklığa kavuşturan)",
                "birine yardım edip zafere ulaştırmak! » (mazlumlara yardım edip mümin kullarına zafer veren) ",
                "Ey müşkülleri kolaylaştıran Fettah. ",
                "Ey bu yaşadığımız bütün sıkıntılardan feraha çıkaran Fettah. ",
                "Ey kuluna bütün iyilik kapılarını açan Fettah. ",
                "Ey zulme uğrayanları zalimin elinden kurtaran Fettah.  ",
                "Ey zafer yolunun Kendisinde (cc) olan Fettah. ",
                "Ey mümin kullarını zafere ulaştıran Fettah. "
            ],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['generous',]
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

export default Power;
