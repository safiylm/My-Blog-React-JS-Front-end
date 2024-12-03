import '../../styles/nav.css';
import '../../styles/articles.scss';
import ph13 from '../../assets/ph13.jpg'
import ph12 from '../../assets/ph12.jpg'
import ph3 from '../../assets/ph3.jpg'


function Social() {


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Les relations socials</h1>

            <div className="publication">
                <div className="publication-image">
                    <img alt="photo d'une famille" src={ph3} />
                </div>

                <div className="publication-txt">

                    <h2 className="titre">
                        La famille : un socle de stabilité et d'identité
                    </h2>
                    <ul>
                        <li> <strong>Soutien inconditionnel </strong>: La famille est souvent la première source de soutien émotionnel et matériel, apportant un cadre sécurisant pour grandir et se développer. Savoir qu'on peut compter sur des proches dans les moments difficiles est fondamental pour la santé mentale.</li>
                        <li><strong>Développement des valeurs et de l’identité</strong> : C’est au sein de la famille que l’on acquiert ses premières valeurs et sa vision du monde. La famille nous aide à construire notre identité personnelle et culturelle, en transmettant des valeurs, des traditions et des croyances.</li>
                        <li><strong>Sentiment d’appartenance</strong> : La famille nous donne un sentiment d’appartenance et de sécurité, ce qui est crucial pour le développement de la confiance en soi et la résilience.</li>
                    </ul>

                </div>

            </div>

            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'une amitié" src={ph12} />
                </div>

                <div className="publication-txt">

                    <h2 className="titre"> 2. Les amis : soutien émotionnel et épanouissement personnel
                    </h2>
                    <ul>
                        <li><strong>Soutien émotionnel et écoute</strong> : Les amis sont une source d'écoute et de compréhension. Ils apportent un soutien souvent complémentaire à celui de la famille, avec moins de jugement et plus de légèreté.</li>
                        <li><strong> Joie et évasion</strong> : Les amis permettent de partager des activités, des aventures et des loisirs qui enrichissent la vie. Ils apportent du bonheur et réduisent le stress, tout en créant des souvenirs précieux.</li>
                        <li> <strong>Croissance personnelle</strong> : Les amis viennent d’horizons divers et peuvent élargir notre vision du monde. Ils nous encouragent à essayer de nouvelles choses, à sortir de notre zone de confort et à évoluer.</li>
                    </ul>
                </div>

            </div>

            <div className="publication">

                <div className="publication-image">
                    <img alt='photo de chat' src={ph13} />
                </div>

                <div className="publication-txt">
                    <h2 className="titre">
                        3. Les animaux de compagnie : compagnons de réconfort et de responsabilité
                    </h2>
                    <ul>
                        <li><strong>Source de réconfort émotionnel </strong>: Les animaux de compagnie, comme les chiens ou les chats, apportent un amour inconditionnel et du réconfort, ce qui peut atténuer le stress, l’anxiété et même la dépression. Ils sont toujours présents sans jugement, offrant un soutien émotionnel constant.</li>
                        <li><strong>Soutien contre la solitude</strong> : Les animaux aident à combler le vide émotionnel, surtout pour les personnes vivant seules ou ayant peu de contacts sociaux. Leur présence régulière favorise une routine et donne un sentiment de compagnie.</li>
                        <li><strong>Responsabilisation et bien-être </strong>: Avoir un animal de compagnie aide à structurer la journée, encourage à bouger (notamment avec les promenades pour les chiens) et donne un but quotidien, tout en apprenant des valeurs comme la responsabilité et la bienveillance.</li>
                    </ul>
                </div>

            </div>

            <div className="publication">
                <div className="publication-txt" style={{width : "90vw"}}>
                    <h2> 4. Importance générale des relations sociales pour l'humain</h2>
                    <ul>
                        <li><strong>Santé mentale et physique</strong> : Les interactions sociales stimulent la libération d’hormones telles que l’ocytocine (liée à l’attachement), la dopamine (liée au plaisir) et la sérotonine (liée au bien-être). Cela améliore l’humeur, renforce le système immunitaire et contribue à une meilleure santé physique globale.</li>
                        <li><strong>Développement de l'empathie et des compétences sociales </strong>: Interagir avec les autres, que ce soit avec la famille, les amis ou même les animaux, favorise le développement de l'empathie et des compétences de communication, essentielles pour vivre en société.</li>
                        <li><strong>Sens et épanouissement de la vie </strong>: Les relations sociales apportent un sens à la vie, en offrant un sentiment de connexion avec les autres et en enrichissant l’existence par des échanges et des partages.</li>
                    </ul>
                    <strong>Les relations sociales sont donc essentielles à l’équilibre et à l’épanouissement de l’être humain</strong>. Qu’elles soient avec des personnes ou des animaux, elles renforcent la résilience, favorisent la bonne santé et procurent un bonheur durable.
                </div>
            </div>
        </>

    );
}

export default Social;
