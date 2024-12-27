import '../../styles/nav.css';
import '../../styles/articles.scss';

function QueteConstante() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>La quête infini </h1>

            <div className='article-texte-main'>
                « La vie est une quête, constante et perpétuelle. Aussi constante qu’inconnue. <br />
                Parfois pleine d’espoir, parfois désespérée. <br />
                Parfois lente et douce, parfois comme une vague furieuse qui se heurte aux murs… <br />
                <br />
                Personne n’est satisfait de sa situation. <br />
                Qu’il possède des biens, des titres ou non, tout le monde cherche quelque chose. <br />
                Les riches, les pauvres, les puissants, les faibles, les bons, les mauvais. <br />
                <br />
                Les gens cherchent. Mais quoi ? Nous ne le savons pas. Parce que tout ce que nous trouvons, tout endroit où nous parvenons, révèle que ce n’est pas ce que nous cherchions. Nous ne sommes pas satisfaits. L’excitation dure jusqu’à ce qu’on y arrive. Une fois atteint, elle s’éteint. Et nous commençons à chercher autre chose.
                <br /> <br />
                C’est comme si nous avions un trou noir en nous. Tous les dénouements sont ennuyeux, toutes les possessions deviennent banales. Aucune situation d’atteinte ne peut égaler l’excitation du chemin. Nous nous disons :
                « – Voilà, si je suis avec cette personne, tout ira bien… » <br />
                « – Oui, devenir directeur sera un tournant pour moi. » <br />
                « – Une fois ce cours validé, il n’y aura plus d’obstacle devant moi… » <br />
                « – J’en ai marre qu’ils se mêlent de ma vie, une fois que j’aurai mon propre logement, je repartirai à zéro… »
                <br /> <br />
                Il y a un vide profond en nous, et nous cherchons désespérément à le remplir. C’est comme une maladie. Une épidémie. Une pulsion instinctive présente en chacun dès la naissance. Et rien ne semble pouvoir nous combler…
                <br /> <br />
                Si nous ne nous lassons pas de chercher, c’est parce que nous ne restons jamais inactifs. Quelque chose de nouveau surgit toujours devant nous, et nous nous mettons à le poursuivre.
                <br /> <br />
                Mon cher Basilic, que cherches-tu ? Cherches-tu au bon endroit ou simplement là où tu te trouves ? Sais-tu seulement ce que tu cherches ? Si tu ne le sais pas, comment peux-tu le trouver ?
                <br /> <br />
                Nous pensons que la clé de cette quête réside dans l’argent, le prestige ou la reconnaissance. Mais les gens riches ne cherchent-ils pas ? Les personnes respectées et prestigieuses ne sont-elles pas en quête aussi ? Regarde autour de toi, observe les journaux, la télévision, les nouvelles : tout le monde cherche, tout le monde est malheureux. Cela prouve que ces choses ne sont pas la clé. Ce doit être autre chose. Quelque chose qui, une fois trouvé, te nourrirait durablement, sans jamais perdre sa saveur.
                <br /> <br />
                Tout le monde cherche, mais tout le monde ne trouve pas, mon cher Feslegen <br />
                Toi, que cherches-tu, Basilic ? Quelle est ta souffrance ? Pourquoi existes-tu ? Où vas-tu ?
                Si tu racontais ta douleur, ferait-elle pleurer les gens ? Se sentiraient-ils émus avec toi ?
                Ta douleur devrait être telle que, lorsqu’elle est racontée, celui qui l’écoute ne s’ennuie pas mais finit par l’aimer. Elle devrait être capable de transformer la vie de celui qui écoute.
                <br /> <br />
                Notre plus grande erreur commence par notre désir de posséder. Qui a pu emporter quoi que ce soit dans l’autre monde ? Tout retournera à la terre. Et dans le sein de la terre repose l’univers tout entier. Ce qui a de la valeur, c’est l’âme.
                <br /> <br />
                C’est l’essence de l’âme…
                <br /> <br />
                Le sens spirituel peut sembler rebutant au début, mais plus on le goûte, plus il devient agréable. Et on ne s’en lasse jamais. La matière, en revanche, est plaisante au début, mais plus on la goûte, moins elle plaît. Elle finit par lasser. »
            </div>
            <div className='d-none'>
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

            </div>

        </>
    );
}

export default QueteConstante;
