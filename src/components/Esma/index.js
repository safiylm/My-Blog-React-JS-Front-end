import '../../styles/App.css';
import '../../styles/esma-liste.scss';
import Nav from "../nav";


function Esma() {


    return (


        <>

        <Nav/>
            <h1>Esma ül Hüsna </h1>

            <div className="list-tag-esma">

                <div className="list-tag-esma-item" >
                    <a href="/esma/power">Power</a>
                </div>

                <div className="list-tag-esma-item" >
                    <a href="/esma/superiority">Superiority</a>
                </div>

                <div className="list-tag-esma-item" >
                    <a href="/esma/ismi-azam">Ismi Azam</a>
                </div>

                <div className="list-tag-esma-item" >
                    <a href="/esma/merciful">Merciful </a>
                </div> 
                <div className="list-tag-esma-item" >
                    <a href="/esma/generous">Generous </a>
                </div> 
                
         </div>

        </ >

    );
}

export default Esma;