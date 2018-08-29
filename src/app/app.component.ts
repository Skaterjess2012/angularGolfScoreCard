import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { TeeDataService } from './services/tee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGolfScoreCard';
  coursesListArray = [];
  pCount: number;

  constructor(private cs: CoursesService, private tees: TeeDataService, private router: Router) {
    cs.getCourseData().subscribe((data) => {
      const d = data.courses;
      this.coursesListArray = d;
    });
  }

  setActiveCourse(activeCourse) {
    this.tees.setTeeData(activeCourse.id);
  }
  submit() {
    if (this.tees.teeData !== undefined) {
      this.tees.playerCount = this.pCount;
      this.router.navigate(['dashboard']);
    } else {
      alert('Please fill in all fields!');
    }
  }
}
