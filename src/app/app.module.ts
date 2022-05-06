import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CardsComponent } from './cards/cards.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, CardsComponent, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
