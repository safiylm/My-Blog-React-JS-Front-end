import '../../styles/App.css';
import '../../styles/esma-display.scss';
import video0 from "../../assets/Univers is Museum.mp4"
import Nav from "../nav";

function Superiority() {


    const esmalar = [

        {
            "nom": "Azîm",
            "signification_tr": ["Büyük, yüce, ulu demektir. Allah Teâlâ, zât ve sıfatları bakımından en büyüktür. Mutlak ve ekmel büyüklük Allah’a mahsustur. O, hiç bir şekilde âciz bırakılmayacak olan Kâdir-i mutlaktır. Akıl, O’nun büyüklüğünü idrâkten âcizdir."],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['superiority',]

        },

        {
            "nom": "Müteâlî",
            "signification_tr": ["Izzet, şeref ve hükümranlık bakımından en yüce demektir.",
                "Allah Teâlâ, yaratılmışlar hakkında aklın mümkün gördüğü her şeyden, her hal ve tavırdan yücedir. Zât, sıfat ve fiilleri açısından yaratılmışlara benzemekten, denk ve ortağı bulunmaktan yücedir."],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['superiority',]

        },
        {
            "nom": "Celîl",
            "signification_tr": ["Azamet ve ululuk sahibi demektir.Allah Teâlâ, bütün sınırlama ve benzerlikleri aşan bir yüceliğe sahiptir.Değer ve mertebece en yüce olandır.Mü’minleri yücelten, amellerini kabul edip mükâfâtlarını artırandır.O, zât, sıfat ve fiilleri itibariyle en büyüktür.O’nun büyüklüğü hacim itibariyle değildir; şân, şeref ve yücelik itibariyledir."],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['superiority',]

        },

    ];


    return (
        <div className="App">
            <Nav />

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

export default Superiority;
