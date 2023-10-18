"use client";
import CloseIcon from "@mui/icons-material/Close";

import {FormControlLabel, Switch, TextField} from "@mui/material";
import AddStudentSelect from "./AddStudent__select";
import { useState } from "react";
import meetingInfo from "../utils/meetingDay";

const AddStudent = (props) => {
  const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek","Sobota", "Niedziela"];

  const {student} = props

  const [name, setName] = useState(student? student.name : "");
  const [email, setEmail] = useState(student? student.email : "")
  const [phone, setPhone] = useState(student? student.phone : "")
  const [price, setPrice] = useState(student? student.price : 70);
  const [day, setDay] = useState(student? student.day : "");
  const [userTime, setUserTime] = useState(student? student.time : "");
  const [duration, setDuration] = useState( 60)
  const [cyclical, setCyclical] = useState(student? student.cyclical : true)
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
        email: email,
        phone: phone,
        price: price,
        day: day,
        time: userTime,
        nextMeeting: meetingInfo(day, userTime),
        duration: duration,
        cyclical: cyclical,
        id: studentId
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.closeMenu(false);
    fetchStudent();
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
        "py-10 padding-x border-2 w-10/12 lg:w-2/6 h-fit  bg-white z-10 drop-shadow-xl flex flex-col gap-4"
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
          type={"text"}
        />
        <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="standard-basic"
            label="Adres e-mail"
            variant="standard"
            type={"email"}
        />
        <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="standard-basic"
            label="Numer telefonu"
            variant="standard"
            type={"string"}
        />
        <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="standard-basic"
            label="Cena zajęć"
            variant="standard"
            type={"number"}
        />
        <TextField
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            id="standard-basic"
            label="Czas trwania (min)"
            variant="standard"
            type={"number"}
        />
        <FormControlLabel
            control={<Switch defaultChecked />}
            label="Zajęcia cykliczne"
            checked={cyclical}
            onChange={() => setCyclical(prev => !prev)}
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
            <div className={"flex-center gap-10"}>
              {isDeleting ? (
                  <button className={"addBtn"} type="submit">Usuń</button>
              ) : (
                  <button className={"addBtn"} type="button" onClick={() => setIsDeleting(true)}>Usuń</button>
              )}
              <button className={"addBtn"} type="submit">Zatwierdź</button>
            </div>
        ) : (
            <div className={"flex-center"}>
              <button className={"btn w-2/6"} type="submit">Dodaj</button>
            </div>

        )}

      </form>
    </div>
  );
};
export default AddStudent;

