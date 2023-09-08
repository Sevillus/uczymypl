import axios from "axios";
import { useState } from "react";

const fetchStudent = async () => {
    try {
        console.log("Pobieranie danych");
        const res = await axios.get("http://localhost:3000/api/getUserData");
        const userData = res.data;
        console.log("Przed setUserStudents", userData);
        return userData; // Zwracamy dane zamiast ustawiać stan
    } catch (e) {
        console.log(e);
        return []; // Zwracamy pustą tablicę w przypadku błędu
    }
};

export default fetchStudent;
