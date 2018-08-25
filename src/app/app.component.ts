import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGolfScoreCard';
  coursesListArray = [];
  courseListUrl = 'https://uxcobra.com/golfapi/courses.txt';

  constructor(private http: HttpClient) {
    this.setCourseList();
  }
  getConfig(url) {
    return this.http.get(url);
  }
  setCourseList() {
   const stuff = this.http.get(this.courseListUrl)
    .subscribe((data) => {
      const courses = data.courses;
      courses.forEach(course => {
        this.coursesListArray.push(course);
      });
    });
  }
}
