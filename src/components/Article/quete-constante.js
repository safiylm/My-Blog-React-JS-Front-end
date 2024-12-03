import '../../styles/nav.css';
import '../../styles/articles.scss';

function QueteConstante() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Mon Monde intérieur</h1>
            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'un salon minimaliste" src="https://images.pexels.com/photos/2147487/pexels-photo-2147487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className="publication-txt">

                    <h2 className="titre"></h2>
                    <ul>
                    " Hayat bir arayış, hem de sürekli. Sürekli olduğu kadar da bilinmeyen.",
                "Bazen ümitli, bazen de ümitsiz.",
                "Bazen yavaş yavaş, bazen hırçın bir dalga gibi duvarlara çarpa çarpa....",
                "Kimse bulunduğu durumdan memnun değil.",
                "Malı, makamı olsun olmasın herkes arıyor.",
                "Zenginler, fakirler, güçlüler, güçsüzler, iyiler, kötüler.",
                "İnsanlar arıyor. Ama neyi? Bilmiyoruz. Çünkü bulduğumuz her şeyde, ulaştığımız her yerde aradığımızın o olmadığı ortaya çıkıyor. Tatmin olmuyoruz. Heyecan, ulaşana kadar sürüyor. Ulaşınca da sönüyor. Yeniden başka bir şeyi aramaya başlıyoruz.",
                "Sanki içimizde bir kara delik var. Bütün finaller sıkıcı, bütün elde etmeler sıradan gibi. Ona yürürken ki heyecanı hiçbir sahip olma durumu karşılamıyor. Kendimize dediğimiz gibi:",
                "-İşte bu, bu kişiyle birlikte olursam her şey yoluna girecek...",
                "-Evet, müdür olmak benim için bir dönüm noktası.",
                "-Şu dersi bir vereyim, önümde hiçbir engel kalmayacak..",
                "-Bıktım bunların bana karışmasından, eve çıkayım, hayata yeniden başlayacağım....",
                "İçimizde ciddi bir boşluk var ve bunu doldurmak için arayıp duruyoruz. Bir hastalık gibi. Bir salgın gibi. Doğuştan herkesin sahip olduğu bir içgüdü gibi. Ve hiçbir şey bize doyumu yaşatamayacak gibi...",
                "Aramaktan sıkılmamamızın sebebi de hiç boş kalmıyoruz, sürekli önümüze yeni bir şey geliyor ve onu aramaya başlıyoruz.",
                "Sevgili Fesleğen, ne arıyorsun? Doğru yerde mi ağrıyorsun, yoksa olduğun yerde mi? Ne aradığını bilmiyor musun? Bilmiyorsan, nasıl bulabilirsin?",
                "Sanıyoruz ki bu kapının anahtarı para, prestij, saygınlıkta. Paralı insanlar aramıyor mu? Saygın, prestijli insanlar aramıyor mu? Etrafına bak, gazetelere, televizyonlara, haberlere bak, herkes arıyor, herkes mutsuz. Demek ki anahtar onlar değilmiş. Başka bir şey olmalı. Artık seni doyurabilecek, lezzeti tattıkça bitmeyecek.",

                " Herkes arar ama herkes bulamaz fesleğenim...",
                "Sen neyi arıyorsun Fesleğen? Derdin nedir? Ne için varsın? Nereye gidiyorsun?",
                "Derdini anlatsan ağlar mı insanlar? Duygulanırlar mı seninle birlikte?",
                "Öyle bir derdin olmalı ki Fesleğenim, anlattığın zaman dinleyenin sıkılası değil, derdini sevesi gelmeli. Dinleyenin hayatını değiştiresi gelmeli.",

                "Sahip olmak istemekle başlıyor en büyük hatamız. Kim ne götürebilmiş ki öbür dünyaya. Her şey toprak olacak. Toprağın bağrında saklı tüm kâinat. Değerli olan ruhtur.",

                "Ruhtaki özdür...",

                "Mana önce hoş gelmez, tattıkça hoş gelir. Hiç sıkılmazsın. Madde ise önce hoş gelir, tattıkça hoş gelmez. Sıkar."

                   </ul>
                </div>
            </div>
        </>
    );
}

export default QueteConstante;
