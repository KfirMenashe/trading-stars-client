export default interface ITournamentSchedule {
    id: number;
    start: Date;
    name: string;
    state: string;
    enrolled: number;
    distanceFromStart: (now: Date) => string;
}