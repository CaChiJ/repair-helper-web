import { Reliability } from "./reliability"

export type Mechanic = {
    id: string, 
    name: string,
    address: string,
    reliability: Reliability,
    rating: number
}
