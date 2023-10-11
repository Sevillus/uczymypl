"use client"
import { useState } from 'react';
import {jsPDF} from "jspdf";
import autoTable from 'jspdf-autotable'
import dayjs from "dayjs";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const GeneratePdfButton = ({ meetingHistory }) => {
    const [loading, setLoading] = useState(false);

    const handleGeneratePdf = async () => {
        try {
            console.log(meetingHistory)
            const doc = jsPDF();
            autoTable(doc, {
                head: [["Data", "Imie i Nazwisko", "Kwota", "Status"]],
                body: meetingHistory.map(({nextMeeting, name, price, isPaid}) => {
                    let status = ""
                    isPaid ? status = "Oplacone" : status = "Brak platnosci"
                    return [dayjs(nextMeeting).format("DD-MM-YYYY"), name, price, status]
                }),
            });
            doc.save("a4.pdf");
        } catch (error) {
            console.error('Wystąpił błąd: ' + error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <button className={"border-2 rounded-lg p-1 px-2 flex gap-4 bg-white"} onClick={handleGeneratePdf} disabled={loading}>
            <DownloadOutlinedIcon />
            Generuj PDF
        </button>
    );
};

export default GeneratePdfButton;
