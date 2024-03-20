import { sql } from "@vercel/postgres";
import { RepairRepository, RepairRequestData } from "./repair-repository";
import { unstable_noStore } from "next/cache";

export default class RepairRepositoryImpl implements RepairRepository {
    async addRepairRequest(r: RepairRequestData): Promise<String> {
        unstable_noStore();

// INSERT INTO Table2 (val)
// VALUES ((INSERT INTO Table1 (name) VALUES ('a_title') RETURNING id));

        try {
            const result = await sql<{id: string}>`
                INSERT INTO repair_requests (name, phone, address, mechanic_id, is_on_site, is_agreed, reservation_date, is_booted, is_powered)
                VALUES (${r.name}, ${r.phone}, ${r.address}, ${r.mechanic_id}, ${r.is_on_site}, ${r.is_agreed}, ${r.reservation_date}, ${r.is_booted}, ${r.is_powered})
                RETURNING id;
            `;

            return result.rows[0].id;
        } catch (error) {
            console.error(`Database Error: ${error}`);
            throw new Error('Failed to insert repair request data');
        }
    }
}