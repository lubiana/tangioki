import { Player } from './Player'
import { Beach } from './Beach';
import { LandTile } from './LandTile';

export interface GameState {
    players: Player[]
    beaches: Beach[]
    clicks: number
    boatsInHand: number[]
    landTiles: LandTile[]
    boatToPlace: number
    boatsPicked: boolean
}