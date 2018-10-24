import { Injectable } from '@angular/core';
import { Match } from '../models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {
  match: Match;
  constructor() { }
  setMatch(m: Match) {
    this.match = m;
  }
  getMatch() {
    return this.match;
  }
}
