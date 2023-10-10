import React from 'react'
import {Bar, Line} from "react-chartjs-2";
import {Chart as ChartJS,LineElement, CategoryScale, LinearScale,PointElement} from "chart.js"

const Stacked = () => {

    ChartJS.register(
       LineElement,
        CategoryScale,
        LinearScale,
        PointElement

    )
    const options = {
        plugins: {
            legend : false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                   display: false
                },
                ticks: {
                    stepSize: 500
                }

            }
        }

    };
    const labels = ["4.10", "5.10", "6.10", "7.10", "8.10", "9.10", "10.10"]
    const data = {
        labels,
        datasets: [{
            data: [1700, 1950, 2300, 2300, 2450, 3000, 3150],
            backgroundColor: 'transparent',
            borderColor: "rgb(59 130 246)",
            pointBorderColor: "transparent",
            pointBorderWidth: 4,
            tension:0.5
        }]

    }

    return (
        <div className={"w-full h-fit "}>
            <h1>Zarobek w poprzednim tygodniu </h1>
            <Line data={data} options={options} className={""} />
        </div>
    );
}
export default Stacked
