import { Note } from "../client-detail/note.model";

export class DashboardClient {
    id: number;
    name: string;
    representative: string;
    comodity: string;
    startDate: string;
    endDate: string;
    price: string;
    notes: Note[];
}