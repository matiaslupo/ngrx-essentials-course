import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { MatListModule } from '@angular/material/list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CategoryListPresenter } from './category-list/category-list-presenter/category-list-presenter.component';
import { CategoryListContainer } from './category-list/category-list-container/category-list-container.component';
import { categoriesReducer } from './state/reducer';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListPresenter,
    CategoryListContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      categories: categoriesReducer
    }),
    MatListModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
