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
return ( <>

<Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>

<Diena diena="Otrdiena" stundas={otrdienasStundas}/>
 
</> )
}

export default App;
