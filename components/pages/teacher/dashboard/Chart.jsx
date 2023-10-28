
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import useChart from "../../../../hooks/useChart";

const Chart = ({ meetingHistory }) => {
    ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

    const earningsByDay = useChart(meetingHistory);

    const generateDateLabels = () => {
        const today = dayjs();
        const lastDayOfMonth = today.date();
        return Array.from({ length: lastDayOfMonth }, (_, i) => today.date(i + 1).format("D.M"));
    };

    const labels = generateDateLabels();

    const data = {
        labels,
        datasets: [
            {
                data: earningsByDay,
                backgroundColor: "transparent",
                borderColor: "rgb(59 130 246)",
                pointBorderColor: "transparent",
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
                    callbacks: (value) => value + " zł",
                },
            },
        },
    };

    return (
        <div className="chart">
            <h1 className="title-h2">Zarobek w bieżącym miesiącu</h1>
            <div className="chart-container h-full">
                <Line data={data} options={options} height={"250px"} />
            </div>
        </div>
    );
};
export default Chart;
