import { NgModule } from '@angular/core';
import { WebBasedSentimentAnalysisApiComponent } from './web-based-sentiment-analysis-api.component';
import { ApiService } from './services/aiModelApi.service';



@NgModule({
  declarations: [
    WebBasedSentimentAnalysisApiComponent,
  ],
  imports: [
  ],
  exports: [
    WebBasedSentimentAnalysisApiComponent,
  ],
  providers: [
    ApiService
  ]
})
export class WebBasedSentimentAnalysisApiModule { }
