import { Box } from '@mui/system';
import { Dispatch, SetStateAction, useState } from 'react';
import ITournamentSchedule from '../components/schedule/ITournamentSchedule';
import ScheduleTable from '../components/schedule/scheduleTable';
import TournamentScheduleViewer from '../components/schedule/tournamentScheduleViewer';
import { Fade } from '@mui/material';
import TournamentSchedule from '../components/schedule/tournamentSchedule';



const rows: ITournamentSchedule[] = [
    new TournamentSchedule(1, new Date(2022, 1, 4, 17, 0, 0, 0), 'Scalpers quest hyper 5min', 'Late registration', 104),
    new TournamentSchedule(2, new Date(2022, 1, 4, 17, 5, 0, 0), 'Scalpers quest hyper 5min', 'Late registration', 104),
    new TournamentSchedule(3, new Date(2022, 1, 4, 17, 10, 0, 0), 'Scalpers quest turbo 10min', 'Late registration', 104),
    new TournamentSchedule(4, new Date(2022, 1, 4, 17, 15, 0, 0), 'Scalpers quest turbo 10min', 'Late registration', 104),
    new TournamentSchedule(5, new Date(2022, 1, 4, 17, 20, 0, 0), 'Scalpers quest regular 15min', 'Late registration', 104),
    new TournamentSchedule(6, new Date(2022, 1, 4, 17, 25, 0, 0), 'Scalpers quest regular 15min', 'Late registration', 104),
    new TournamentSchedule(7, new Date(2022, 1, 4, 17, 30, 0, 0), 'Scalpers quest slow 60min', 'Registering', 104),
    new TournamentSchedule(8, new Date(2022, 1, 4, 17, 35, 0, 0), 'Scalpers quest slow 60min', 'Registering', 104),
    new TournamentSchedule(9, new Date(2022, 1, 4, 17, 40, 0, 0), 'Scalpers quest 5min', 'Registering', 104),
    new TournamentSchedule(10, new Date(2022, 1, 4, 17, 45, 0, 0), 'Scalpers quest 5min', 'Registering', 104),
    new TournamentSchedule(11, new Date(2022, 1, 4, 17, 50, 0, 0), 'Scalpers quest 5min', 'Registering', 104),
    new TournamentSchedule(12, new Date(2022, 1, 4, 17, 55, 0, 0), 'Scalpers quest 5min', 'Registering', 104),
    new TournamentSchedule(13, new Date(2022, 1, 4, 18, 0, 0, 0), 'Scalpers quest 5min', 'Registering', 104),
    new TournamentSchedule(14, new Date(2022, 1, 4, 18, 5, 0, 0), 'Scalpers quest 5min', 'Registering', 104),
    new TournamentSchedule(15, new Date(2022, 1, 4, 18, 10, 0, 0), 'Scalpers quest 5min', 'Registering', 104),
    new TournamentSchedule(16, new Date(2022, 1, 4, 18, 15, 0, 0), 'Scalpers quest 5min', 'Registering', 104),
    new TournamentSchedule(17, new Date(2022, 1, 4, 18, 20, 0, 0), 'Scalpers quest 5min', 'Registering', 104),
    new TournamentSchedule(18, new Date(2022, 1, 4, 18, 25, 0, 0), 'Scalpers quest 5min', 'Registering', 104),

];



const Schedule = () => {

    const [selectedTournamentSchedule, setSelectedTournamentSchedule] = useState<ITournamentSchedule | null>(null);
    const [isVisible, setIsVisible] = useState(true);


    const onSelectedTournamentScheduleChanged: Dispatch<SetStateAction<ITournamentSchedule | null>> = ts => {

        setIsVisible(false);
        setTimeout(() => {
            setSelectedTournamentSchedule(ts);
        },100);

        setTimeout(() => {
            setIsVisible(true);
        }, 150);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            px: 2,
            py: 2
        }}>
            <Box sx={{ width: '70%', height: '100%', overflow: 'hidden' }}  >
                <ScheduleTable rows={rows} onSelectedTournamentScheduleChanged={onSelectedTournamentScheduleChanged} />
            </Box>

            <Fade in={isVisible} timeout={{enter:500, exit:50}} appear={true}>    
                <Box sx={{ width: '30%', height: '100%' }}>
                    <TournamentScheduleViewer tournamentSchedule={selectedTournamentSchedule}/>
                </Box>
            </Fade>



        </Box>

    )
}

export default Schedule;
