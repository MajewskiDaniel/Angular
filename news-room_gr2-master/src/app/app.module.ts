import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsEditorComponent } from './news-editor/news-editor.component';
import { FormsModule } from '@angular/forms';
import { NewsRefreshComponent } from './news-refresh/news-refresh.component';
import { RatingComponent } from './rating/rating.component';
import { RatingPipe } from './rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsEditorComponent,
    NewsRefreshComponent,
    RatingComponent,
    RatingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
