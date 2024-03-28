export interface RepairRepository {
    addRepairRequest(repairRequestData: RepairRequestData): Promise<String>;
    getRepairRequestOrNull(id: string): Promise<RepairRequest | null>;
}

export type RepairRequest = {
    id: string,
    created_at: string,
    name: string,
    phone: string,
    address: string,
    mechanic_id: string,
    is_on_site: boolean,
    is_agreed: boolean,
    reservation_date: string,
    is_booted: boolean | null,
    is_powered: boolean | null,
    device_type: string,
    os_type: string,
}


export type RepairRequestData = {
    name: string,
    phone: string,
    address: string,
    mechanic_id: string,
    is_on_site: boolean,
    is_agreed: boolean,
    reservation_date: string,
    is_booted: boolean | null,
    is_powered: boolean | null,
    device_type: string,
    os_type: string,
}
