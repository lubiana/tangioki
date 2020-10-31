import { GameState } from './GameState';
import { Ctx } from 'boardgame.io';
export interface Moves {
    click: (G: GameState, ctx: Ctx) => void
    placeBoat: (beachIndex: number) => void | string
    selectBoatToPlace: (boatIndex: number) => void
    pickBoats: (amount?: number) => void
}