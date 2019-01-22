import { ICrime } from './interfaces'

export function availability(): object[]
export function categories(): object[]
export function forces(force?: string): object[]
export function lastUpdated(): object[]
export function stopAndSearch(latitude: number, longitude: number, date?: string): object[]
export function streetLevel(latitude: number, longitude: number, date?: string): ICrime[]
