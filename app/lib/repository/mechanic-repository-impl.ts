import { sql } from "@vercel/postgres";
import { MechanicRepository, Mechanic } from "./mechanic-repository";
import { unstable_noStore } from "next/cache";

export default class MechanicRepositoryImpl implements MechanicRepository {
    async getMechanics(): Promise<Mechanic[]> {
        unstable_noStore();

        try {
            const data = await sql<Mechanic>`SELECT * FROM mechanics`;
            return data.rows;
        } catch (error) {
            console.error(`Database Error: ${error}`);
            throw new Error('Failed to fetch mechanics data');
        }
    }
}