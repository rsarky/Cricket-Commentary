import { Comment } from './Comment';

export class Match {
    dbKey: string; //The unique firebase list id.
    team1: string;
    team2: string;
    toss: string;
    decision: string;
    overs: number;
    status: string;
    inning: number;
    score: {
        runs: number,
        wickets: number,
        overs: number,
        balls: number
    }
    comments: {
        innings1: Comment[],
        innings2: Comment[]
    }

    constructor() {
        this.score  = {
            runs: 0,
            wickets: 0,
            overs: 0,
            balls: 1
        }
        this.status = 'running';
        this.inning = 1;
    }
}