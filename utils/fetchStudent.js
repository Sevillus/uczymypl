import axios from "axios";
import { useState } from "react";


const fetchStudent = async () => {
    try {
        console.log("Pobieranie danych");
        const res = await axios.get("/api/getUserData"); // Używamy ścieżki względnej, aby wywołać API na serwerze
        const sortedStudents = res.data;

        console.log("Pobrane i posortowane dane:", sortedStudents);
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
    }
};


export default fetchStudent;
