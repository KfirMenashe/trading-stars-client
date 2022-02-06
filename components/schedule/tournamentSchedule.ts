import { formatDistance } from "date-fns";
import ITournamentSchedule from "./ITournamentSchedule";

export default class TournamentSchedule implements ITournamentSchedule {
    id: number;
    start: Date;
    name: string;
    state: string;
    enrolled: number;

    constructor(id: number, start: Date, name: string, state: string, enrolled: number) {
        this.id = id;
        this.start = start;
        this.name = name;
        this.state = state;
        this.enrolled = enrolled;
    }
    
    distanceFromStart(now: Date): string {
        return formatDistance(this.start, now, {
            addSuffix: true,
            includeSeconds: true
        })
    }

    

}