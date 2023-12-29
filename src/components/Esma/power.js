import '../../styles/App.css';
import '../../styles/esma-display.scss';
import video0 from "../../assets/Univers is Museum.mp4"
import Nav from "../nav";

function Power() {


    const esmalar = [{
        "nom": "Kadir",
        "signification_tr": ["Allah Teâlâ, istediğini, istediği gibi yapmaya gücü yetendir. Her şeyi takdir eden, planlı ve ölçülü yapandır. Hiçbir şey O’nu âciz bırakamaz.  lem, mutlak irâde ve kudrete sahip olan Allah tarafından yaratılmıştır."],
        "signification_fr": ["Allah Tout-Puissant a le pouvoir de faire tout ce qu'Il veut. C'est celui qui apprécie tout et fait tout de manière planifiée et mesurée. Rien ne peut le neutraliser. L'univers a été créé par Allah, qui a la volonté et le pouvoir absolus."],
        "signification_en": ["Allah Almighty has the power to do whatever He wants. He is the one who appreciates everything and does everything in a planned and measured manner. Nothing can incapacitate Him. The universe was created by Allah, who has absolute will and power."],
        "photos": [],
        "tags": ['power',]
    },
    {
        "nom": "Muktedir",
        "signification_tr": ["Kuvvet ve kudret sahipleri üzerinde istediği gibi tasarruf edendir. ",
            " O’nun “Kâdir” oluşu, istediğini, istediği anda ve istediği şekilde yaratma gücüne sahip olması demektir. “Muktedir” olması ise, bilfiil (eylemi yaparak) gücünü yarattıklarında göstermesidir."
        ],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['power',]

    },
     {
            "nom": "Azîz",
            "signification_tr": ["Yenilmesi mümkün olmayan gâlip; dengi ve benzeri bulunmayacak şekilde değerli ve şerefli; güçlü ve yenilmez demektir. Allah Teâlâ yegâne güç ve kuvvet sahibi olan mutlak gâliptir. O’nu âciz bırakacak hiç bir güç yoktur. Dilediğini izzetli, şerefli ve üstün kılar."],
            "signification_fr": [],
            "signification_en": [],
            "photos": [],
            "tags": ['power',]

        },
    {
        "nom": "Samed",
        "signification_tr": ["Her şeyin kendisine muhtaç olduğu, kendisinin hiç bir şeye muhtaç olmadığı; ihtiyaçların giderilmesi ve ızdırapların dindirilmesi için başvurulacak tek merci demektir."],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['power', 'superiority']

    },

    {
        "nom": "Kaviyy",
        "signification_tr": [
            "Tam bir kudret sahibidir. Gücü, kuvveti sonsuzdur; bitmez, tükenmez. Bir sınıra sığmaz, ölçüye gelmez. Nicelik ve nitelik bakımından üstün kudrete sahiptir.",
            "Ey Gücünün yetmeyeceği bir şey olmayan Kaviyy. O, her şeyi etkiler, ama hiç bir şey O’nu etkileyemez."
        ],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['power',]

    }
        , {
        "nom": "Metin",
        "signification_tr": ["Allah Teâlâ, sonsuz bir güce sahiptir. Fiillerinden dolayı zatına herhangi bir zorluk ve yorgunluk ilişmez. Kuvveti azalıp gevşemez. Hiçbir şey O’nu âciz bırakamaz. Hiç kimsenin yardımına da muhtaç değildir. Allah’ın “Kaviyy” ismi, kudretinin kemâlini ifâde eder. Bütün nesne ve olayları etkileyendir. (Kapsamlı)",
            "“Metîn” ismi, kuvvetinin şiddetini bildirir. Dıştan gelebilecek hiç bir etkiyi kabul etmeyendir."
        ],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['power',]

    }

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
