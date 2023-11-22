import '../styles/App.css';
import '../styles/nav.css';
import '../styles/gallery-photos.css';
import ayna2 from '../assets/ayna2.jpg'
import ayna3 from '../assets/ayna3.jpg'
import ayna5 from '../assets/ayna5.jpg'
import ayna7 from '../assets/ayna7.jpg'
import ayna8 from '../assets/ayna8.jpg'
import maladie from '../assets/maladie.jpg'
import musibet from '../assets/musibet.jpg'
import hakimiyet from '../assets/hakimiyet.jpg'
import sanat from '../assets/sanat1.jpg'



function Marifetullah() {


    return (
        <div className="App">

            <nav>
                <div><a href="">My Blog </a></div>
                <div><a href="">Blog</a><a href="">About</a><a href="">Contact</a></div>
                <div>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg></a>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg></a>
                </div>
            </nav>


            <div className="container-publications-photos">

                <div className="une-publication">
                    <img src={ayna2} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Kâinat bir âyinedir</h1>
                    <p className="description">Kâinat bir âyinedir. Her mevcudâtın mâhiyeti dahi birer âyinedir. Kudret-i Ezeliye ile îcâd-ı İlâhîye mâruzdurlar. Herbir mevcud, bir cihetle Şems-i Ezelînin bir isminin bir nevi âyinesi olup bir nakşını gösterir.</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ayna3} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Güneş ve ayna </h1>
                    <p className="description">
                        Nasıl ki güneş ziyasıyla hadsiz (sonsuz) eşyayı ihata (kapsamak) ediyor. Aynen öyle de Allah esmâsıyla, sıfâtıyla kainati ihata ediyor.
                        Nasıl ki her parlak şey, güneşi bütün sıfâtıyla, kabiliyetine göre gösterdiği gibi,
                        aynen öyle de kainatta ki her şey kabiliyetine göre Allah'ın esmâlarını ve sıfâtlarını gösterir.
                    </p>
                    <div style={{ "display": "none" }}>
                        Nasıl ki güneş ziyasıyla hadsiz eşyayı ihata ediyor. Mecmu-u ziyasındaki güneşin zâtını mülâhaza etmek için gayet geniş bir tasavvur ve ihatalı bir nazar lâzım olduğundan, güneşin zâtını unutturmamak için, herbir parlak şeyde güneşin zâtını, aksi vasıtasıyla gösteriyor. Ve her parlak şey kendi kabiliyetince güneşin cilve-i zâtîsiyle beraber, ziyası, harareti gibi hassalarını gösteriyor. Ve her parlak şey, güneşi bütün sıfâtıyla, kabiliyetine göre gösterdiği gibi, güneşin ziya ve hararet ve ziyadaki elvân-ı seb'a gibi keyfiyatlarının herbirisi dahi umum mukabilindeki şeyleri ihata ediyor. Öyle de, وَلِلّٰهِ الْمَثَلُ اْلاَعْلٰى 1 temsilde hata olmasın, ehadiyet ve samediyet-i İlâhiye, herbir şeyde, hususan zîhayatta, hususan insanın mahiyet âyinesinde bütün esmâsıyla bir cilvesi olduğu gibi, vahdet ve vâhidiyet cihetiyle dahi, mevcudatla alâkadar herbir ismi, bütün mevcudatı ihata ediyor.

                    </div>
                    <a className="readmore">Read More </a>
                </div>


                <div className="une-publication">
                    <img src={ayna5} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Eşya   </h1>
                    <p className="description"> Eşyanın göründüğünden fazlasına işaret ediyor: 'İki kere iki dördün mükemmelliğine inanıyorum; fakat ondan daha üstün olduğuna inandığım şey, iki kere ikinin beş etmesidir.' Hakli; varoluş, 'şey'lerin yan yana gelişinden fazlasını okutturmalı insana. Dostoyevski</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={ayna7} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Her şey Allah’tan </h1>
                    <p className="description"> Bir ayna üzerinde ışık yansıyor. Işık aynanın kendi yapısında mı vardır yoksa güneş kaynaklı mıdır? Peki bu güneş değe değe bu aynaya ısı da verse, aynanın kendi özelliğinin ısısıdır yoksa güneş kaynaklı mıdır?
                        Ayna güneşin özelliklerinin yansıdığı yer oldugu gibi, aynen öyle de tüm kainat Allah’ın esmasının yansıdı yerdir. Ayna özelliklerini güneşten aldığı gibi, her canli özelliklerini kaynak olan Allah’tan alır.
                        Insanı ele alalım :
                        Sevmek insanın kendi yapısında mı vardır yoksa El-Vedud ismi kaynaklı mıdır? Hikmet, gaye gözeterek iş yapmak insanın kendi yapısında mı vardır yoksa El-Hakem ismi kaynaklı mıdır? Seçim yapmak insanın kendi yapısında mı vardır yoksa Allah’ın külli iradesi ana merkez kaynaklı mıdır?  Nasıl ki bütün evlere elektrik bir merkezden geliyorsa, aynen öyle de bütün insanların özellikleri bir merkezden geliyor.
                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={ayna8} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Eşyanın arkasındaki Esma </h1>
                    <p className="description"> </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={maladie} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> La sagesse qui se cache derrière la maladie </h1>
                    <p className="description"> La maladie nous rappelle et l'avertissement qu'elle murmure à l'oreille de notre cœur: “Ton corps n'est fait ni de pierre ni d'acier, mais composé de différentes matières susceptibles de se décomposer à tout moment. Renonce donc à ton orgueil, rends-toi compte de ton impuissance, reconnais ton Maître, prends connaissance de ta fonction et découvre le but derrière ta venue au monde.”
                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={musibet} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Musibet ihtar-ı Rahmânîdir </h1>
                    <p className="description">
                        Fakat dinî olmayan musibetler, hakikat noktasında musibet değildirler. Bir kısmı ihtar-ı Rahmânîdir (Allah'ın şefkât ve merhametle yaptığı uyarılar). Nasıl ki çoban, gayrın tarlasına tecavüz eden koyunlarına taş atıp, onlar o taştan hissederler ki, zararlı işten kurtarmak için bir ihtardır, memnunâne dönerler. Öyle de, çok zâhirî musibetler var ki, İlâhî birer ihtar, birer ikazdır. Ve bir kısmı keffâretü'z-zünubdur. (günahların bağışlanmasına vesile)  Ve bir kısmı, gafleti dağıtıp, beşerî olan aczini ve zaafını bildirerek bir nevi huzur vermektir.

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={hakimiyet} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Hakimiyet </h1>
                    <p className="description">

                        Allah hakiki hakimiyete ve hakiki rububiyete öyle sahip ki ortak kabul etmez. Bir yağmur tanesini bile yeryüzüne inişinde tesiri hakikinin bir meleğe verilmesini şirk sayıyor.
                        Allah hem kainatın tamamımın sahibi hakimiyet o demek, hem hakimiyeti mutlaka yani senin şu an vücudunda faaliyette atomları an be an Allah’tan başkası yaratamaz! İki cihette mutlak.
                        Allah bu hakimiyeti ne için kullanıyor? İnsan için. Tüm yaratılmışların gayesi Allah’ı bilmektir. Tüm kainat insanın Allah’a iman etmesine yardım ediyor.

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={sanat} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Taklit Edilmez Sanat</h1>
                    <p className="description">
                        Birtek şeyden herşeyi yapmak, yani, bir topraktan bütün nebatat ve meyveleri yapmak, hem bir sudan bütün hayvanâtı halk etmek, [ 3 ] hem basit bir yemekten bütün cihazât-ı hayvaniyeyi icad etmek; bununla beraber herşeyi birtek şey yapmak, yani, zîhayatın yediği gayet muhtelifü'l-cins taamlardan o zîhayata bir lâhm-ı mahsus yapmak, bir cild-i basit dokumak gibi san'atlar, Zât-ı Ehad-i Samed olan Sultan-ı Ezel ve Ebedin sikke-i hassasıdır, hâtem-i mahsusudur, taklit edilmez bir turrasıdır. Evet, birşeyi herşey ve herşeyi birşey yapmak, herşeyin Hâlıkına has ve Kadîr-i Külli Şeye mahsus bir nişandır, bir âyettir.
                        Sekizinci söz
                    </p>
                    <a className="readmore">Read More </a>
                </div>
            </div>

        </div>
    );
}

export default Marifetullah;
