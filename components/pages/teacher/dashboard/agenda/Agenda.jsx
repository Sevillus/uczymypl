"use client";
import React, { useState } from "react";
import AddStudent from "../../AddStudent";
import AgendaHeader from "./AgendaHeader";
import AgendaLoading from "./AgendaLoading";
import AgendaContainer from "./AgendaContainer";

const Agenda = ({ fetchData, userStudents, isLoading }) => {
  const [addNewStudentMenu, setAddNewStudentMenu] = useState(false);

  return (
    <div className={"flex-column lg:w-4/12 w-full"}>
      <AgendaHeader setAddNewStudentMenu={setAddNewStudentMenu} />
      <div className={"agenda"}>
        {isLoading ? (
          <AgendaLoading isLoading={isLoading} />
        ) : (
          <AgendaContainer userStudents={userStudents} fetchData={fetchData} />
        )}
        {addNewStudentMenu && (
          <AddStudent
            fetchStudent={fetchData}
            apiUrl={"/api/add-student"}
            closeMenu={setAddNewStudentMenu}
          />
        )}
      </div>
    </div>
  );
};

export default Agenda;
