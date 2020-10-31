import { Button, Chip } from '@material-ui/core';
import React from 'react'
import { Beach } from '../types/Beach';
import { Moves } from '../types/Moves';

interface BeachProps {
    beach: Beach
    beachIndex: number
    moves: Moves
    boatToPlace: number
}

const BeachView: React.FC<BeachProps> = ({ beach, beachIndex, moves, boatToPlace }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={() => { moves.placeBoat(beachIndex) }}
            disabled={boatToPlace === -1 || beach.capacity.length === beach.playerIds.length}
        >
            {beach.capacity.map((value: number, index: number) => {
                if (index < beach.playerIds.length) {
                    return (
                        <Chip label={beach.playerIds[index]} key={index} size='small' color='primary' />
                    )
                }
                return (
                    <Chip label="&nbsp;" key={index} size='small' variant='outlined' />
                )
            })}
        </Button>
    )
}

export default BeachView