import React from 'react'
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AgendaHeader = () => {
    return (
        <div className={"w-full h-14 border-b-[2px] bg-slate-100 flex-between padding-y padding-x"}>
            <div className={"flex-center gap-2"}>
                <button>
                    <KeyboardArrowLeftIcon />
                </button>
                <p>Październik 2023</p>
                <button>
                    <KeyboardArrowRightIcon />
                </button>
            </div>
            <button >
                <AddCircleOutlineIcon />
            </button>
        </div>
    )
}
export default AgendaHeader
