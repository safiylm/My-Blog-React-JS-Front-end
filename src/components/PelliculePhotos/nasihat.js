import '../../styles/nav.css';
import '../../styles/gallery-photos.css';
import Nav from '../nav';

import book from '../../assets/book.jpg'
import nature from '../../assets/Nature.jpg'
import yasamyolculu from '../../assets/yasamyolculu.jpg'
import changeyourself from '../../assets/change-yourself.jpg'

function LessonsforLife() {

    return (
        <div className="App">

            <Nav />

            <div className="container-publications-photos">
              

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

export default LessonsforLife;
