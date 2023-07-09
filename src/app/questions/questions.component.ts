// import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-questions',
//   templateUrl: './questions.component.html',
//   styleUrls: ['./questions.component.css']
// })
// export class QuestionsComponent implements OnInit{


//   // questions :any[] = 
//   // [
//   //   {title: 'name', question: "What is your name?", type:'text'},
//   //   {title: 'lastName', question: "What is your last name?", type:'text'},
//   //   {title: 'where', question: "Where are you from?", type:'text'},
//   //   {title: 'how', question: "How was your day?", type:'text'},
//   //   {title: 'rate', question: "Rate how mad you are from 1 to 10?", type:'number', range: {min:0,max:10}},
//   //   {title: 'gender', question: "what is your gender?", type:'list', options: ['Male', 'Female', 'Other']},   
//   // ];



//   constructor() { }

//   ngOnInit(): void {
//   }

//   onSubmit(form: any){
//     console.log(form.value);
//     // form.reset();
//   }

// }


import { Component, Directive, EventEmitter, Output, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NgForm, ValidationErrors, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/aiModelApi.service';
import { DataStorageService } from '../shared/data-storage.service';
import { FormSubmitService } from '../shared/form-submit.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {


  @ViewChild('f', { static: false }) signupForm: NgForm;
  patienceUser: string;

  constructor(private dataStorageService : DataStorageService, 
    private formSubmitService: FormSubmitService,
    private router: Router, 
    private aiService: ApiService) {}


  onSubmit() {
    // this.submitted = true;
    // this.user.username = this.signupForm.value.userData.username;
    // this.user.email = this.signupForm.value.userData.email;
    // this.user.secretQuestion = this.signupForm.value.secret;
    // this.user.answer = this.signupForm.value.questionAnswer;
    // this.user.gender = this.signupForm.value.gender;
    //console.log(this.signupForm.value);
    this.formSubmitService.onSubmit(this.signupForm.value);
    //this.apiService.predict(this.signupForm.value).subscribe( res => console.log("RES: "+res));;
    this.aiService.sentRequest = true;
    this.router.navigate(['../finish']);
    this.signupForm.reset();
  }

  
}




@Directive({
  selector: '[wordCountValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: WordCountValidatorDirective,
      multi: true
    }
  ]
})
export class WordCountValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    const wordCount: number = this.countWords(value);

    if (wordCount < 20) {
      return { wordCountValidator: true };
    }

    return null;
  }

  private countWords(value: string): number {
    const words: string[] = value.trim().split(/\s+/);
    return words.length;
  }
}