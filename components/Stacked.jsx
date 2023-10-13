"use client"
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js';

const Stacked = ({ meetingHistory, }) => {
    ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

    const today = dayjs();
    const lastDayOfMonth = dayjs().date();

    const [earningsByDay, setEarningsByDay] = useState([]);

    useEffect(() => {
        const calculateEarningsByDay = () => {
            const newEarningsByDay = [];
            let totalEarnings = 0;

            for (let i = 1; i <= lastDayOfMonth; i++) {
                const date = today.date(i);

                let earnings = 0;
                meetingHistory.forEach((student) => {
                    if (
                        dayjs(student.nextMeeting).format('D.M') === date.format('D.M') &&
                        student.isPaid
                    ) {
                        earnings += student.price;
                    }
                });

                totalEarnings += earnings;
                newEarningsByDay.push(totalEarnings);
            }

            setEarningsByDay(newEarningsByDay);
        };
        console.log("historia się zmieniła")
        calculateEarningsByDay();
    }, [meetingHistory]);

    const labels = Array.from({ length: lastDayOfMonth }, (_, i) =>
        today.date(i + 1).format('D.M')
    );

    const data = {
        labels,
        datasets: [
            {
                data: earningsByDay,
                backgroundColor: 'transparent',
                borderColor: 'rgb(59 130 246)',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension: 0.5,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: false,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    stepSize: 500,
                    callbacks: (value) => value + ' zł',
                },
            },
        },
    };

    return (
        <div className="w-full flex flex-col gap-10 h-6/12 ">
            <h1 className="title-h1">Zarobek w bieżącym miesiącu</h1>
            <div className="chart-container h-full">
                <Line data={data} options={options} height={"250px"} />
            </div>
        </div>
    );
};

export default Stacked;