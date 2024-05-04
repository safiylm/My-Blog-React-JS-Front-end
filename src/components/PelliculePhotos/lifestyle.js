import '../../styles/nav.css';
import '../../styles/gallery-photos.scss';
import Nav from '../nav';
import ph1 from '../../assets/ph1.jpg'
import ph3 from '../../assets/ph3.jpg'
import ph11 from '../../assets/ph11.jpg'
import ph12 from '../../assets/ph12.jpg'
import ph6 from '../../assets/ph6.jpg'
import ph13 from '../../assets/ph13.jpg'
import ph17 from '../../assets/ph17-1.jpg'
import ph18 from '../../assets/ph18.jpg'
import ph19 from '../../assets/ph19.jpg'
import ph20 from '../../assets/ph20.jpg'
import ph21 from '../../assets/ph21.jpg'
import ph22 from '../../assets/ph22.png'
import ph23 from '../../assets/ph23.jpg'
import ph24 from '../../assets/ph24.jpg'
import ph15 from '../../assets/ph15.jpg'

import ph25 from '../../assets/ph25.jpg'
import ph26 from '../../assets/ph26.jpg'
import ph30 from '../../assets/ph30.jpg'


function Lifestyle() {


    return (
        <div className="App">

            <Nav />

            <div className="container-publications-photos">

            <div className="une-publication">
                    <img src={ph11} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Have minimalist life </h1>
                    <p className="description">Have little object in my house, just those have really used.</p>
                    <a className="readmore">Read More </a>

                </div>

                <div className="une-publication">
                    <div id="carouselExampleRide1" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={ph6} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={ph3} className="d-block w-100" alt="..." />
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Travel </h1>
                    <p className="description">Travel is good for yourself. I like visit Historical Places</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src={ph12} />
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Friends  </h1>
                    <p className="description">We are social creature, we need to humain. We can't vivre solo</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <img src="https://images.pexels.com/photos/1479120/pexels-photo-1479120.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="book"/>
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Read Book</h1>
                    <p className="description">Lorem ipsum the industry's standard dummy text ever since the 1500s</p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <div id="carouselExampleRide12" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={ph25} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={ph26} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={ph1} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide12" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide12" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Se ressourcer </h1>
                    <p className="description"> Parfois on a besoin de sortir de sa routine et se ressourcer dans le nature.
                        Parfois seule ou bien avec une personne qu'on aime parler.
                        <br />
                        He should retreat into his shell for a while and listen to himself thoroughly. He must withdraw into his inner world. Those who have no knowledge of their inner world, are only in love with matter and are lost in worldly pleasures. </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <div id="carouselExampleRide13" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={ph23} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={ph15} className="d-block w-100" alt="..." />
                            </div>


                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide13" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide13" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Study, Work, Be productive  </h1>
                    <p className="description">If you choose a job you love, you will never have to work or be tired even for a moment in your life.
                    </p>
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
                    <div id="carouselExampleRide9" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={ph22} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={ph19} className="d-block w-100" alt="..." />
                            </div>

                            <div className="carousel-item">
                                <img src={ph20} className="d-block w-100" alt="..." />
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide9" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide9" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Love  </h1>
                    <p className="description">There is something that I have kept silent in the blind wells of my heart, something that I have tried to keep away from myself, something that I cannot express, something that I ignore, something that I cover up... It is impossible to describe. But love was already madness. If you ask me to tell you, I cannot explain. I have an enthusiastic desire to seek, but I am also afraid of meeting. Maybe I'm not setting out on this path to find it. It seems like I have no other cure than searching... I'm not sure whether I'm going to look for her or trying to find myself. I can't be honest with myself. More precisely, I don't even know what's going on with me. Maybe Her, maybe myself, but I had to find that thing that was missing inside.
                        <br />
                        <br />
                        “- Tell me more, I said.
                        – Do you like it?
                        – A lot. If I could, I would talk to you eight hundred and fifty-two thousand kilometers non-stop.
                        – How do we get gasoline on all these roads?
                        – We’ll pretend to go.”
                        My Sweet Orange Tree
                        <br />
                        <br />
                        Either all the poets loved you, or I find you in every verse. Erdem Bayezit</p>
                    <p style={{ "display": "none" }}>Bir şey var ki kalbimin kör kuyularında sessizliğe gömdüğüm, kendimden bile uzaklaştırmaya çalıştığım, dillendiremediğim, görmezden geldiğim, üstünü örttüğüm bir şey... Tarifi mümkün değil. Ama aşk da zaten bir delilikti işte. Anlat deseniz anlatamam. Coşkun bir aramak arzusu taşıyorum içimde, ama bir o kadar da korkuyorum kavuşmaktan. Belki de bulmak gayesiyle çıkmıyorum bu yola. Aramaktan başka ilacım yok sanki... Fesleğeni mi aramaya gidiyorum, kendimi mi bulmaya çalışıyorum emin değilim. Dürüst olamiyorum kendime karşı. Daha doğrusu ben bile bilmiyorum bende neler olup bittiğini. Belki Fesleğeni, belki de kendimi ama bulmalıydım içeride eksik olan o şeyi.</p>

                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">

                    <div id="carouselExampleRide10" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={ph17} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={ph18} className="d-block w-100" alt="..." />
                            </div>

                            <div className="carousel-item">
                                <img src={ph30} className="d-block w-100" alt="..." />
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide10" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide10" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="date">02.03.2023</div>
                    <h1 className="titre">Vivre ma religion  </h1>
                    <p className="description">Go to Mosquee, Read but Understand quran. Vivre également. Have good relation with Allah. Be sincere, honest, frank  </p>
                    <a className="readmore">Read More </a>
                </div>

                <div className="une-publication">
                    <div id="carouselExampleRide11" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={ph21} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={ph24} className="d-block w-100" alt="..." />
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide11" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide11" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="date">02.03.2023</div>
                    <h1 className="titre"> Activités à faire  </h1>
                    <p className="description">....................</p>
                    <a className="readmore">Read More </a>
                </div>

            </div>

        </div>
    );
}

export default Lifestyle;
