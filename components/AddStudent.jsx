"use client";
import CloseIcon from "@mui/icons-material/Close";

import { TextField } from "@mui/material";
import AddStudentSelect from "./AddStudent__select";
import { useState } from "react";

const AddStudent = (props) => {
  const school = ["Podstawowa", "Liceum", "Technikum", "Zawodowa"];
  const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek","Sobota", "Niedziela"];

  const {student} = props

  const [name, setName] = useState(student? student.name : "");
  const [userSchool, setUserSchool] = useState(student? student.school : "");
  const [day, setDay] = useState(student? student.day : "");
  const [userTime, setUserTime] = useState(student? student.time : "");
  const [isDeleting, setIsDeleting] = useState(false);

  const closeMenu = props.closeMenu
  const fetchStudent = props.fetchStudent

  const {apiUrl, studentId} = props

  const makeApiCall = async (e) => {
    e.preventDefault();


    await fetch(`${apiUrl}`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        school: userSchool,
        day: day,
        time: userTime,
        id: studentId
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Po dodaniu studenta, ponownie pobierz listę studentów
    props.closeMenu(false); // Zamknij menu
    fetchStudent(); // Pobierz i zaktualizuj listę studentów
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    await fetch(`${apiUrl}`, {
      method: "POST",
      body: JSON.stringify({
        delete: true,
        id: studentId
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    props.closeMenu(false);
    fetchStudent();
  };


  return (
    <div
      className={
        "py-6 padding-x border-2 w-2/6 h-5/6 bg-white z-10 drop-shadow-xl flex flex-col gap-4"
      }
    >
      <div className={"flex-between"}>
        <h1 className={"text-lg font-semibold"}>Dodaj ucznia</h1>
        <button onClick={() => closeMenu(false)}>
          <CloseIcon className={"closeBtn"} />
        </button>
      </div>
      <form onSubmit={isDeleting ? handleDelete : makeApiCall} className={"flex flex-col gap-10"}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="standard-basic"
          label="Imię i nazwisko"
          variant="standard"
        />
        <AddStudentSelect
          title="Rodzaj szkoły"
          default ={userSchool}
          array={school}
          onChange={(value) => setUserSchool(value)}
        />
        <AddStudentSelect
          title="Dzień zajęć"
          default ={day}
          array={days}
          onChange={(value) => setDay(value)}
        />
        <TextField
          id="standard-basic"
          label="Godzina zajęć"
          value={userTime}
          onChange={(e) => setUserTime(e.target.value)}
          type="time"
          variant="standard"
        />
        {student? (
            <div>
              {isDeleting ? (
                  <button type="submit">Usuń</button>
              ) : (
                  <button type="button" onClick={() => setIsDeleting(true)}>Usuń</button>
              )}
              <button type="submit">Zatwierdź</button>
            </div>
        ) : (
            <button type="submit">Dodaj</button>
        )}

      </form>
    </div>
  );
};
export default AddStudent;

