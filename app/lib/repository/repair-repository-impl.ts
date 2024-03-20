import { sql } from "@vercel/postgres";
import { RepairRepository, RepairRequest, RepairRequestData } from "./repair-repository";
import { unstable_noStore } from "next/cache";

export default class RepairRepositoryImpl implements RepairRepository {
    async addRepairRequest(r: RepairRequestData): Promise<String> {
        unstable_noStore();

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

    async getRepairRequestOrNull(id: string): Promise<RepairRequest | null> {
        unstable_noStore();

        try {
            const data = await sql<RepairRequest>`SELECT * FROM repair_requests WHERE id=${id}`;

            if (data.rows.length === 0) {
                return null;
            }
            
            return data.rows[0];
        } catch(error) {
            console.error(`Database Error: ${error}`);
            // throw new Error('Failed to get repair request data by id')
            return null;
        }
    }
}