import axios from "axios";



const fetchStudent = async () => {
    try {
        console.log("Pobieranie danych");
        const res = await axios.get("/api/getUserData"); // Używamy ścieżki względnej, aby wywołać API na serwerze
        return res.data

    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
    }

};


export default fetchStudent;
