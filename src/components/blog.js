import '../styles/App.css';
import '../styles/nav.css';
import '../styles/gallery-photos.css';
import ph1 from '../assets/ph1.jpg'
import ph2 from '../assets/ph2.jpg'
import ph3 from '../assets/ph3.jpg'
import ph11 from '../assets/ph11.jpg'
import ph12 from '../assets/ph12.jpg'
import ph6 from '../assets/ph6.jpg'
import ph13 from '../assets/ph13.jpg'
import ph17 from '../assets/ph17-1.jpg'
import ph18 from '../assets/ph18.jpg'
import ph19 from '../assets/ph19.jpg'
import ph20 from '../assets/ph20.jpg'
import ph21 from '../assets/ph21.jpg'
import ph22 from '../assets/ph22.png'
import ph23 from '../assets/ph23.jpg'
import ph24 from '../assets/ph24.jpg'
import ph15 from '../assets/ph15.jpg'

import ph25 from '../assets/ph25.jpg'
import ph26 from '../assets/ph26.jpg'
import ph30 from '../assets/ph30.jpg'
import book from '../assets/book.jpg'

import nature from '../assets/Nature.jpg'
import yasamyolculu from '../assets/yasamyolculu.jpg'
import changeyourself from '../assets/change-yourself.jpg'


function Blog() {


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
                    <img src={ph1} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Go forest</h1>
                    <p className="description">He should retreat into his shell for a while and listen to himself thoroughly. He must withdraw into his inner world. Those who have no knowledge of their inner world, are only in love with matter and are lost in worldly pleasures.</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph2} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Read Book</h1>
                    <p className="description">Lorem ipsum the industry's standard dummy text ever since the 1500s</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph3} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Visit Historical Places </h1>
                    <p className="description">Lorem ipsum the industry's standard dummy text ever since the 1500s</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph11} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Have minimalist life </h1>
                    <p className="description">Have little object in my house, just those have really used.</p>
                    <a className="readmore">Read More </a>

                </div> <div className="une-publication">
                    <img src={ph6} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Travel </h1>
                    <p className="description">Travel is good for yourself.</p>
                    <a className="readmore">Read More </a>
                </div>


                <div className="une-publication">
                    <img src={ph12} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Be good friend  </h1>
                    <p className="description">Travel is good for yourself.</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={ph13} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Cats my love  </h1>
                    <p className="description">I love cats since I have a cat, it's just best thing in my life.</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph17} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Read the Quran  </h1>
                    <p className="description">Understand quran is really importante. Vivre également. ...................</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={ph18} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Go to Mosquee  </h1>
                    <p className="description">....................</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph19} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> With you  </h1>
                    <p className="description">Either all the poets loved you, or I find you in every verse. Erdem Bayezit</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph20} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Walk with you  </h1>
                    <p className="description">
                        “- Tell me more, I said.
                        – Do you like it?
                        – A lot. If I could, I would talk to you eight hundred and fifty-two thousand kilometers non-stop.
                        – How do we get gasoline on all these roads?
                        – We’ll pretend to go.”
                        My Sweet Orange Tree</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph21} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Camping with you  </h1>
                    <p className="description">....................</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph22} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Love  </h1>
                    <p className="description">There is something that I have kept silent in the blind wells of my heart, something that I have tried to keep away from myself, something that I cannot express, something that I ignore, something that I cover up... It is impossible to describe. But love was already madness. If you ask me to tell you, I cannot explain. I have an enthusiastic desire to seek, but I am also afraid of meeting. Maybe I'm not setting out on this path to find it. It seems like I have no other cure than searching... I'm not sure whether I'm going to look for her or trying to find myself. I can't be honest with myself. More precisely, I don't even know what's going on with me. Maybe Her, maybe myself, but I had to find that thing that was missing inside.</p>
                    <p style={{ "display": "none" }}>Bir şey var ki kalbimin kör kuyularında sessizliğe gömdüğüm, kendimden bile uzaklaştırmaya çalıştığım, dillendiremediğim, görmezden geldiğim, üstünü örttüğüm bir şey... Tarifi mümkün değil. Ama aşk da zaten bir delilikti işte. Anlat deseniz anlatamam. Coşkun bir aramak arzusu taşıyorum içimde, ama bir o kadar da korkuyorum kavuşmaktan. Belki de bulmak gayesiyle çıkmıyorum bu yola. Aramaktan başka ilacım yok sanki... Fesleğeni mi aramaya gidiyorum, kendimi mi bulmaya çalışıyorum emin değilim. Dürüst olamiyorum kendime karşı. Daha doğrusu ben bile bilmiyorum bende neler olup bittiğini. Belki Fesleğeni, belki de kendimi ama bulmalıydım içeride eksik olan o şeyi.</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={ph24} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> With you  </h1>
                    <p className="description">....................</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={ph15} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Study </h1>
                    <p className="description">....................</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={ph25} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> With you  </h1>
                    <p className="description">....................</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={ph26} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> With you  </h1>
                    <p className="description">....................</p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph23} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Be productive  </h1>
                    <p className="description">If you choose a job you love, you will never have to work or be tired even for a moment in your life.
                    </p>
                    <a className="readmore">Read More </a>
                </div>
                <div className="une-publication">
                    <img src={ph30} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Have good relation with Allah  </h1>
                    <p className="description"> Be sincere, honest, frank  ....................</p>
                    <a className="readmore">Read More </a>
                </div>


                <div className="une-publication">
                    <img src={nature} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Nasıl usta oldun? </h1>
                    <p className="description">

                        Büyük bir sabırsızlıkla acelecilik içinde yaşayan günümüzün insanı, kolay öğrenmenin peşinde artık. Dinlemeden öğrenmeye çalışıyor, anlamadan uygulamak istiyor, uygular uygulamaz hemen kazanabilmenin hayalini kuruyor. Ne beyhude bir hayal, ne yersiz bir beklenti...
                        <br />
                        <br />
                        İnsan zihninde yazık ki her olayda sonuç odaklı çalışıyor. Sürecin hiç ama hiçbir önemi yok… Oysa hayat bile sürece meftun bir yol... Nasıl öleceğin bile yolu yürüyüş biçimine bağlı. Hayatı nasıl yaşadığının bir önemi var….
                        <br />
                        <br />
                        Sonuç tek başına bir hedef olamaz... Süreç de sonuca dahildir çünkü insan zaten yoldayken büyür, final çizgisinde birden bire gelişmez. O final ipini göğüsleyip ustalıklarıyla zirvelere çıkanlar da uzun yollar boyunca büyüyüp gelişerek geldiler. Zirvede birden bire çiçek açmadılar.
                        <br />
                        <br />
                        Demem o ki, ustalık yolunda acelecilik, en büyük handikaptır… Hatta en büyük düşman… Yürümediğiniz yolun seyyahı olamazsınız. İçinde bulmadığınız deniz hakkında konuşamazsınız. Issızlığında kaybolmadığınız çölü kimseye anlatamazsınız. Hem zaten anladığınızı da hiç kimse inanmaz…
                        <br />
                        <br />

                        “Nasıl usta oldun?”
                        “Yaşadıklarım…”


                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={yasamyolculu} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Ey gönül! Bu yolculuk nereye? </h1>
                    <p className="description">

                        Ey gönül! Bu yolculuk nereye? Demiş Şair. Çıktığın bu yaşam yolculuğunda attığın adımlar seni nereye götürüyor. Düşündün mü hiç? Hangi güzergâh üzerinden, hangi hedefe doğru yürüyorsun? Bunca çaban, bunca emeğin ve bunca zaman boyunca zaman sarf ettiğin güç aslında ne için? Bu sorular üzerinde durup uzan uzadıya düşünebiliyor olman çok değerli... Çünkü yaşadıklarının da yaşamadıklarının da aslında bir anlamı var... Sen yeter ki seçtiklerinin ve seçmediklerini farkında ol.
                        <br />
                        <br />
                        Yokluğunu hissettiğin her şeyi kendinde aramanı dilerim.
                        <br />
                        <br />
                        İnsan maddeden öte manadır. İnsanların değeri sahip oldukları saraylar değil düşüncelerindeki derinlikler belirler.

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={changeyourself} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Dün akıllıydım, dünyayı değiştirmek istedim. Bugün bilgeyim, kendimi değiştiriyorum. </h1>
                    <p className="description">

                        Zamanın birinde kendi halinde yaşayan mütevazi bir ev kadını varmış. Kocası zengin değilmiş ama ailesine karşı sorumluluklarını yerine getirmeye gayret eden bir adammış. Gelinin kayınvalidesi de bu çiftle aynı evde yaşıyormuş. Kadın zaman içinde kayınvalidesi ile pek de geçinemez olmuş. Sürekli kavga etmeye başlamışlar. Komşularda gelin ve kayınvalide arasında ki hoşnutsuzluktan haberdar olmuşlar. Kadın bu huzursuzluğun iyi bir sona varmayacağını düşünmeye başlamış. Bir çözüm yolu bulabilmek umuduyla akrabalarının kapısını çalmış. Kadının derdini dinleyen akrabaları kadını bir aktara götürmüşler. Aktar kadını dinledikten sonra “Çözüm belli” demiş. “Kayınvalideni ortadan kaldıracaksın, ancak şüphe çekmeden dikkatli olman gerekir.” Bu iksiri 3 ay boyunca kayınvalidesinin yemeklerine azar azar katmasını istemiş ve bu sırada sert ve kırıcı olmamaya gayret et demiş.
                        <br />
                        <br />

                        Kadın talimatları adım adım uygulamaya başlamış. Kayınvalidesine karşı anlayışlı ve hoşgörülü davranmaya gayret göstermiş. Ona sevdiği yemeklerden hazırlamış tatlı ikramlarında bulunmuş. Karışımı da azar azar yemeklere katmış. Gelinin yakın ilgisi kayınvalidenin ilgisini çekmiş. Aralarındaki ilişkinin olumlu yönde değişmesinden çok hoşlanmış. Buna karşılık oda gelinine iyi davranmaya başlamış. Zamanla gelinini kızı gibi görür olmuş. Aralarından su sızmaz olmuş. Böylece evin huzuru da yerine gelmiş. Herkesin keyfi yerindeymiş. Bir zaman sonra kadın pişman olmuş, kendisini suçlamaya başlamış. Artık kayınvalidesinin aslında kötü bir kadın olmadığını düşünüyormuş. Onun ölümüne yol açacağını düşünmek içini acıtmış. Sonunda soluğu aktarın yanında almış. “Bana bir panzehir yap” demiş. Aktar da gülmüş kadının dediğini duyunca. “Merak etme” demiş. “Sana verdiğim karışımın içinde kuvvet veren bitkilerin özleri var. Öldürücü hiçbir şey yok.”
                        <br />
                        <br />
                        Asıl zehir ikinizin kafasındaydı. Sen ona iyi davrandıkça zehir dağıldı ve yerini sevgiye bıraktı.

                        <br />
                        <br />
                        Unutma ki dışarıda değiştirebileceğin hiçbir şey yok. İnsan sadece ve ancak kendini inşa edebilir. Mevlananın dediği gibi : 'Dün akıllıydım, dünyayı değiştirmek istedim. Bugün bilgeyim, kendimi değiştiriyorum.'

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Bırak taklidi, kendin ol.</h1>
                    <p className="description">
                        Hikayelerin içinde biz varız, hikayenin kahramanı olmak zorunda değiliz.
                        Hikayenin gaflet içinde olan figurleride var. Gafil adamları alırım, oradan bakarım.
                        Kahramanı alırsan kendinde değiştirecek bir şey bulamazsın.
                        <br />
                        <br />

                        Bir dön hayatımıza bak, şöyle yaparsam “ne derler?” şunu şöyle yapim ki şöyle desinler.
                        Sanki başkaları için yaşıyoruz hayatı. Peki şu “Şöyle yaparsam Allah ne der?”.
                        İhlas : 'Allahtan gayrısını şahit tutmamak'. Nefsini dahil dahi etme.
                        Kendimiz olmama sebebimiz nefsimizi büyük gösterme arzusu.

                        <br />
                        <br />

                        Adam bir dizi izliyor orada bir kahraman var, kötüleri yok ediyor, bir kötülük olduğu zaman onu oradan kaldırıyor. Düşmanlarla müthiş şekilde savaşıyor, filmin en güzel kızıyla beraber olabiliyor, konuştu herşey aforizma şeklinde.
                        <br />
                        <br />
                        Ertesi gün yürüyüşü de o aktor, bakışıda o aktor, konuşması da ona benzetmeye çalışıyor, kendisi yok ortada. Başka bir şey ikon haline geliyor ondan sonra o olmaya başlıyor derken bir başkası, derken bir başka moda ikonu, bir futbolcu vs .... derken bir bakmışsın hayat bitmiş. Gelmiş diyor ki 'Herkes oldum da bir kendim olamadım'.
                        <br />
                        <br />

                        Bu çok acı bir şey şahsiyetin oturmaması. Oysaki farklı görünmek istiyorsan kendin ol, başka biri olmana gerek yok, farklılık senin özünde. Başkasına benzeme için harcadığın o enerjiyi benim içimde neler var diyerek bir kere yönlendiren, dışarı için harcadığın enerji onda birini yöneltmiş olsan mevzu hallolacak. Serdar Tuncer & Uğur Işılak : Bırak taklidi, kendin ol.
                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Bilinçaltı </h1>
                    <p className="description">
                        Bilinçaltı gördüğüne çok çabuk ikna olur. Sürekli gördüğü şeyi de bilinç düzeyinde hakikate dönüştürür. Gördüğünü var etmeye başlarsın. Bilinç düzeyinde izlediğin şeye dönüşeceksin. Çevrenin düşünce şekli, yaşam biçimi, vizyonu, alışkanlıkları seni etkileyecektir. Hayata bakışını yeniden şekillendirecektir. Böylece bilincin yeniden kurgulanacaktır.
                        <br />
                        <br />

                        Tam da bu yüzden: “Kiminle gezdiğine, kiminle arkadaşlık yaptığına dikkat ettin. Çünkü bülbül güle, karga çöplüğe götürür.” demiş Mevlâna. Yine tam da bu yüzden, insan ne izlediğini, ne dinlediğini iyi seçmeli, çünkü onlarla içeriyi besliyoruz. Bu seçimler belirliyor ilerideki olacağımız kişiyi.
                        <br />
                        <br />

                        Etrafındaki ailen, dostların, arkadaşların, komşuların, temas ettiklerin, küçük gibi görünen geniş bir kalabalıklar topluğu var ve onlarda senin gelişim sürecine dahildirler. Bu yolculukta etrafındaki hiçkimse yok sayamazsın. Çünkü sen onların sözlerini işittin aklına taktın, etkilendin ve onların sözlerine göre şekil aldın. Dolayısıyla şimdiki sen de onların da bir payı var. Sufiler terbiye sürecinden geçerken bir konu üzerinde uzunca dururlar ve şöyle derler : Sen aslında sana söylenenlersin.

                    </p>
                    <a className="readmore">Read More </a>
                </div>


                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Değişim </h1>
                    <p className="description">
                        'Hayatın benim söylememle değişmez. Hayatın sadece, sen sözlerimde doğru bir şeyler görüyorsan değişebilir. Benim söylediklerimi doğrudan benimseme. Üzerine düşün ve zekânla test et. Kendi yolculuğumuzun anlamını ararken birarada yaşamayı oğrenmek ve dünyayı bulduğumuzdan daha iyi bir yer haline getirmek zorundayız.
                        <br />
                        <br />
                        Değişime razı ol. Zihin istemez yürümeyi, gelişmeyi, öğrenmeyi, zorlamayı. Alışkın olduğu yerde hep aynı şekilde sayıp durmayı tercih eder. Mevcut durumunu korumak ister. Bu yüzden kaybolup gider pek çok fırsat pek çok sınav.
                        <br />
                        <br />

                        İnsan kendisi istemediği sürece değişmez. Çünkü değişen bir insan zaten yaşadığı yaşadığı halden memnun olmayıp başka bir hali gönüllü yaşamayı seçmiştir.
                        “Hayatın içinde her şey olabilirsin ama mühim olan hayatın içinde insan olabilmektir” demiş Mevlana.
                        “İnsana insan gerekir ki insanı insan yapsın. İnsanda insanlık olmayınca, insan ne yapsın böyle insanı?” Ziya Paşa.

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">  Kelimelerle gidisati değiştiren adam </h1>
                    <p className="description">

                        Kor bir adam Şehir manzarasının çok güzel göründüğü bir köprünün başında dilencilik yapıyormuş. Dizlerinin dibinde tuttuğu tabelanın üzerine ise “doğuştan kör” yazılıymış. Kalabalıklar günün her saatinde köprüden gelip geçiyorlar fakat dilencinin varlığını fark etmeden işlerine koşturup duruyorlarmış. Koca gün orada beklediği halde para toplayamadığı oluyormuş. Günün birinde usta bir yazar dilenciyi fark etmiş ve önünde duran tabelayı alarak üzerine bir şeyler yazmış. Sonrasında aldığı yere geri bırakmış tabelayı. Bir süre sonra dilencinin para toplamak için açtığı eski fötr şapkanın içine para yağmaya başlamış. Usta yazarın yazdığı yazıyı okuyanlar, dilenciye para vermeden geçmez olmuşlar. Buna sadece bir söz vesile olmuş, yazarın yazdı kısacık basit ama güçlü bir :
                        “Güzel bir bahar günü... Ama ben baharı göremiyorum”. İfade çok büyük bir güçtür.
                        <br />
                        <br />
                        Olayların ve durumların akış yönünü değiştirme gücüne sahiptir.
                        Kendini ifade edemeyen ise öfkelenir, ifade etmek istediğini kelimeler ile yapamayınca öfkelenir, sesini yükseltir. Sesler yükseldikçe kalpler birbirinden uzaklasmaya baslar.
                        Ve bir sonuca varmaz, ancak kavga çıkar. Birbirlerinden soğurlar, birbirini kırarlar. Bir insandan bir şey istiyorsan onun gönlüne gireceksin.
                        Kendini birini veya bir olayı ifade ederken seçtiğin kelimelerin izini sür ve o kelimeyi neden seçtiğini takip et çünkü kelime seçimlerin tesadüflerden ibaret değil. Hepsinin ruhsal ve zihinsel nedenleri var.

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">  Arayış </h1>
                    <p className="description">

                        Hayat bir arayış, hem de sürekli. Sürekli olduğu kadar da bilinmeyen.
                        Bazen ümitli, bazen de ümitsiz.
                        Bazen yavaş yavaş, bazen hırçın bir dalga gibi duvarlara çarpa çarpa....
                        Kimse bulunduğu durumdan memnun değil.
                        Malı, makamı olsun olmasın herkes arıyor.
                        Zenginler, fakirler, güçlüler, güçsüzler, iyiler, kötüler.
                        <br /><br />
                        İnsanlar arıyor. Ama neyi? Bilmiyoruz. Çünkü bulduğumuz her şeyde, ulaştığımız her yerde aradığımızın o olmadığı ortaya çıkıyor. Tatmin olmuyoruz. Heyecan, ulaşana kadar sürüyor. Ulaşınca da sönüyor. Yeniden başka bir şeyi aramaya başlıyoruz.
                        <br /><br />
                        Sanki içimizde bir kara delik var. Bütün finaller sıkıcı, bütün elde etmeler sıradan gibi. Ona yürürken ki heyecanı hiçbir sahip olma durumu karşılamıyor. Kendimize dediğimiz gibi:
                        -İşte bu, bu kişiyle birlikte olursam her şey yoluna girecek...
                        -Evet, müdür olmak benim için bir dönüm noktası.
                        -Şu dersi bir vereyim, önümde hiçbir engel kalmayacak...
                        -Bıktım bunların bana karışmasından, eve çıkayım, hayata yeniden başlayacağım....
                        <br /><br />
                        İçimizde ciddi bir boşluk var ve bunu doldurmak için arayıp duruyoruz. Bir hastalık gibi. Bir salgın gibi. Doğuştan herkesin sahip olduğu bir içgüdü gibi. Ve hiçbir şey bize doyumu yaşatamayacak gibi...
                        Aramaktan sıkılmamamızın sebebi de hiç boş kalmıyoruz, sürekli önümüze yeni bir şey geliyor ve onu aramaya başlıyoruz.
                        <br /><br />
                        Sevgili Fesleğen, ne arıyorsun? Doğru yerde mi ağrıyorsun, yoksa olduğun yerde mi? Ne aradığını bilmiyor musun? Bilmiyorsan, nasıl bulabilirsin?
                        <br /><br />
                        Sanıyoruz ki bu kapının anahtarı para, prestij, saygınlıkta. Paralı insanlar aramıyor mu? Saygın, prestijli insanlar aramıyor mu? Etrafına bak, gazetelere, televizyonlara, haberlere bak, herkes arıyor, herkes mutsuz. Demek ki anahtar onlar değilmiş. Başka bir şey olmalı. Artık seni doyurabilecek, lezzeti tattıkça bitmeyecek.
                        <br /><br />
                        Herkes arar ama herkes bulamaz fesleğenim...
                        Sen neyi arıyorsun Fesleğen? Derdin nedir? Ne için varsın? Nereye gidiyorsun?
                        Derdini anlatsan ağlar mı insanlar? Duygulanırlar mı seninle birlikte?
                        Öyle bir derdin olmalı ki Fesleğenim, anlattığın zaman dinleyenin sıkılası değil, derdini sevesi gelmeli. Dinleyenin hayatını değiştiresi gelmeli.
                        <br /><br />
                        Sahip olmak istemekle başlıyor en büyük hatamız. Kim ne götürebilmiş ki öbür dünyaya. Her şey toprak olacak. Toprağın bağrında saklı tüm kâinat. Değerli olan ruhtur.
                        <br /><br />
                        Ruhtaki özdür...
                        <br /><br />
                        Mana önce hoş gelmez, tattıkça hoş gelir. Hiç sıkılmazsın. Madde ise önce hoş gelir, tattıkça hoş gelmez. Sıkar.

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">  Neden sürekli benim başıma geliyor? </h1>
                    <p className="description">

                        “Neden sürekli karşımıza aynı insanlar çıkıyor?”<br />
                        “Neden sürekli aynı olayları yaşıyorum?”
                        <br /><br />
                        Bir şaman öğretisi şöyle der, “Ders; Sen öğrenene kadar devam eder”.<br />
                        Tekrar ediş; oluşu anlamayıştan ileri gelir<br />
                        Anlayanı pişirir, anlamayanı ise;<br />
                        pişene dek yakmaya devam eder..
                        <br /><br />
                        Ey can! Doğru insan mutluluk, yanlış insan tecrübe bırakır. Hiçbir şey boşa yaşanmaz.
                        <br /><br />
                        Bütün dertler 'ham’ olanı pişirmek içindi. 

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Dinlemek </h1>
                    <p className="description">

                        Söz gümüşse sükut altındır.<br />
                        Bin dinle bir konuş.
                        <br /><br />
                        Dinleyen insan öğrenir,<br />
                        Dinleyen insan neyi yapıp neyi yapmaması gerektiğinin kararını alabilir,<br />
                        Dinleyen insan muhakeme gücü gelişir,<br />
                        Dinleyen insan bilinçlenir, büyür, gelişir, dönüşür ve en önemlisi de düşünme sanatını kavrar.<br />
                        Dinlediklerin iç dünyanı besler.
                        <br /><br />
                        Dinlemeyenler öğrenemezler,<br />
                        Öğrenemeyenler bilemezler,<br />
                        Bilemeyenler olamazlar,<br />
                        Olmanın yolu bilmekten geçer,<br />
                        Bilmekse dinlemekle başlar.

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">  Olaylardan tasan manalar </h1>
                    <p className="description">


                        Bazen anlamsızlık yaşarız bazen sıkıntıdan bulanır, hayattan bezeriz…<br />
                        İşte bunların hepsi Allah’in birer mesajdir. İşte bu yüzden sınavları da dinleyebilmek çok değerlidir.<br />
                        <br />
                        ism-i Hakemin tecellî-i âzamı şu kâinatı öyle bir kitap hükmüne getirmiş ki, her sahifede yüzer kitap yazılmış; ve her satırında yüzer sayfa derc edilmiş; ve her kelimesinde yüzer satır mevcuttur; ve her harfinde yüzer kelime var; ve her noktasında kitabın muhtasar bir fihristeciği bulunur bir tarza getirmiştir. O kitabın sahifeleri, satırları, tâ noktalarına kadar yüzer cihette Nakkaşını, Kâtibini öyle vuzuhla gösteriyor ki, o kitab-ı kâinatın müşahedesi, kendi vücudundan yüz derece daha ziyade Kâtibinin vücudunu ve vahdetini ispat eder. Çünkü bir harf kendi vücudunu bir harf kadar ifade ettiği halde, kâtibini bir satır kadar ifade ediyor.

                    </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">   Neden yokmuş gibi yaşıyoruz </h1>
                    <p className="description">

                  
Pembe renkli bir kitabın erkeklerin satın alamaması sonucu, gri ve siyah renklerinin de erkeklere özel olarak basıldığı bir dünyada, kimse çevre baskısına göre yaşamadığını iddia etmiyordur herhalde.
<br />
Başkalarının düşüncelerine göre şekillendiriyoruz hayatımızı. Onlardan destek almak, onların arkamızda olmasını istiyoruz. Sanırım işler ters gittiğinde, suçu paylaşacak birileri arıyoruz. Ya da olur da başarılı geçerse denememiz, bizi takdir edecek, alkışlayacak birileri olmalı.
<br />
Evet biz takdir edilmek için yaşıyoruz.<br />
Ancak insanlar bize güzelsin dediğinde güzel olduğumuzu düşünüyoruz. Ya da derslerimiz övüldüğünde çalışkan olabiliyoruz. İşimiz konusunda birisi bizi överse biz başarılıyız.
<br />
Yani bağımlıyız. İnsanların düşüncelerine övgü ve yermelerine bağımlıyız. Sürekli başkalarının hakkında neler söylediğine bakıp onların izinden gidiyoruz. Sürekli saygın bir insan olmaya çalışıp ve egonun yönlendirmeleriyle hareket ediyoruz.
<br />
Bunların sebebi, 'insan' kelimesinin anlamını bilmediğimizden kaynaklanıyor. Evet, o kadar çok şeyi bilmekle uğraşırken ilk soruyu pas geçmemiz nasıl mümkün oldu acaba? Bunu bize kim öğretmeliydi de öğretmedi.
<br />
Suçluyu aramayı sonraya bırakacak olursak, biz kimiz? Tam olarak ne olmalıyız? Ve bu dünyada yapmamız gereken şey nedir?
<br />
Başkalarına bağlıyız. Her zaman bu böyle. Kendimizi bilseydik, yolumuzu bilseydik, buna gerek kalmayacaktı. Yolunu ve yürümeyi bilen birisi, birileri bakıyor diye yürüyüşünü değiştirmez,
<br />
Kim olduğumuzu da bilmiyoruz, yolu da yürümeyi de.
Herkes birileri ne der diye yaşıyorsa, o hâlde hiç kimse gerçek değildir. Herkes bir rolün içindedir. Herkesin üzerinden bir maske vardır. Herkes aynı anda o maskeyi indirse, utanılacak bir durum da kalmaz; çünkü herkesin yalanı aynı çıkar.
<br />
Başkalarına değil, kendine bakanlar kazanacak sevgili Fesleğen.
Allah hiçbir zaman sana neden başkası gibi davranmadın diye sormayacak. Ama neden başkası gibi davrandın diye soracak, değil mi sevgili Fesleğen?
Allah var diyoruz da,<br />
Neden yokmuş gibi yaşıyoruz?<br />


                    </p>
                    <a className="readmore">Read More </a>
                </div>


                <div className="une-publication">
                    <img src={book} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Sinirlenmek </h1>
                    <p className="description">

Bir davete giderken talihsiz bir şey yaşasan.<br />
Bembeyaz gömleğinin üzerine kuş pisledi diyelim.<br />
Ne yaparsın? Kuşa bağırıp çağırır mısın? Hayır.<br />
Peki, aynı pisliği bir insan atsaydı üzerine, muhtemelen uzardi konu. Sıkıntı çıkardı.<br />

Biri yoldan geçerken seni ıslatsa sorun olur ama yağmura yakalanıp sırılsıklam olsan, oturup da yağmura sinirlenip bağırıp çağırmazsın.
<br />
Bir bahar akşamı, karıncaların su içeceği bir deniz sakinliğinde kayıkla denize açılmışsın ve hafif kestiriyorsun kayıkta. Sonra birden 'tak' diye bir ses geliyor. Saliselik bir anda gözünün önünden senaryolar geçer. Biri geldi koca denizde kayığıyla bana çarptı ya da birisi bir şey fırlattı vs. Sinirli şekilde kalkarsın ayağa ve gördüğün şey denizin kıyıdan söküp getirdiği kocaman bir ağaç gövdesi. 
<br /><br />
Sinirin devam eder mi? Hayır!
Anında geçer çünkü kızacak kimse yoktur. Gayet tabii bir olay gerçekleşmiştir.<br />

İnsan, yani olması gerektiği gibi bir insan başına gelen hiçbir olayda sinirlenmemelidir.<br />
Böyle biri koca, duru, sakin bir okyanus gibidir. Olayların içinde kızacak bir insan görmez.<br />
Onun için her şey Hakk’tandır, dolayısıyla ortada kızacak kimse yoktur. Her şeye eyvallah der.<br />
Başımıza gelen her şeyi eyvallah kalkanıyla karşılamamız duasıyla. 



                    </p>
                    <a className="readmore">Read More </a>
                </div>

            </div>

        </div>
    );
}

export default Blog;
