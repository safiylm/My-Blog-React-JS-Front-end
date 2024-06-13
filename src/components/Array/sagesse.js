import book from '../../assets/book.jpg'
import nature from '../../assets/Nature.jpg'
import yasamyolculu from '../../assets/yasamyolculu.jpg'
import changeyourself from '../../assets/change-yourself.jpg'

export const array_nasihat = [
    {
        "id": "n1",
        "image": [nature],
        "titre": {
            "tr": "Nasıl usta oldun?",
            "fr": "Comment tu es devenu expert?",
            "en": "How to become expert?",
        },
        "texte": {
            "tr": ['Büyük bir sabırsızlıkla acelecilik içinde yaşayan günümüzün insanı.',
                'kolay öğrenmenin peşinde artık. Dinlemeden öğrenmeye çalışıyor, anlamadan uygulamak istiyor, uygular uygulamaz hemen kazanabilmenin hayalini kuruyor. Ne beyhude bir hayal, ne yersiz bir beklenti',
                'İnsan zihninde yazık ki her olayda sonuç odaklı çalışıyor. Sürecin hiç ama hiçbir önemi yok… Oysa hayat bile sürece meftun bir yol... Nasıl öleceğin bile yolu yürüyüş biçimine bağlı. Hayatı nasıl yaşadığının bir önemi var….',
                'Sonuç tek başına bir hedef olamaz... Süreç de sonuca dahildir çünkü insan zaten yoldayken büyür, final çizgisinde birden bire gelişmez. O final ipini göğüsleyip ustalıklarıyla zirvelere çıkanlar da uzun yollar boyunca büyüyüp gelişerek geldiler. Zirvede birden bire çiçek açmadılar.',
                'Demem o ki, ustalık yolunda acelecilik, en büyük handikaptır… Hatta en büyük düşman… Yürümediğiniz yolun seyyahı olamazsınız. İçinde bulmadığınız deniz hakkında konuşamazsınız. Issızlığında kaybolmadığınız çölü kimseye anlatamazsınız. Hem zaten anladığınızı da hiç kimse inanmaz…',
                '“Nasıl usta oldun?”      “Yaşadıklarım…”'
            ],
            "fr": [
                "Aujourd'hui les gens sont pressés, impatients. Ils veulent réussir facilement sans faire d'efforts. Ils veulent apprendre sans écouter, sans réviser. Ils rêvent de gagner beaucoups immédiatement. Quel rêve futile, quelle attente infondée. ",
                "Malheureusement, l’esprit humain est orienté vers l'objectif, le but dans toutes les situations. Comme si la durée, le chamin menant au but n'avait aucune importance... Cependant meme la façon dont vous mourez dépend de la façon dont vous vivez. La façon dont vous vivez votre vie est importante…. « Le résultat ne peut pas être le seul objectif… La durée est même plus important que le résultat car une personne grandit pendant qu'elle est sur la route, elle ne se développe pas soudainement sur la ligne finale. Ceux qui ont franchi la ligne d'arrivé et atteint le sommet ont  grandit et se sont développés le long de longs chemins. ",
                "Ils n'ont pas fleuri d'un coup au sommet. Ce que je veux dire, c'est que la précipitation sur le chemin de la réussite est le plus grand handicap… En fait, le plus grand ennemi… Vous ne pouvez pas être un voyageur sur le chemin que vous n'avez pas parcouru. Vous ne pouvez pas parler de la mer dans laquelle vous n'avez pas été. Vous ne pouvez parler à personne du désert où vous ne vous êtes pas perdu.",
                "Comment devenir expert ? L'expérience."
            ],
            "en": [
                "Today's people live in haste with great impatience",
                "He is now looking for easy learning. He tries to learn without listening, wants to apply without understanding, and dreams of winning immediately as soon as he applies. What a futile dream, what an unfounded expectation.",
                "Unfortunately, the human mind is results-oriented in every situation. The process does not matter at all... However, even life is a path that is fascinated by the process... Even how you die depends on the way you walk. It matters how you live your life….",
                "'The result cannot be a goal alone... The process is also included in the result because a person grows while he is on the road, he does not develop suddenly at the final line. Those who crossed the final rope and reached the top with their mastery also came by growing and developing along long paths. 'They didn't suddenly bloom at the top.'",
                'What I mean to say is that haste on the path to mastery is the biggest handicap… In fact, the biggest enemy… You cannot be a traveler on the path you have not walked. You can\'t talk about the sea you haven\'t been in. You cannot tell anyone about the desert where you do not get lost" "“How to become expert?” “My experience.”',
            ],
        },
    },
    /*
    {
        "id": "n2",
        "image": [yasamyolculu],
        "titre": {
            "tr": "Ey gönül! Bu yolculuk nereye? ",
            "fr": "",
            "en": "O heart! Where is this journey?",
        },
        "texte": {
            "tr": ["Ey gönül! Bu yolculuk nereye? Demiş Şair. Çıktığın bu yaşam yolculuğunda attığın adımlar seni nereye götürüyor. Düşündün mü hiç? Hangi güzergâh üzerinden, hangi hedefe doğru yürüyorsun? Bunca çaban, bunca emeğin ve bunca zaman boyunca zaman sarf ettiğin güç aslında ne için? Bu sorular üzerinde durup uzan uzadıya düşünebiliyor olman çok değerli... Çünkü yaşadıklarının da yaşamadıklarının da aslında bir anlamı var... Sen yeter ki seçtiklerinin ve seçmediklerini farkında ol.",
                "Yokluğunu hissettiğin her şeyi kendinde aramanı dilerim.",
                "İnsan maddeden öte manadır. İnsanların değeri sahip oldukları saraylar değil düşüncelerindeki derinlikler belirler."
            ],
            "fr": [],
            "en": [],
        },
    },

    {
        "id": "n3",
        "image": [changeyourself],
        "titre":

        {
            "tr": "Dün akıllıydım, dünyayı değiştirmek istedim. Bugün bilgeyim, kendimi değiştiriyorum. ",
            "fr": "Hier j'étais intelligent, alors je voulais changer le monde. Aujourd'hui je suis sage, alors je veux changer ma personne.",
            "en": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        },
        "texte": {
            "tr": [

                " Zamanın birinde kendi halinde yaşayan mütevazi bir ev kadını varmış. Kocası zengin değilmiş ama ailesine karşı sorumluluklarını yerine getirmeye gayret eden bir adammış. Gelinin kayınvalidesi de bu çiftle aynı evde yaşıyormuş. Kadın zaman içinde kayınvalidesi ile pek de geçinemez olmuş. Sürekli kavga etmeye başlamışlar. Komşularda gelin ve kayınvalide arasında ki hoşnutsuzluktan haberdar olmuşlar. Kadın bu huzursuzluğun iyi bir sona varmayacağını düşünmeye başlamış. Bir çözüm yolu bulabilmek umuduyla akrabalarının kapısını çalmış. Kadının derdini dinleyen akrabaları kadını bir aktara götürmüşler. Aktar kadını dinledikten sonra “Çözüm belli” demiş. “Kayınvalideni ortadan kaldıracaksın, ancak şüphe çekmeden dikkatli olman gerekir.” Bu iksiri 3 ay boyunca kayınvalidesinin yemeklerine azar azar katmasını istemiş ve bu sırada sert ve kırıcı olmamaya gayret et demiş.",
                "Kadın talimatları adım adım uygulamaya başlamış. Kayınvalidesine karşı anlayışlı ve hoşgörülü davranmaya gayret göstermiş. Ona sevdiği yemeklerden hazırlamış tatlı ikramlarında bulunmuş. Karışımı da azar azar yemeklere katmış. Gelinin yakın ilgisi kayınvalidenin ilgisini çekmiş. Aralarındaki ilişkinin olumlu yönde değişmesinden çok hoşlanmış. Buna karşılık oda gelinine iyi davranmaya başlamış. Zamanla gelinini kızı gibi görür olmuş. Aralarından su sızmaz olmuş. Böylece evin huzuru da yerine gelmiş. Herkesin keyfi yerindeymiş. Bir zaman sonra kadın pişman olmuş, kendisini suçlamaya başlamış. Artık kayınvalidesinin aslında kötü bir kadın olmadığını düşünüyormuş. Onun ölümüne yol açacağını düşünmek içini acıtmış. Sonunda soluğu aktarın yanında almış. “Bana bir panzehir yap” demiş. Aktar da gülmüş kadının dediğini duyunca. “Merak etme” demiş. “Sana verdiğim karışımın içinde kuvvet veren bitkilerin özleri var. Öldürücü hiçbir şey yok.”",
                "Asıl zehir ikinizin kafasındaydı. Sen ona iyi davrandıkça zehir dağıldı ve yerini sevgiye bıraktı.",
                "Unutma ki dışarıda değiştirebileceğin hiçbir şey yok. İnsan sadece ve ancak kendini inşa edebilir. Mevlananın dediği gibi : 'Dün akıllıydım, dünyayı değiştirmek istedim. Bugün bilgeyim, kendimi değiştiriyorum.'"
            ],
            "fr": [],
            "en": [],
        },
    },
    {
        "id": "n4",
        "image": ["https://images.pexels.com/photos/12801958/pexels-photo-12801958.jpeg?auto=compress&cs=tinysrgb&w=1200"],


        "titre":
        {
            "tr": "Bırak taklidi, kendin ol.",
            "fr": "",
            "en": "Stop the imitation, be yourself",
        },
        "texte": {
            "tr": [
                "Hikayelerin içinde biz varız, hikayenin kahramanı olmak zorunda değiliz.",
                "Hikayenin gaflet içinde olan figurleride var.Gafil adamları alırım, oradan bakarım.",

                "Kahramanı alırsan kendinde değiştirecek bir şey bulamazsın.",

                "Bir dön hayatımıza bak, şöyle yaparsam “ne derler?” şunu şöyle yapim ki şöyle desinler.",
                "Sanki başkaları için yaşıyoruz hayatı.Peki şu “Şöyle yaparsam Allah ne der?”.",
                "İhlas : 'Allahtan gayrısını şahit tutmamak'.Nefsini dahil dahi etme.",
                "Kendimiz olmama sebebimiz nefsimizi büyük gösterme arzusu.",

                "Adam bir dizi izliyor orada bir kahraman var, kötüleri yok ediyor, bir kötülük olduğu zaman onu oradan kaldırıyor.Düşmanlarla müthiş şekilde savaşıyor, filmin en güzel kızıyla beraber olabiliyor, konuştu herşey aforizma şeklinde.",

                " Ertesi gün yürüyüşü de o aktor, bakışıda o aktor, konuşması da ona benzetmeye çalışıyor, kendisi yok ortada.Başka bir şey ikon haline geliyor ondan sonra o olmaya başlıyor derken bir başkası, derken bir başka moda ikonu, bir futbolcu vs ....derken bir bakmışsın hayat bitmiş.Gelmiş diyor ki 'Herkes oldum da bir kendim olamadım'.",
                " Bu çok acı bir şey şahsiyetin oturmaması.Oysaki farklı görünmek istiyorsan kendin ol, başka biri olmana gerek yok, farklılık senin özünde.Başkasına benzeme için harcadığın o enerjiyi benim içimde neler var diyerek bir kere yönlendiren, dışarı için harcadığın enerji onda birini yöneltmiş olsan mevzu hallolacak.Serdar Tuncer & Uğur Işılak : Bırak taklidi, kendin ol."
            ]
            ,
            "fr": [],
            "en": [],
        },
    },
    */
    {
        "id": "n5",
        "image": ["https://images.pexels.com/photos/20513314/pexels-photo-20513314/free-photo-of-osorno-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200"],
        "titre":
        {
            "tr": "Bilinçaltı",
            "fr": "Subconscient",
            "en": "Subconscious",
        },
        "texte": {
            "tr": [
                "Bilinçaltı gördüğüne çok çabuk ikna olur. Sürekli gördüğü şeyi de bilinç düzeyinde hakikate dönüştürür. Gördüğünü var etmeye başlarsın. Bilinç düzeyinde izlediğin şeye dönüşeceksin. Çevrenin düşünce şekli, yaşam biçimi, vizyonu, alışkanlıkları seni etkileyecektir. Hayata bakışını yeniden şekillendirecektir. Böylece bilincin yeniden kurgulanacaktır.",
                "Tam da bu yüzden: “Kiminle gezdiğine, kiminle arkadaşlık yaptığına dikkat ettin. Çünkü bülbül güle, karga çöplüğe götürür.” demiş Mevlâna. Yine tam da bu yüzden, insan ne izlediğini, ne dinlediğini iyi seçmeli, çünkü onlarla içeriyi besliyoruz. Bu seçimler belirliyor ilerideki olacağımız kişiyi.",
                "Etrafındaki ailen, dostların, arkadaşların, komşuların, temas ettiklerin, küçük gibi görünen geniş bir kalabalıklar topluğu var ve onlarda senin gelişim sürecine dahildirler. Bu yolculukta etrafındaki hiçkimse yok sayamazsın. Çünkü sen onların sözlerini işittin aklına taktın, etkilendin ve onların sözlerine göre şekil aldın. Dolayısıyla şimdiki sen de onların da bir payı var. Sufiler terbiye sürecinden geçerken bir konu üzerinde uzunca dururlar ve şöyle derler : Sen aslında sana söylenenlersin."
            ],
            "fr": ["Le subconscient est très vite influencé par ce qu’il voit. Il transforme ce qu'il voit et entend quotidiennement en réalité et vous vous transformez. Vous devennez ce que vous regardez, ce que vous écoutez quotidiennement. ",
                "La façon de penser, le style de vie, la vision et les habitudes de votre environnement vous affecteront. Cela remodèlera votre vision de la vie. Ainsi, votre conscience sera reconstruite. C’est exactement pourquoi : « Vous devez faire attention avec qui vous voyagez et avec qui vous vous liez d’amitié. Parce que le rossignol mène à la rose et le corbeau mène à la décharge. dit Mevlana.",
                "C’est exactement pourquoi les gens doivent choisir avec soin ce qu’ils regardent et ce qu’ils écoutent, car nous nous nourrissons d’eux. Ces choix déterminent la personne que nous deviendrons dans le futur. Il existe un grand groupe de foules apparemment petites autour de vous, de votre famille, de vos amis, de vos voisins, de vos contacts, et ils sont également inclus dans votre processus de développement. Vous ne pouvez ignorer personne autour de vous au cours de ce voyage. Parce que vous avez entendu leurs paroles, que vous y avez pensé, que vous avez été influencé par elles et que vous avez pris forme selon leurs paroles. Par conséquent, vous et eux avez tous les deux une part. Au cours du processus de formation, les soufis s'attardent longuement sur un sujet et disent : vous êtes réellement ce qu'on vous dit."
            ],
            "en": [
                "The subconscious is very quickly influenced by what it sees. He transforms what he sees and hears daily into reality and you transform. You become what you watch, what you listen to daily.",
                "The way of thinking, lifestyle, outlook and habits of your environment will affect you. It will reshape your outlook on life. Thus, your consciousness will be reconstructed. This is exactly why: “You need to be careful who you travel with and who you befriend. Because the nightingale leads to the rose and the crow leads to the dump. Mevlana said.",
                "This is exactly why people need to choose carefully what they watch and listen to, because we feed off them. These choices determine the person we will become in the future. There is a large group of seemingly small crowds around you, your family, your friends, your neighbors, your contacts, and they are also included in your development process. You cannot ignore anyone around you on this journey. Because you heard their words, thought about them, were influenced by them, and took shape according to their words. Therefore, you and they both have a share. During the training process, Sufis dwell at length on a subject and say: You really are what you are told."
            ],
        },
    },

    {
        "id": "n6",
        "image": ["https://images.pexels.com/photos/19989958/pexels-photo-19989958/free-photo-of-a-view-of-the-sky-from-above-a-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        "titre":
        {
            "tr": "Değişim",
            "fr": "Le changement",
            "en": "Change",
        },
        "texte": {
            "tr": [
                "Hayatın benim söylememle değişmez. Hayatın sadece, sen sözlerimde doğru bir şeyler görüyorsan değişebilir. Benim söylediklerimi doğrudan benimseme. Üzerine düşün ve zekânla test et. Kendi yolculuğumuzun anlamını ararken birarada yaşamayı oğrenmek ve dünyayı bulduğumuzdan daha iyi bir yer haline getirmek zorundayız.",
                "Değişime razı ol. Zihin istemez yürümeyi, gelişmeyi, öğrenmeyi, zorlamayı. Alışkın olduğu yerde hep aynı şekilde sayıp durmayı tercih eder. Mevcut durumunu korumak ister. Bu yüzden kaybolup gider pek çok fırsat pek çok sınav.",
                "İnsan kendisi istemediği sürece değişmez. Çünkü değişen bir insan zaten yaşadığı yaşadığı halden memnun olmayıp başka bir hali gönüllü yaşamayı seçmiştir. “Hayatın içinde her şey olabilirsin ama mühim olan hayatın içinde insan olabilmektir” demiş Mevlana. “İnsana insan gerekir ki insanı insan yapsın. İnsanda insanlık olmayınca, insan ne yapsın böyle insanı?” Ziya Paşa."
            ],
            "fr": ["Votre vie ne changera pas quand je le dirai. Votre vie ne peut changer que si vous voyez quelque chose de vrai, de logique dans mes paroles. Ne prenez pas directement ce que je dis. Pensez-y, méditez-y et testez votre intelligence. Alors que nous cherchons le sens de notre propre voyage, nous devons apprendre à vivre ensemble et à rendre le monde meilleur que celui dans lequel nous l’avons trouvé. Acceptez le changement.",
                "L’esprit ne veut pas marcher, se développer, apprendre, forcer. Il préfère toujours continuer à compter de la même manière là où il est habitué. Il souhaite maintenir sa situation actuelle. C'est pourquoi de nombreuses opportunités et de nombreux examens sont perdus. Une personne ne change que si elle le souhaite.",
                "Parce qu’une personne qui a changé n’est pas satisfaite de la situation dans laquelle elle vit déjà et a volontairement choisi de vivre dans une situation différente. Mevlana a déclaré : 'Vous pouvez être n'importe quoi dans la vie, mais l'important est d'être humain dans la vie.'"],

            "en": ["Your life won't change when I say. Your life can only change if you see something true, logic in my words. Don't take what I say directly. Think and medite about it and test your intelligence. As we search for the meaning of our own journey, we have to learn to live together and make the world a better place than we found it. Accept change.",
                "The mind does not want to walk, develop, learn, force. He always prefers to keep counting in the same way where he is accustomed to. He wants to maintain his current situation. That's why many opportunities and many exams are lost. A person does not change unless he wants to.",
                "Because a person who has changed is not satisfied with the situation he is already living in and has voluntarily chosen to live in a different situation. Mevlana said, 'You can be anything in life, but the important thing is to be human in life.'"],
        },
    },
    /* {
        "id": "n7",
        "image": ["https://images.pexels.com/photos/4492596/pexels-photo-4492596.jpeg?auto=compress&cs=tinysrgb&w=1200"],
        "titre":
        {
            "tr": "Kelimelerle gidisati değiştiren adam",
            "fr": "L'homme qui a changé le cours avec des mots",
            "en": "The man who changed the tide with words",
        },
        "texte": {
            "tr": [
                "Kor bir adam Şehir manzarasının çok güzel göründüğü bir köprünün başında dilencilik yapıyormuş. Dizlerinin dibinde tuttuğu tabelanın üzerine ise “doğuştan kör” yazılıymış. Kalabalıklar günün her saatinde köprüden gelip geçiyorlar fakat dilencinin varlığını fark etmeden işlerine koşturup duruyorlarmış. Koca gün orada beklediği halde para toplayamadığı oluyormuş. Günün birinde usta bir yazar dilenciyi fark etmiş ve önünde duran tabelayı alarak üzerine bir şeyler yazmış. Sonrasında aldığı yere geri bırakmış tabelayı. Bir süre sonra dilencinin para toplamak için açtığı eski fötr şapkanın içine para yağmaya başlamış. Usta yazarın yazdığı yazıyı okuyanlar, dilenciye para vermeden geçmez olmuşlar. Buna sadece bir söz vesile olmuş, yazarın yazdı kısacık basit ama güçlü bir :",
                "“Güzel bir bahar günü... Ama ben baharı göremiyorum”. İfade çok büyük bir güçtür.",

                "Olayların ve durumların akış yönünü değiştirme gücüne sahiptir.",
                "Kendini ifade edemeyen ise öfkelenir, ifade etmek istediğini kelimeler ile yapamayınca öfkelenir, sesini yükseltir. Sesler yükseldikçe kalpler birbirinden uzaklasmaya baslar.",
                "Ve bir sonuca varmaz, ancak kavga çıkar. Birbirlerinden soğurlar, birbirini kırarlar. Bir insandan bir şey istiyorsan onun gönlüne gireceksin.",
                "Kendini birini veya bir olayı ifade ederken seçtiğin kelimelerin izini sür ve o kelimeyi neden seçtiğini takip et çünkü kelime seçimlerin tesadüflerden ibaret değil. Hepsinin ruhsal ve zihinsel nedenleri var.",

            ],
            "fr": [],
            "en": [],
        },
    }
    ,
    {
        "id": "n8",
        "image": ["https://images.pexels.com/photos/19824001/pexels-photo-19824001/free-photo-of-vaduz-city-by-snowed-mountains.jpeg?auto=compress&cs=tinysrgb&w=1200"],
        "titre":
        {
            "tr": "Arayış",
            "fr": "Quête",
            "en": "Quest",
        },
        "texte": {
            "tr": [
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

            ],
            "fr": [],
            "en": [],
        },
    }
    ,
    {
        "id": "n9",
        "image": ["https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=1200"],
        "titre":
        {
            "tr": "Neden sürekli benim başıma geliyor? ",
            "fr": "Pourquoi est-ce que ça continue à m'arriver ?",
            "en": "Why does it always happen to me?",
        },
        "texte": {
            "tr": [
                "“Neden sürekli karşımıza aynı insanlar çıkıyor?”",
                "“Neden sürekli aynı olayları yaşıyorum?”",
                "Bir şaman öğretisi şöyle der, “Ders; Sen öğrenene kadar devam eder”.",
                "Tekrar ediş; oluşu anlamayıştan ileri gelir",
                "Anlayanı pişirir, anlamayanı ise;",
                "pişene dek yakmaya devam eder..",

                "Ey can! Doğru insan mutluluk, yanlış insan tecrübe bırakır. Hiçbir şey boşa yaşanmaz.",
                " Bütün dertler 'ham’ olanı pişirmek içindi."

            ],
            "fr": [],
            "en": [],
        },
    }
    ,
    {
        "id": "n10",
        "image": ["https://images.pexels.com/photos/20761525/pexels-photo-20761525/free-photo-of-a-woman-sitting-at-a-cafe-in-hoi-an.jpeg?auto=compress&cs=tinysrgb&w=1200"],
        "titre":
        {
            "tr": "Dinlemek",
            "fr": "écouter",
            "en": "Listen",
        },
        "texte": {
            "tr": [

                " Söz gümüşse sükut altındır.",
                "Bin dinle bir konuş.",

                "Dinleyen insan öğrenir,",
                "Dinleyen insan neyi yapıp neyi yapmaması gerektiğinin kararını alabilir",
                "Dinleyen insan muhakeme gücü gelişir,",
                "Dinleyen insan bilinçlenir, büyür, gelişir, dönüşür ve en önemlisi de düşünme sanatını kavrar.",
                "Dinlediklerin iç dünyanı besler.",

                "Dinlemeyenler öğrenemezler,",
                " Öğrenemeyenler bilemezler,",
                "Bilemeyenler olamazlar,",
                "Olmanın yolu bilmekten geçer,",
                " Bilmekse dinlemekle başlar."

            ],
            "fr": [],
            "en": [],
        },
    }
    ,
    {
        "id": "n11",
        "image": [" https://images.pexels.com/photos/20004051/pexels-photo-20004051/free-photo-of-a-person-holding-a-bouquet-of-red-tulips-in-front-of-a-green-light.jpeg?auto=compress&cs=tinysrgb&w=1200"],
        "titre":
        {
            "tr": "Olaylardan tasan manalar",
            "fr": "Significations tirées des événements",
            "en": "Meanings from events",
        },
        "texte": {
            "tr": [

                "Bazen anlamsızlık yaşarız bazen sıkıntıdan bulanır, hayattan bezeriz…",
                "İşte bunların hepsi Allah’in birer mesajdir. İşte bu yüzden sınavları da dinleyebilmek çok değerlidir.",
                "ism-i Hakemin tecellî-i âzamı şu kâinatı öyle bir kitap hükmüne getirmiş ki, her sahifede yüzer kitap yazılmış; ve her satırında yüzer sayfa derc edilmiş; ve her kelimesinde yüzer satır mevcuttur; ve her harfinde yüzer kelime var; ve her noktasında kitabın muhtasar bir fihristeciği bulunur bir tarza getirmiştir. O kitabın sahifeleri, satırları, tâ noktalarına kadar yüzer cihette Nakkaşını, Kâtibini öyle vuzuhla gösteriyor ki, o kitab-ı kâinatın müşahedesi, kendi vücudundan yüz derece daha ziyade Kâtibinin vücudunu ve vahdetini ispat eder. Çünkü bir harf kendi vücudunu bir harf kadar ifade ettiği halde, kâtibini bir satır kadar ifade ediyor."

            ],
            "fr": [],
            "en": [],
        },
    }
    ,
    {
        "id": "n12",
        "image": ["https://images.pexels.com/photos/12509079/pexels-photo-12509079.jpeg?auto=compress&cs=tinysrgb&w=1200"],
        "titre":
        {
            "tr": "  Neden yokmuş gibi yaşıyoruz",
            "fr": "",
            "en": "",
        },
        "texte": {
            "tr": [

                "Pembe renkli bir kitabın erkeklerin satın alamaması sonucu, gri ve siyah renklerinin de erkeklere özel olarak basıldığı bir dünyada, kimse çevre baskısına göre yaşamadığını iddia etmiyordur herhalde.",
                "Başkalarının düşüncelerine göre şekillendiriyoruz hayatımızı. Onlardan destek almak, onların arkamızda olmasını istiyoruz. Sanırım işler ters gittiğinde, suçu paylaşacak birileri arıyoruz. Ya da olur da başarılı geçerse denememiz, bizi takdir edecek, alkışlayacak birileri olmalı.",
                "Evet biz takdir edilmek için yaşıyoruz.",
                "Ancak insanlar bize güzelsin dediğinde güzel olduğumuzu düşünüyoruz. Ya da derslerimiz övüldüğünde çalışkan olabiliyoruz. İşimiz konusunda birisi bizi överse biz başarılıyız. ",
                "Yani bağımlıyız. İnsanların düşüncelerine övgü ve yermelerine bağımlıyız. Sürekli başkalarının hakkında neler söylediğine bakıp onların izinden gidiyoruz. Sürekli saygın bir insan olmaya çalışıp ve egonun yönlendirmeleriyle hareket ediyoruz.",
                "Bunların sebebi, 'insan' kelimesinin anlamını bilmediğimizden kaynaklanıyor. Evet, o kadar çok şeyi bilmekle uğraşırken ilk soruyu pas geçmemiz nasıl mümkün oldu acaba? Bunu bize kim öğretmeliydi de öğretmedi.",
                "Suçluyu aramayı sonraya bırakacak olursak, biz kimiz? Tam olarak ne olmalıyız? Ve bu dünyada yapmamız gereken şey nedir?",
                "Başkalarına bağlıyız. Her zaman bu böyle. Kendimizi bilseydik, yolumuzu bilseydik, buna gerek kalmayacaktı. Yolunu ve yürümeyi bilen birisi, birileri bakıyor diye yürüyüşünü değiştirmez,",
                "Kim olduğumuzu da bilmiyoruz, yolu da yürümeyi de.",
                "Herkes birileri ne der diye yaşıyorsa, o hâlde hiç kimse gerçek değildir. Herkes bir rolün içindedir. Herkesin üzerinden bir maske vardır. Herkes aynı anda o maskeyi indirse, utanılacak bir durum da kalmaz; çünkü herkesin yalanı aynı çıkar.",
                "Başkalarına değil, kendine bakanlar kazanacak sevgili Fesleğen.",
                "Allah hiçbir zaman sana neden başkası gibi davranmadın diye sormayacak. Ama neden başkası gibi davrandın diye soracak, değil mi sevgili Fesleğen?",
                "Allah var diyoruz da, Neden yokmuş gibi yaşıyoruz?"

            ],
            "fr": [],
            "en": [],
        },
    }
    ,
    {
        "id": "n13",
        "image": ["https://images.pexels.com/photos/1447424/pexels-photo-1447424.jpeg?auto=compress&cs=tinysrgb&w=1200"],
        "titre": {
            "tr": "Sinirlenmek",
            "fr": "Colère",
            "en": "Angry",
        },
        "texte": {
            "tr": [
                "Bir davete giderken talihsiz bir şey yaşasan.",
                "Bembeyaz gömleğinin üzerine kuş pisledi diyelim.",
                "Ne yaparsın ? Kuşa bağırıp çağırır mısın ? Hayır.",
                "Peki, aynı pisliği bir insan atsaydı üzerine, muhtemelen uzardi konu.Sıkıntı çıkardı.",

                "Biri yoldan geçerken seni ıslatsa sorun olur ama yağmura yakalanıp sırılsıklam olsan, oturup da yağmura sinirlenip bağırıp çağırmazsın.",

                "Bir bahar akşamı, karıncaların su içeceği bir deniz sakinliğinde kayıkla denize açılmışsın ve hafif kestiriyorsun kayıkta.Sonra birden 'tak' diye bir ses geliyor.Saliselik bir anda gözünün önünden senaryolar geçer.Biri geldi koca denizde kayığıyla bana çarptı ya da birisi bir şey fırlattı vs.Sinirli şekilde kalkarsın ayağa ve gördüğün şey denizin kıyıdan söküp getirdiği kocaman bir ağaç gövdesi.",

                " Sinirin devam eder mi ? Hayır!",
                " Anında geçer çünkü kızacak kimse yoktur.Gayet tabii bir olay gerçekleşmiştir.",

                "İnsan, yani olması gerektiği gibi bir insan başına gelen hiçbir olayda sinirlenmemelidir.",
                "Böyle biri koca, duru, sakin bir okyanus gibidir.Olayların içinde kızacak bir insan görmez.",
                "Onun için her şey Hakk’tandır, dolayısıyla ortada kızacak kimse yoktur.Her şeye eyvallah der.",
                "Başımıza gelen her şeyi eyvallah kalkanıyla karşılamamız duasıyla."

            ],
            "fr": [],
            "en": [],
        },
        
    }
        */
]


export default {
    array_nasihat,
}