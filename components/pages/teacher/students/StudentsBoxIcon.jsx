import React from 'react'

const StudentsBoxIcon = ({student}) => {
    const colors = ["#a2513f", "#2a6735", "#5733FF", "#388383"];

    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    return (
        <div
            className={"w-[36px] h-[36px] rounded-full bg-blue-500 text-white lg:flex justify-center items-center hidden"}
            style={{ background: getRandomColor() }}
        >
            {student ? student.name[0] : ""}
        </div>
    )
}
export default StudentsBoxIcon
