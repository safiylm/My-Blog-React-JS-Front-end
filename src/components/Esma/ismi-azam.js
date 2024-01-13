import '../../styles/esma-display.scss';
import video0 from "../../assets/Univers is Museum.mp4"
import Nav from "../nav";

function IsmiAzam() {


    const esmalar = [
    {
        "nom": "Rahman",
        "signification_tr": [],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },

    {
        "nom": "Rahim",
        "signification_tr": [],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },

    {
        "nom": "Kuddüs",
        "signification_tr": [],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },
    {
        "nom": "Adl",
        "signification_tr": [],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },
    {
        "nom": "Hakem",
        "signification_tr": [],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },
    {
        "nom": "Ferd",
        "signification_tr": [],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },

    {
        "nom": "Vahid",
        "signification_tr": [],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },

    {
        "nom": "Ehad",
        "signification_tr": [],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },
    {
        "nom": "Hayy",
        "signification_tr": ["Sonsuz hayat sahibi.", "Hayat veren."],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },
    {
        "nom": "Kayyum",
        "signification_tr": ["Ayakta tutan, devamını sürdüren.", "Balantılar."],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
    },
    {
        "nom": "Zel Celali Vel Ikram",
        "signification_tr": ["Celâl ismi, azamet sahibi, büyük, yüce ve her türlü noksandan münezzeh olmak anlamındadır. Tıpkı El-Müntakım, El-Kahhâr, El-Cebbâr ve El-Azîz isimleri gibi ilâhî gazabı ifade eden esmâ-i hüsnâdan biridir.",
            "Hiçbir karşılık beklemeden vermek, ihsan etmek anlamındaki kerem kökünden gelen ikrâm ise Cenâb-ı Hakk’ın sonsuz iyilik ve kerem sahibi olduğunu ifade etmektedir ve El-Kerîm, Es-Settâr, Er-Raûf, Er-Rahîm, El-Gaffâr gibi Allah Teâlâ’nın rahmet ve sevgisini (cemâlini) ifade eden esmâ-i hüsnâdan biridir.",
            "Zira celâl ismi selbî sıfatların hepsini, ikrâm ise sübûtî sıfatların tamamını ifade etmektedir. İşte bu sebeple bazı âlimler zü’l-celâli ve’l-ikrâmın ism-i âzam olduğu kanaatine varmışlardır. Resûl-i Kibriyâ Efendimiz’in “Yâ ze’l-celâli ve’l-ikrâm duasını ihmâl etmeyip sık sık söyleyiniz” buyurmasının hikmeti bu noktada daha bir anlam ve derinlik kazanmaktadır."
        ],
        "signification_fr": [],
        "signification_en": [],
        "photos": [],
        "tags": ['Ismi Azam',]
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

export default IsmiAzam;
