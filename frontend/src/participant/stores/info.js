import { writable } from 'svelte/store';

export const token = writable()
export const contract = writable()
export const redeem = writable(false)