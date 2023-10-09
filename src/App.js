import Diena from "./Diena";

function App() {
    const pirmdienasStundas = [
        "Sports pie Klintas",
        "Dabaszinības",
        "Vēsture",
        "Krievu valoda"
    ];
    const otrdienasStundas = [
        "Cita st",
        "Vēl stunda",
        "Iedod bucu comam",
        "Kissing the homies"
    ];
    const visasStundas = [
       {diena: "Pirmdiena",stundas:[
        "Sports pie Klintas",
        "Dabaszinības",
        "Vēsture",
        "Krievu valoda"  
       ]},
       {diena: "Otrdiena",stundas:[
        "Cita st",
        "Vēl stunda",
        "Iedod bucu comam",
        "Kissing the homies"
       ]},
       {diena:"Tresdiena",stundas:[
        "Latviešu valoda un literatūra",
       "Dabaszinības",
        "Sociālās zinības un vēsture",
     "Sistēmu programmēšana"
       ]},
       {diena:"Ceturtdiena",stundas:[
        "Latval",
        "Prog",
        "Sport",
        "Mat" 
       ]},
       {diena:"Piektdiena",stundas:[
        "Prog",
        "Dab",
        "Fiz",
        "Pats" 
       ] }
        ];
    const dienasJSX = visasStundas.map((diena, indekss)=>{
        return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas}/>
    });
return ( <>

{dienasJSX}
 
</> )
}

export default App;
