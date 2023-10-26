"use client";
import CloseIcon from "@mui/icons-material/Close";

import {FormControlLabel, Switch, TextField} from "@mui/material";
import AddStudentSelect from "./AddStudentSelect";
import {useEffect, useState} from "react";
import meetingInfo from "../../../utils/meetingDay";



const AddStudent = (props) => {
  const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek","Sobota", "Niedziela"];

  const {student} = props
  console.log(student)
  const [name, setName] = useState(student? student.name : "");
  const [email, setEmail] = useState(student? student.email : "")
  const [phone, setPhone] = useState(student? student.phone : "")
  const [price, setPrice] = useState(student? student.price : 70);
  const [day, setDay] = useState(student? student.day : "");
  const [userTime, setUserTime] = useState(student? student.time : "");
  const [duration, setDuration] = useState( 60)
  const [cyclical, setCyclical] = useState(student? student.cyclical : true)
  const [isDeleting, setIsDeleting] = useState(false);
  const [afterClick, setAfterClick] = useState(false)

  const required = [name, price, day, userTime, duration]


  const closeMenu = props.closeMenu
  const fetchStudent = props.fetchStudent

  const {apiUrl, studentId} = props


  const makeApiCall = async (e) => {
    setAfterClick(true)
    e.preventDefault();
    const errors = required.filter(el => el === "")
    if(errors.length === 0) {
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
      })
      setAfterClick(false)
      props.closeMenu(false);
      fetchStudent()
    }

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
    fetchStudent()
  };


  return (
      <div
          className={
            "py-4 mt-20 lg:mt-2 lg:py-10 padding-x  w-10/12 lg:w-2/6 h-fit  bg-slate-50 z-10 rounded-md flex flex-col gap-4"
          }
      >
        <div className={"flex-between"}>
          <h1 className={"text-lg font-semibold"}>Dodaj ucznia</h1>
          <button onClick={() => closeMenu(false)}>
            <CloseIcon className={"closeBtn"} />
          </button>
        </div>
        <form onSubmit={isDeleting ? handleDelete : makeApiCall} className={"flex flex-col gap-4 max-[376px]:gap-2  lg:gap-10 text-sm"}>
          <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="outlined-error"
              label="Imię i nazwisko*"
              variant="standard"
              type={"text"}
              error={name === "" && afterClick}
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
              error={price <= 0 && afterClick}
          />
          <TextField
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              id="standard-basic"
              label="Czas trwania (min)"
              variant="standard"
              type={"number"}
              error={duration <= 0 && afterClick}
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
              error={day === "" && afterClick}
              afterClick={afterClick}
          />
          <TextField
              id="standard-basic"
              label="Godzina zajęć"
              value={userTime}
              onChange={(e) => setUserTime(e.target.value)}
              type="time"
              variant="standard"
              error={userTime === "" && afterClick}
          />
          {student? (
              <div className={"flex-center gap-10"}>
                {isDeleting ? (
                    <button className={"addBtn"} type="submit">Usuń</button>
                ) : (
                    <button className={"addBtn bg-rose-500 text-white"} type="button" onClick={() => setIsDeleting(true)}>Usuń</button>
                )}
                <button className={"addBtn bg-green-600 text-white"} type="submit">Zatwierdź</button>
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
