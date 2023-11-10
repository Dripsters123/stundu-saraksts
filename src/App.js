import Diena from "./Diena";
import { useState, useEffect } from "react";



function App() {
    const [stundas, setStundas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getLessons() {
            const response = await fetch('https://cheese-cake.onthewifi.com/api/lessons');
            const data = await response.json();
            setStundas(data.IPb22);
            const cleansedData = [
                {
                    diena: "Pirmdiena",
                    stundas: data.IPb22[0].classes
                },
                {
                    diena: "Otrdiena",
                    stundas: data.IPb22[1].classes
                },
                {
                    diena: "Tresdiena",
                    stundas: data.IPb22[2].classes
                },
                {
                    diena: "Ceturtdiena",
                    stundas: data.IPb22[3].classes
                },
                {
                    diena: "Piektdiena",
                    stundas: data.IPb22[4].classes
                },
            ];
            setStundas(cleansedData);
            setLoading(false);
        };
        getLessons();

    }, []);

    const visasStundas = [
        {
            diena: "Pirmdiena", stundas: [
                "Sports pie Klintas",
                "Dabaszinības",
                "Vēsture",
                "Krievu valoda"
            ]
        },
        {
            diena: "Otrdiena", stundas: [
                "Cita st",
                "Vēl stunda",
                "Iedod bucu comam",
                "Kissing the homies"
            ]
        },
        {
            diena: "Tresdiena", stundas: [
                "Latviešu valoda un literatūra",
                "Dabaszinības",
                "Sociālās zinības un vēsture",
                "Sistēmu programmēšana"
            ]
        },
        {
            diena: "Ceturtdiena", stundas: [
                "Latval",
                "Prog",
                "Sport",
                "Mat"
            ]
        },
        {
            diena: "Piektdiena", stundas: [
                "Prog",
                "Dab",
                "Fiz",
                "Pats"
            ]
        }
    ];

    const dienasJSX = stundas.map((diena, indekss) => {
        return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />
    });
    return (<>

        {loading ? <p>Loading...</p> : dienasJSX}

    </>)
}

export default App;
