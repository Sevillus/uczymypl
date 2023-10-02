"use client"
import { useState } from 'react';
import {jsPDF} from "jspdf";
import autoTable from 'jspdf-autotable'
import dayjs from "dayjs";

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
                    isPaid ? status = "Oplacone" : status = "Brak platności"
                    return [dayjs(nextMeeting).format("DD-MM-YYYY"), name, price, status]
                })
            });
            doc.save("a4.pdf");
        } catch (error) {
            console.error('Wystąpił błąd: ' + error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <button onClick={handleGeneratePdf} disabled={loading}>
            Generuj PDF
        </button>
    );
};

export default GeneratePdfButton;
