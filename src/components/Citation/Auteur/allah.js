import '../../../styles/auteur-display.scss';
import '../../../styles/citation.scss'
import Nav from "../../nav"

const quotes = [
   
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Ey Ademoğlu! Beni sevmek istersen dünya sevgisini kalbinden çıkar, çünkü benim muhabbetimle dünya sevgisini bir kalbde asla cem etmem. Ey Ademoğlu! Benim sevgimle beraber dünya sevgisini nasıl istersin! Öyle ise, benim sevgimi ve rızamı, dünyayı [dinin yasakladığı şeyleri] terk etmekte ara! Ey Ademoğlu! Her işini benim emirlerime uygun olarak yap, ben de, senin kalbine muhabbetimi doldururum.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": " Beni zikreden [hatırlayan] kulumla birlikteyim. ",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Ey dünya! Bana hizmet edene hizmetçi ol! Sana hizmet edene güçlük göster! ",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Ey kulum! Seni kendim için yarattım. Başka şeylerle oyalanma! Rızkına kefilim, kendini üzme! ",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Kulum, beni nasıl umarsa, onu öyle karşılarım. Öyle ise, benden hep iyilik bekleyin!",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Rahmetim gadabımı aşmıştır. Hasta kulumun günahını affeyledim! ",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": " Kaza ve kaderime razı olmayan, beğenmeyen ve gönderdiğim belalara sabretmeyen, benden başka Rab arasın! Yeryüzünde kulum olarak bulunmasın! ",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Yere ve göğe sığmam, fakat mümin kulumun kalbine sığarım ",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Dostlarımı insanlar içinde gizlerim, onları kimse bilmez.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    },
    {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Bir kulum bana yaklaşırsa [sevgime ve rızama kavuşursa, ona sesleri duyurur ve saklı şeyleri gösteririm.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    }, {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Ey Resulüm! İbrahim Hâlilim [dostum] ise de, sen de Habibimsin [sevgilimsin].",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    }, {
        "auteur": "Hadis-i kudsi",
        "quote_tr": "Ya Adem! Muhammed aleyhisselamın ismiyle, her ne isteseydin kabul ederdim, Muhammed olmasaydı, seni yaratmazdım.",
        "quote_fr": "",
        "quote_en": "",
        "photos": [],
        "tags": ['',]
    }, 

];




function Hadisikudsi() {
    return (
        <>
            <Nav />
            <div className='page-quotes'>
                <h1>Hadis-i kutsi </h1>

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

export default Hadisikudsi;