import { PDFDocument, rgb, StandardFonts, PageSizes } from 'pdf-lib';

const generatePDF = async (meetingHistory) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage(PageSizes.A4); // Ustaw rozmiar strony na A4
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Definiuj kolumny i ich szerokości
    const columns = ['Name', 'Price', 'Time', 'IsPaid'];
    const columnWidths = [120, 60, 100, 80];

    const table = {
        headers: columns,
        rows: [],
    };

    // Dodaj dane do tabeli
    table.rows.push(columns.map(header => ({ text: header, font, color: rgb(0, 0, 0) })));

    for (const meeting of meetingHistory) {
        table.rows.push([
            { text: meeting.name, font, color: rgb(0, 0, 0) },
            { text: `${meeting.price} PLN`, font, color: rgb(0, 0, 0) },
            { text: meeting.time, font, color: rgb(0, 0, 0) },
            { text: meeting.isPaid ? 'true' : 'false', font, color: rgb(0, 0, 0) },
        ]);
    }

    // Ustaw pozycje początkową tabeli
    const tableX = 50;
    const tableY = page.getHeight() - 50;

    // Rysuj tabelę
    // drawTable(page, table, tableX, tableY, columnWidths);

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
};

function drawTable(page, table, x, y, columnWidths) {
    const tableHeight = table.rows.length * 20; // Wysokość tabeli
    const tableWidth = columnWidths.reduce((a, b) => a + b, 0); // Szerokość tabeli
    //
    // // Rysuj ramkę tabeli
    // page.drawRectangle({
    //     x,
    //     y,
    //     width: tableWidth,
    //     height: tableHeight,
    //     borderColor: rgb(0, 0, 0),
    //     borderWidth: 1,
    // });

    // Rysuj nagłówki kolumn
    for (let i = 0; i < table.headers.length; i++) {
        page.drawText(table.headers[i], {
            x: x + columnWidths.slice(0, i).reduce((a, b) => a + b, 0),
            y: y - 15,
            font: table.rows[0][i].font,
            color: rgb(0, 0, 0),
        });
    }

    // Rysuj zawartość tabeli
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.headers.length; j++) {
            page.drawText(table.rows[i][j].text, {
                x: x + columnWidths.slice(0, j).reduce((a, b) => a + b, 0),
                y: y - 20 - i * 20,
                font: table.rows[i][j].font,
                color: table.rows[i][j].color,
            });
        }
    }
}

export { generatePDF };
