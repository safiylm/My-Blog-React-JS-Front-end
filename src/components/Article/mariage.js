import '../../styles/nav.css';
import '../../styles/articles.scss';

function Mariage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang')

    return (
        <>
            <h1>Mariage</h1>
            <div className="publication">

                <div className="publication-image">
                    <img alt="photo d'un salon minimaliste" src="https://images.pexels.com/photos/2147487/pexels-photo-2147487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className="publication-txt">

                    <h2 className="titre"></h2>
                    <ul>
                        <li>Bir şey var ki kalbimin kör kuyularında sessizliğe gömdüğüm, kendimden bile uzaklaştırmaya çalıştığım, dillendiremediğim, görmezden geldiğim, üstünü örttüğüm bir şey... Tarifi mümkün değil. Ama aşk da zaten bir delilikti işte. Anlat deseniz anlatamam. Coşkun bir aramak arzusu taşıyorum içimde, ama bir o kadar da korkuyorum kavuşmaktan. Belki de bulmak gayesiyle çıkmıyorum bu yola. Aramaktan başka ilacım yok sanki... Fesleğeni mi aramaya gidiyorum, kendimi mi bulmaya çalışıyorum emin değilim. Dürüst olamiyorum kendime karşı. Daha doğrusu ben bile bilmiyorum bende neler olup bittiğini. Belki Fesleğeni, belki de kendimi ama bulmalıydım içeride eksik olan o şeyi.</li>
                        <li>There is something that I have kept silent in the blind wells of my heart, something that I have tried to keep away from myself, something that I cannot express, something that I ignore, something that I cover up... It is impossible to describe. But love was already madness. If you ask me to tell you, I cannot explain. I have an enthusiastic desire to seek, but I am also afraid of meeting. Maybe I'm not setting out on this path to find it. It seems like I have no other cure than searching... I'm not sure whether I'm going to look for her or trying to find myself. I can't be honest with myself. More precisely, I don't even know what's going on with me. Maybe Her, maybe myself, but I had to find that thing that was missing inside. “- Tell me more, I said.– Do you like it?– A lot. If I could, I would talk to you eight hundred and fifty-two thousand kilometers non-stop.– How do we get gasoline on all these roads?– We’ll pretend to go.” My Sweet Orange Tree Either all the poets loved you, or I find you in every verse. Erdem Bayezit</li>
                   </ul>
                </div>
            </div>
        </>
    );
}

export default Mariage;
