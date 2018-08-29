import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeeDataService {
  teeDataId: number;
  teeData: Array<any>;
  playerCount: number;
  name: String = '';
  constructor(private http: HttpClient) {}
  getTeeData(id): Observable<any> {
    this.teeDataId = id;
    const courseURL = `https://uxcobra.com/golfapi/course${id}.txt`;
    return this.http.get(courseURL);
  }
  setTeeData(id) {
    this.getTeeData(id).subscribe(data => {
      const teeData = data.data;
      this.teeDataId = teeData.id;
      this.teeData = teeData;
    });
  }
}
