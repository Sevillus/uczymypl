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

const Stacked = ({ earned, meetingHistory }) => {
    ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

    const today = dayjs();
    const daysInMonth = today.daysInMonth();
    const [dataPoints, setDataPoints] = useState([]);

    useEffect(() => {
        const calculateEarnings = () => {
            const earningsByDay = [];
            let totalEarnings = 0;

            for (let i = 1; i <= daysInMonth; i++) {
                const date = today.date(i);

                // Tutaj oblicz zarobki na ten dzień i zastąp 0 odpowiednią wartością
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
                earningsByDay.push(totalEarnings);
            }

            return earningsByDay;
        };

        const earningsData = calculateEarnings();
        setDataPoints(earningsData);
    }, [daysInMonth, today, meetingHistory,earned]);

    const labels = Array.from({ length: daysInMonth }, (_, i) =>
        today.date(i + 1).format('D.M')
    );

    const data = {
        labels,
        datasets: [
            {
                data: dataPoints,
                backgroundColor: 'transparent',
                borderColor: 'rgb(59 130 246)',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension: 0.5,
            },
        ],
    };

    const options = {
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
                },
            },
        },
    };

    return (
        <div className="w-full flex flex-col gap-10">
            <h1 className="text-xl">Zarobek w bieżącym miesiącu</h1>
            <div className="chart-container" style={{ height: '500px' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default Stacked;
