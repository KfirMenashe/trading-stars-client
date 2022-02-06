
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Dispatch, SetStateAction } from 'react';
import ITournamentSchedule from './ITournamentSchedule';
import format from 'date-fns/format';
import TournamentSchedule from './tournamentSchedule';
import { styled } from '@mui/material/styles';


export default function ScheduleTable({rows, onSelectedTournamentScheduleChanged }: {rows:ITournamentSchedule[], onSelectedTournamentScheduleChanged: Dispatch<SetStateAction<ITournamentSchedule | null>> }) {
    const [selectedTournamentId, setSelectedTournamentId] = React.useState(-1);

    const tournamentScheduleClicked = (tournamentSchedule: ITournamentSchedule) => {
        setSelectedTournamentId(tournamentSchedule.id);
        onSelectedTournamentScheduleChanged(tournamentSchedule);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            fontWeight: 'bold'
        }

    }));



    return (
        <TableContainer sx={{ height: '100%' }}>
            <Table stickyHeader aria-label="Tournament schedule">
                <TableHead>
                    <TableRow>
                        <StyledTableCell data-testid="start-header" >Start</StyledTableCell>
                        <StyledTableCell data-testid="name-header">Name</StyledTableCell>
                        <StyledTableCell data-testid="state-header">State</StyledTableCell>
                        <StyledTableCell data-testid="enrolled-header">Enrolled</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            selected={row.id === selectedTournamentId}
                            onClick={() => tournamentScheduleClicked(row)}
                        >
                            <TableCell >{format(row.start, 'MMM dd HH:mm')}</TableCell>
                            <TableCell >{row.name}</TableCell>
                            <TableCell >{row.state}</TableCell>
                            <TableCell >{row.enrolled}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>





    );
}
