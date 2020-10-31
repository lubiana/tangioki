import { generateBeach, Beach } from '../types/Beach';
import { LandTile } from '../types/LandTile';
export let defaultBeaches: Beach[] = [
    generateBeach(5),
    generateBeach(4),
    generateBeach(3),
    generateBeach(2),
]
export const defaultLand: LandTile[] = [{
    name: 'Tonga',
    points: 0,
    beachIds: defaultBeaches.map((beach: Beach, index: number) => index)
}]

