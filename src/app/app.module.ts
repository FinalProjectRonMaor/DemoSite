import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { QuestionsComponent, WordCountValidatorDirective } from './questions/questions.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { FinishingScreenComponent } from './finishing-screen/finishing-screen.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NoResGuard } from './no-res.guard';

export function playerFactory() {
  return player;
}

const appRoutes :Routes = [
  {path:'',redirectTo:'/questions', pathMatch:'full'},
  {path:'questions', component: QuestionsComponent},
  {path:'finish', component: FinishingScreenComponent, canActivate: [NoResGuard]}
] 

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    FinishingScreenComponent,
    LoaderComponent,
    WordCountValidatorDirective
  ],
  imports: [
    MatProgressBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NoResGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
