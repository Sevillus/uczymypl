
const AgendaLoading = () => {
    return (
        <div className={"flex-column h-full gap-4 p-4 overflow-y-scroll rounded-lg"}>
            {[1, 2, 3, 4, 5, 6, 7].map((key) => (
                <div key={key} className={"flex-between w-full p-4  shadow-md rounded-lg"}>
                    <div>
                        <p className={"loading-slate-300 h-6 w-48"}></p>
                        <p className={"loading-slate-200 w-40"}></p>
                    </div>
                    <div className={"flex flex-col hidden lg:flex lg:w-4/12"}>
                        <div>
                            <p className={"loading-slate-300 h-6 w-20"}></p>
                            <p className={"loading-slate-200 w-28"}></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default AgendaLoading
