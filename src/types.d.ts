import { ICrime, IAvailability, ICategory } from './interfaces'

export function availability(): IAvailability[]
export function categories(): ICategory[]
export function forces(force?: string): Record<string, unknown>[]
export function lastUpdated(): Record<string, unknown>[]
export function stopAndSearch(latitude: number, longitude: number, date?: string): Record<string, unknown>[]
export function streetLevel(latitude: number, longitude: number, date?: string): ICrime[]
