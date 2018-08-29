import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courseListUrl = 'https://uxcobra.com/golfapi/courses.txt';
  courseListArray: Array<any>;

  constructor(private http: HttpClient) {
  }
  getCourseData(): Observable<any> {
    return this.http.get(this.courseListUrl);
  }
}
