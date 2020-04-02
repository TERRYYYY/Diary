import { Component } from '@angular/core';
import { Diary } from './diary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDate = Date.now();
   diaries: Diary[] = [
    new Diary(  1, 'I had a stomach ache', 'I woke up in the morning and my stomach was in pain', new Date(2020,4,31) ),
     new Diary(2, 'Doing my chores', 'I have to clean my room and wash the utensils', new Date(2020,5,7) ),
     new Diary(3, 'Get new Phone Case', 'Go to town to buy a customized case', new Date(2020,4,11) ),
     new Diary(4, 'Buy new clothes', 'Save my money to buy new trousers,jackets and tops', new Date(2020,5,1)),
     new Diary(5, 'Do a scrap book', 'To keep myself busy when i am free', new  Date(2021,5,1) ),
     new Diary(6, 'Take more photos', 'Use my camera more', new Date(2020,11,25) ),
  ];

  constructor(){

  }
}

