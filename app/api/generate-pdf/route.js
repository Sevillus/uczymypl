import {generatePDF} from "../../../utils/generatePdf";


export async function POST(req) {

    const body = await req.json();

        if (body) {
           const pdfBuffer = await generatePDF(body.meetingHistory)
            return new Response(pdfBuffer, { status: 200 });
        } else {
            return new Response("Invalid or missing student data in request body", { status: 400 });
        }

}
