export interface MechanicRepository {
    getMechanics(): Promise<Mechanic[]>
}

export type Mechanic = {
    id: string, 
    name: string,
    address: string,
    reliability: Reliability,
    rating: number
}

export enum Reliability {
    DANGEROUS,
    SUSPECTED,
    SAFE,
}