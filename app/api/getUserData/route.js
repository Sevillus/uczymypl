import { getSession } from 'next-auth/react';
import User from '../../../models/user';
import { connectToDB } from "../../../utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req, res) {
    // Nawiąż połączenie z bazą danych
    await connectToDB();

    // Pobierz aktualną sesję użytkownika
    const session = await getServerSession(authOptions);

    try {
        if (req.method === 'GET') {
            // Pobierz dane użytkownika na podstawie sesji
            const sessionUser = await User.findOne({ email: session?.user.email });

            if (!sessionUser) {
                return new Response("Nie znaleziono użytkownika", { status: 404 });
            }

            // Zwróć dane użytkownika jako odpowiedź JSON
            return new Response(JSON.stringify(sessionUser.students), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }
    } catch (error) {
        console.error('Błąd pobierania danych użytkownika: ', error);
        return new Response("Błąd serwera", { status: 500 });
    }
}