import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})

export class DiaryComponent implements OnInit { 

  myDate = Date.now();
  
  diaries: Diary[] = [
    new Diary(1, 'I had a stomach ache', 'I woke up in the morning and my stomach was in pain', new Date(2020, 4, 31)),
    new Diary(2, 'Doing my chores', 'I have to clean my room and wash the utensils', new Date(2020, 5, 7)),
    new Diary(3, 'Get new Phone Case', 'Go to town to buy a customized case', new Date(2020,4, 11)),
    new Diary(4, 'Buy new clothes', 'Save my money to buy new trousers,jackets and tops', new Date(2020, 5, 1)),
    new Diary(5, 'Do a scrap book', 'To keep myself busy when i am free', new Date(2021, 5, 1)),
    new Diary(6, 'Take more photos', 'Use my camera more', new Date(2020, 11, 25)),
  ];

  addNewDiary(diary){
    let diaryLength = this.diaries.length;
    diary.id = diaryLength + 1;
    diary.completeDate = new Date (diary.completeDate)
    this.diaries.push(diary)
  }


  toggleDetails(index){
    this.diaries[index].showDescription = !this.diaries[index].showDescription;
  }

  deleteDiary(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.diaries[index].name}?`)

      if (toDelete){
        this.diaries.splice(index, 1)
      }
    }
  }




  // deleteGoal(isComplete, index) {
  //   if (isComplete) {
  //     let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

  //     if (toDelete) {
  //       this.goals.splice(index, 1)
  //     }
  //   }
  // }
  // toggleDetails(index) {
  //   this.goals[index].showDescription = !this.goals[index].showDescription;
  // }

  // diaries: Diary[] = [
  //   { id: 1, name: 'I had a stomach ache', description: 'I woke up in the morning and my stomach was in pain' },
  //   { id: 2, name: 'Doing my chores', description: 'I have to clean my room and wash the utensils' },
  //   { id: 3, name: 'Get new Phone Case', description: 'Go to town to buy a customized case' },
  //   { id: 4, name: 'Buy new clothes', description: 'Save my money to buy new trousers,jackets and tops' },
  //   { id: 5, name: 'Do a scrap book', description: 'To keep myself busy when i am free' },
  //   { id: 6, name: 'Take more photos', description: 'Use my camera more' },
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
