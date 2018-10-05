export class Match {
    team1: string;
    team2: string;
    toss: string;
    decision: string;
    overs: number;
    status: string;
    inning: number;

    constructor() {
        this.status = 'running';
        this.inning = 1;
    }
}