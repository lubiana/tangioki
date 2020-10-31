import { LandTile } from '../types/LandTile';
import { Beach, generateBeach } from '../types/Beach';
const landGenerator = (B: Beach[], name: string, points: number, beaches: Beach[]): LandTile => {
    const beachIds: number[] = []
    beaches.forEach((beach: Beach) => {
        const beachId: number = B.push(beach) - 1
        beachIds.push(beachId)
    })

    return {
        name: name,
        points: points,
        beachIds: beachIds,
    }
}

const lands = (B: Beach[]): LandTile[] => {
    return [
        landGenerator(B, 'Tonga', 0, [
            generateBeach(6),
            generateBeach(6),
            generateBeach(6),
            generateBeach(6),
            generateBeach(6),
            generateBeach(6),
        ]),
        landGenerator(B, 'Haiti', 2, [
            generateBeach(2),
            generateBeach(3),
        ]),
    ]
}

export default lands



