import '../../styles/nav.css';
import '../../styles/articles.scss';

function MondeInterieur() {
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
                        <li>He should retreat into his shell for a while and listen to himself thoroughly. He must withdraw into his inner world. Those who have no knowledge of their inner world, are only in love with matter and are lost in worldly pleasures.</li>
                    </ul>
                    Expliquer l'importance de prendre du temps pour soi peut s'articuler autour de plusieurs axes, soulignant comment cela contribue à l'évolution personnelle :
                    <br />
                    <br />
                    ### 1. **Se reconnecter avec soi-même**
                    Dans un monde où les obligations extérieures dominent, prendre du temps pour soi permet de se recentrer, d'écouter ses pensées et ses émotions. C’est dans ces moments de solitude que l’on peut identifier ses besoins, ses aspirations profondes et ce qui nous freine.
                    <br />
                    <br />
                    ### 2. **Stimuler la créativité et la réflexion**
                    Les périodes de calme favorisent une pensée claire et créative. Elles offrent l’espace nécessaire pour explorer des idées nouvelles, résoudre des problèmes et envisager des projets ambitieux ou des solutions inattendues.
                    <br />
                    <br />
                    ### 3. **Renforcer la santé mentale et émotionnelle**
                    Prendre du temps pour soi, loin des pressions et des attentes, réduit le stress et l’anxiété. Ces moments aident à maintenir un équilibre émotionnel et préviennent l’épuisement. Un esprit apaisé est plus apte à évoluer et à s’adapter.
                    <br />
                    <br />
                    ### 4. **Cultiver l’introspection et l’auto-évaluation**
                    Pour évoluer, il est essentiel de s’interroger sur son parcours, ses réussites, et ses échecs. Prendre du recul permet de mieux comprendre ses choix et de prendre des décisions plus alignées avec ses valeurs.
                    <br />
                    <br />
                    ### 5. **Accroître son autonomie et sa résilience**
                    Prendre du temps pour soi renforce l’autonomie en se déconnectant temporairement des influences extérieures. Cela développe la capacité à gérer seul les défis de la vie et à construire une confiance en soi durable.
                    <br />
                    <br />
                    ### 6. **Mieux interagir avec les autres**
                    S’accorder du temps personnel améliore aussi nos relations. En étant en paix avec soi-même, on peut donner aux autres une version plus authentique et équilibrée de soi, ce qui enrichit les interactions.
                    <br />
                    <br />
                    ### Comment encourager cette démarche ?
                    - **Fixer des moments réservés** : Bloquer des plages horaires dans son agenda pour des activités solitaires ou ressourçantes.
                    - **Valoriser les petits moments** : Méditation, lecture, promenades, ou simplement s’asseoir pour respirer profondément.
                    - **Ressentir les bénéfices** : Reconnaître les progrès personnels réalisés grâce à ce temps consacré à soi.
                    <br />
                    <br />
                    Prendre soin de soi est un investissement. Ce n’est pas de l’égoïsme, mais une condition essentielle pour mieux évoluer et donner le meilleur de soi aux autres.
                    <br />
                    <br />
                    ----------------------------

                    1. Se retirer pour mieux se connaître
                    Le "retrait dans sa coquille" symbolise un besoin de solitude et de réflexion. Dans un monde souvent bruyant et surchargé d'activités, prendre du recul est une invitation à s'écouter vraiment. Cela signifie mettre de côté les distractions extérieures pour se recentrer sur ses pensées, ses émotions et ses aspirations profondes. Ce processus permet d’identifier ce qui est essentiel et authentique en soi.
                    <br />
                <br />
                    2. Explorer le monde intérieur
                    Se replier dans son monde intérieur, c'est découvrir une dimension souvent négligée : son être intérieur. C’est là que réside la source de la paix, de la créativité et de la sagesse personnelle. Ceux qui ignorent cette richesse intérieure restent enfermés dans une quête extérieure, cherchant satisfaction dans des possessions matérielles ou des plaisirs éphémères.
                    <br />
                <br />
                    3. Les limites de l'attachement à la matière
                    L’attachement excessif aux biens matériels et aux plaisirs mondains peut entraîner une insatisfaction chronique. Ces éléments, bien qu’ils apportent une satisfaction temporaire, ne comblent pas le besoin plus profond de sens et de connexion spirituelle. Lorsque l'on néglige son monde intérieur, on devient vulnérable à l’épuisement, au stress et à une perte de direction dans la vie.
                    <br />
                <br />
                    4. La sagesse du silence intérieur
                    Écouter son monde intérieur permet de trouver des réponses aux grandes questions de la vie : Qui suis-je ? Quel est mon but ? Qu’est-ce qui a réellement de la valeur ? Ces réponses ne peuvent être trouvées dans le bruit de la société ou dans la course à la consommation, mais dans le calme de la contemplation et de l’introspection.
                    <br />
                    <br />
                    5. Une invitation à l’équilibre
                    Ce message ne rejette pas la matière, mais met en garde contre une dépendance excessive à celle-ci. La clé réside dans l’équilibre : apprécier ce que le monde extérieur offre tout en restant connecté à sa vie intérieure. Ceux qui cultivent leur monde intérieur trouvent souvent un sens plus profond et une satisfaction durable, qu’ils peuvent ensuite partager avec les autres.
                    <br />
                    <br />
                    Se retirer temporairement dans sa coquille n’est pas un acte d’évasion, mais un voyage vers l’authenticité. Cela permet de découvrir que la véritable richesse ne réside pas dans ce que nous possédons, mais dans ce que nous sommes. L’exploration de son monde intérieur est essentielle pour échapper à l’illusion que le bonheur se trouve uniquement dans le matériel, et pour accéder à une vie plus équilibrée, plus significative et plus alignée avec ses valeurs profondes.
                </div>
            </div>
        </>
    );
}

export default MondeInterieur;
