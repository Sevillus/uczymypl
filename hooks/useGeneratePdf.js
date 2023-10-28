import {useState} from "react";
import autoTable from "jspdf-autotable";
import {jsPDF} from "jspdf";
import dayjs from "dayjs";


const UseGeneratePdf = () => {
    const [loading, setLoading] = useState(false);
    const handleGeneratePdf = async (meetingHistory) => {
        try {
            const doc = new jsPDF();
            autoTable(doc, {
                head: [['Data', 'Imie i Nazwisko', 'Kwota', 'Status']],
                body: meetingHistory.map(({ nextMeeting, name, price, isPaid }) => {
                    let status = isPaid ? 'Oplacone' : 'Brak platnosci';
                    return [dayjs(nextMeeting).format('DD-MM-YYYY'), name, price, status];
                }),
            });
            doc.save('a4.pdf');
        } catch (error) {
            console.error('Wystąpił błąd: ' + error.message);
        } finally {
            setLoading(false);
        }
    };
    return {loading, handleGeneratePdf}
}
export default UseGeneratePdf
