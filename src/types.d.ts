import { ICrime, IAvailability, ICategory } from './interfaces'

export function availability(): IAvailability[]
export function categories(): ICategory[]
export function forces(force?: string): object[]
export function lastUpdated(): object[]
export function stopAndSearch(latitude: number, longitude: number, date?: string): object[]
export function streetLevel(latitude: number, longitude: number, date?: string): ICrime[]
