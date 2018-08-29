import { Component, OnInit } from '@angular/core';
import { TeeDataService } from '../services/tee-data.service';
import { Router } from '@angular/router';
import { Player } from '../interfaces/player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teeData: Object;
  holesArray: Array<object>;
  players = [];

  constructor(private tees: TeeDataService, private router: Router) {
    // tslint:disable-next-line:semicolon
    if (tees.teeDataId === undefined) {
      this.router.navigate(['']);
    } else {
      this.getTeeData();
    }
  }

  getTeeData() {
    const id = this.tees.teeDataId;
    const pCount = this.tees.playerCount;
    this.createPlayers(pCount);
    this.tees.getTeeData(id).subscribe(data => {
      const dataObj = data.data;
      console.log(dataObj);
      this.holesArray = dataObj.holes;
    });
  }
  createPlayers(numPlayers: number) {
    for (let i = 0; i < numPlayers; i++) {
      const newPlayer: Player = {
        name: `Player${i + 1}`,
        handicap: '',
      };
      this.players.push(newPlayer);
    }
  }

  ngOnInit() {
  }

}
