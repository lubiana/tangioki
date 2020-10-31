import React from 'react'
import { Player } from '../types/Player';

interface BeachProps {
    P: Player
    Index: number
}

const PlayerView: React.FC<BeachProps> = ({ P, Index }) => {
    return (
        <p>Index: {Index} Name: {P.name}, Boats: {P.boats}, ID: {P.id}</p>
    )
}

export default PlayerView