import useUserData from "../hooks/useUserData";
import {renderHook} from "@testing-library/react";
import axios from "axios";
import {act} from "react-dom/test-utils";

// Mockowanie modułu axios w celu symulowania odpowiedzi z API
jest.mock('axios');

// Symulowanie danych odpowiedzi z API
const daneUzytkownika = {
    students: [
        { id: 1, name: 'Student 1' },
        { id: 2, name: 'Student 2' },
    ],
    target: 100,
};

describe('custom hook useUserData', () => {
    it('should get data from api and update', async () => {
        axios.get.mockResolvedValue({ data: daneUzytkownika });

        const { result } = renderHook(() => useUserData());

        // Oczekujemy na zaktualizowanie stanu po pobraniu danych
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });

        // isLoading should be false
        expect(result.current.isLoading).toBe(false);

        // data should update
        expect(result.current.userStudents).toEqual(daneUzytkownika.students);
        expect(result.current.userTarget).toEqual(daneUzytkownika.target);
    });

    it('powinien obsłużyć błąd przy pobieraniu danych z API', async () => {
        axios.get.mockRejectedValue(new Error('Błąd API'));

        const { result } = renderHook(() => useUserData());

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });

        //expected results
        expect(result.current.isLoading).toBe(false);
        expect(result.current.userStudents).toEqual([]);
        expect(result.current.userTarget).toEqual(0);
    });
});