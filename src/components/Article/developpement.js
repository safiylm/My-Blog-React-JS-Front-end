
import '../../styles/nav.css';
import '../../styles/articles.scss';

function Lecture() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Developpement  </h1>
            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'un salon minimaliste" src="https://images.pexels.com/photos/2147487/pexels-photo-2147487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className="publication-txt">

                    <h2 className="titre"></h2>
                    <ul>
                        <li>
                            {/* "Hayatın benim söylememle değişmez. Hayatın sadece, sen sözlerimde doğru bir şeyler görüyorsan değişebilir. Benim söylediklerimi doğrudan benimseme. Üzerine düşün ve zekânla test et. Kendi yolculuğumuzun anlamını ararken birarada yaşamayı oğrenmek ve dünyayı bulduğumuzdan daha iyi bir yer haline getirmek zorundayız.",
                            "Değişime razı ol. Zihin istemez yürümeyi, gelişmeyi, öğrenmeyi, zorlamayı. Alışkın olduğu yerde hep aynı şekilde sayıp durmayı tercih eder. Mevcut durumunu korumak ister. Bu yüzden kaybolup gider pek çok fırsat pek çok sınav.",
                            "İnsan kendisi istemediği sürece değişmez. Çünkü değişen bir insan zaten yaşadığı yaşadığı halden memnun olmayıp başka bir hali gönüllü yaşamayı seçmiştir. “Hayatın içinde her şey olabilirsin ama mühim olan hayatın içinde insan olabilmektir” demiş Mevlana. “İnsana insan gerekir ki insanı insan yapsın. İnsanda insanlık olmayınca, insan ne yapsın böyle insanı?” Ziya Paşa."
                            <br /> */}
                           
                            Votre vie ne changera pas quand quelqu'un le decidera. Votre vie ne peut changer que si vous voyez quelque chose de vrai, de logique dans ses paroles. Ne prenez pas directement ce qu'il dit. Pensez-y, méditez-y et testez votre intelligence. Alors que nous cherchons le sens de notre propre voyage, nous devons apprendre à vivre ensemble et à rendre le monde meilleur que celui dans lequel nous l’avons trouvé.
                            </li> <li>
                            
                            "L’esprit ne veut pas changer, se développer, apprendre, forcer. Il préfère continuer de la même manière sa routine. Il souhaite maintenir sa situation actuelle. 
                            </li><li> C'est pourquoi nous perdons de nombreuses opportunités et de nombreux épreuves.
                                </li><li> <strong>Une personne ne change que si elle le souhaite.</strong>,
                             "Parce qu’une personne qui veut changer n’est pas satisfaite de sa situation actuelle et veut changer celle-ci. 

                             "tr": "Dün akıllıydım, dünyayı değiştirmek istedim. Bugün bilgeyim, kendimi değiştiriyorum. ",
            "fr": "Hier j'étais intelligent, alors je voulais changer le monde. Aujourd'hui je suis sage, alors je veux changer ma personne.",
            "en": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
      

                             " Zamanın birinde kendi halinde yaşayan mütevazi bir ev kadını varmış. Kocası zengin değilmiş ama ailesine karşı sorumluluklarını yerine getirmeye gayret eden bir adammış. Gelinin kayınvalidesi de bu çiftle aynı evde yaşıyormuş. Kadın zaman içinde kayınvalidesi ile pek de geçinemez olmuş. Sürekli kavga etmeye başlamışlar. Komşularda gelin ve kayınvalide arasında ki hoşnutsuzluktan haberdar olmuşlar. Kadın bu huzursuzluğun iyi bir sona varmayacağını düşünmeye başlamış. Bir çözüm yolu bulabilmek umuduyla akrabalarının kapısını çalmış. Kadının derdini dinleyen akrabaları kadını bir aktara götürmüşler. Aktar kadını dinledikten sonra “Çözüm belli” demiş. “Kayınvalideni ortadan kaldıracaksın, ancak şüphe çekmeden dikkatli olman gerekir.” Bu iksiri 3 ay boyunca kayınvalidesinin yemeklerine azar azar katmasını istemiş ve bu sırada sert ve kırıcı olmamaya gayret et demiş.",
                "Kadın talimatları adım adım uygulamaya başlamış. Kayınvalidesine karşı anlayışlı ve hoşgörülü davranmaya gayret göstermiş. Ona sevdiği yemeklerden hazırlamış tatlı ikramlarında bulunmuş. Karışımı da azar azar yemeklere katmış. Gelinin yakın ilgisi kayınvalidenin ilgisini çekmiş. Aralarındaki ilişkinin olumlu yönde değişmesinden çok hoşlanmış. Buna karşılık oda gelinine iyi davranmaya başlamış. Zamanla gelinini kızı gibi görür olmuş. Aralarından su sızmaz olmuş. Böylece evin huzuru da yerine gelmiş. Herkesin keyfi yerindeymiş. Bir zaman sonra kadın pişman olmuş, kendisini suçlamaya başlamış. Artık kayınvalidesinin aslında kötü bir kadın olmadığını düşünüyormuş. Onun ölümüne yol açacağını düşünmek içini acıtmış. Sonunda soluğu aktarın yanında almış. “Bana bir panzehir yap” demiş. Aktar da gülmüş kadının dediğini duyunca. “Merak etme” demiş. “Sana verdiğim karışımın içinde kuvvet veren bitkilerin özleri var. Öldürücü hiçbir şey yok.”",
                "Asıl zehir ikinizin kafasındaydı. Sen ona iyi davrandıkça zehir dağıldı ve yerini sevgiye bıraktı.",
                "Unutma ki dışarıda değiştirebileceğin hiçbir şey yok. İnsan sadece ve ancak kendini inşa edebilir. Mevlananın dediği gibi : 'Dün akıllıydım, dünyayı değiştirmek istedim. Bugün bilgeyim, kendimi değiştiriyorum.'"
          
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Lecture;
