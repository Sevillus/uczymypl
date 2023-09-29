"use client"
import { useState } from 'react';

const GeneratePdfButton = ({ meetingHistory }) => {
    const [loading, setLoading] = useState(false);

    const handleGeneratePdf = async () => {
        try {
            setLoading(true);

            const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    meetingHistory: meetingHistory,
                }),
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = url;
                a.download = 'meeting_history.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Błąd podczas wysyłania danych do API');
            }
        } catch (error) {
            console.error('Wystąpił błąd: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleGeneratePdf} disabled={loading}>
            {loading ? 'Generowanie...' : 'Generuj PDF'}
        </button>
    );
};

export default GeneratePdfButton;
