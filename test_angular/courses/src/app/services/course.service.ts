import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/courses.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 
  public API: string = 'http://localhost:3000/courses';
  constructor(public http: HttpClient) { }
  getAllCourses() {
    return this.http.get<Course[]>( this.API );
  }
  getCourse(id:number){
    return this.http.get<Course>(`${this.API}/${id}`);
  }
  addCourse(course:Course){
    return this.http.post<Course>(this.API,course); 
  }
  updateCourse(course:Course){
    return this.http.put<Course>(`${this.API}/${course.id}`,course)
  }
  deleteCourse(id:number){
    return this.http.delete<Course>(`${this.API}/${id}`); 
  }
}
