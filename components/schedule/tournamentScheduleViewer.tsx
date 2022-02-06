import * as React from 'react';
import { Box, Button, Fade } from '@mui/material';
import ITournamentSchedule from './ITournamentSchedule';
import format from 'date-fns/format';
import DistanceToNow from './distanceFromNow';

export default function TournamentScheduleViewer({ tournamentSchedule }: { tournamentSchedule: ITournamentSchedule | null }) {

    return (
        tournamentSchedule ?

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}>

                <Box>{tournamentSchedule.state}</Box>
                <h1>{tournamentSchedule.name}</h1>
                <Box> {format(tournamentSchedule.start, 'MMM dd HH:mm')} </Box>

                <Box sx={{ mt: 2 }}> <DistanceToNow date={tournamentSchedule.start} /></Box>

                <Box sx={{ mt: 5 }}>
                    <Button size="large" variant="contained" color="primary" sx={{ width: '100%' }}>Register</Button>
                    <Button size="large" variant="contained" color="secondary" sx={{ width: '100%', mt: 2 }}>Tournament lobby</Button>
                </Box>

            </Box>

            :
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}>
                <h1>Select tournament</h1>

            </Box>

    );
}
