"use client";
import React, { useEffect, useState } from "react";
import MeetingHistoryInfo from "../../../components/meetingHistoryInfo";
import axios from "axios";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MeetingsHistory from "../../../components/MeetingsHistory";
import dayjs from "dayjs";
import { months } from "../../../constants/months";

const Page = () => {
  const [user, setUser] = useState([]);
  const [meetingHistory, setMeetingHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const [earnedThisMonth, setEarnedThisMonth] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Dodaj stan do śledzenia ładowania danych

  const searchEngine = () => {
    if (search) {
      const filteredStudents = meetingHistory.filter(
        (student) =>
          student.name && student.name.toLowerCase().includes(search),
      );
      setMeetingHistory(filteredStudents);
    } else {
      !isLoading
        ? setMeetingHistory(user.meetingHistory[currentMonth]?.allMeetings)
        : null;
    }
  };
  useEffect(() => {
    searchEngine();
  }, [search]);

  const nextMonthHandler = () => {
    if (currentMonth !== dayjs().month()) {
      setCurrentMonth((prevState) => prevState + 1);
      setMeetingHistory(user.meetingHistory[currentMonth + 1]?.allMeetings);
    }
  };
  const beforeMontHandler = () => {
    if (currentMonth !== 0) {
      setCurrentMonth((prevState) => prevState - 1);
      setMeetingHistory(user.meetingHistory[currentMonth - 1]?.allMeetings);
    }
  };

  const fetchStudent = async () => {
    try {
      const res = await axios.get("/api/getUserData");
      setUser(res.data);
      setIsLoading(false);
      setMeetingHistory(res.data.meetingHistory[dayjs().month()]?.allMeetings);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchStudent();
  }, []);
  return (
    <div className={"w-full lg:h-[80vh] flex-center lg:overflow-y-auto "}>
      <div
        className={"w-full lg:w-10/12 h-full padding-x padding-y bg-slate-50"}
      >
        <div
          className={
            "w-full flex  flex-col gap-10 lg:flex-row lg:justify-between py-4"
          }
        >
          <div className={"w-full lg:w-8/12 "}>
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              value={search}
              label={"Wyszukaj po nazwie studenta"}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              variant="standard"
              className={"w-full"}
            />{" "}
          </div>
          <div className={"flex-between w-full lg:w-2/12 lg:mr-10"}>
            <NavigateBeforeIcon
              onClick={beforeMontHandler}
              className={
                currentMonth === 0 ? "text-slate-300 cursor-not-allowed" : ""
              }
            />
            {months[currentMonth]}
            <NavigateNextIcon
              onClick={nextMonthHandler}
              className={
                currentMonth === dayjs().month()
                  ? "text-slate-300 cursor-not-allowed"
                  : ""
              }
            />
          </div>
        </div>
        <div className={"h-fit lg:h-[65vh] "}>
          <MeetingsHistory
            meetingHistory={meetingHistory}
            setMeetingHistory={setMeetingHistory}
            setEarnedThisMonth={setEarnedThisMonth}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
