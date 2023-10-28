import React from 'react'

const StudentsColumnsNames = () => {
    return (
        <div className={"flex-between padding-y border-b-2 font-bold pr-10 text-center"}>
            <p className={"lg:w-10 hidden lg:block"}>Avatar</p>
            <p className={"lg:w-16"}>Imię</p>
            <p className={"lg:w-28"}>Nazwisko</p>
            <p className={"w-56 hidden lg:block"}>Email</p>
            <p className={"w-28 hidden lg:block"}>Telefon</p>
            <p className={"w-28 hidden lg:block"}>Data dodania</p>
            <p className={"lg:w-28 "}> Opcje</p>
        </div>
    )
}
export default StudentsColumnsNames
