"use client";
import { TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {redirect} from "next/navigation";

const TargetPopUp = () => {
  const { data: session } = useSession();
  const [target, setTarget] = useState(undefined);
  const [lessonPrice, setLessonPrice] = useState(undefined);
  const [click, setClick] = useState(false)

  if(click){
    redirect("/teacher")
  }
  const makeApiCall = async (e) => {
    e.preventDefault();

    await fetch(`/api/add-user`, {
      method: "POST",
      body: JSON.stringify({
        target: target,
        lessonPrice: lessonPrice,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setClick(true)
  };

    return (
      <div className={"absolute w-screen lg:h-full h-screen flex-center backgroundShadow top-20 lg:top-0 left-0"}>
        <div className={"w-10/12 lg:w-4/12 h-fit bg-slate-50 py-10 padding-x rounded-lg flex-column "} >
          <h1 className={"text-2xl"}>
            Cześć {session?.user?.name.split(" ")[0]} !
          </h1>
          <span className={"text-slate-500 my-4"}>
            Bardzo się cieszymy że dołączyłeś do społeczności Uczymy.pl!
          </span>
          <p className={"my-10 w-10/12"}>
            Aby w pełni korzystać z aplikacji potrzebujemy kilku informacji
            odnośnie twoich zajęć
          </p>
          <form onSubmit={makeApiCall} className={" flex-column gap-4"}>
            <TextField
              id="outlined-basic"
              label="Miesięczny target"
              type={"number"}
              variant="outlined"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Cena jednych zajęć"
              type={"number"}
              variant="outlined"
              value={lessonPrice}
              onChange={(e) => setLessonPrice(e.target.value)}
            />
            <div className={"flex-center"}>
              <button className={"btn w-4/12"} type={"submit"}>
                Akceptuj
              </button>
            </div>
          </form>
        </div>
      </div>
    );

};
export default TargetPopUp;
