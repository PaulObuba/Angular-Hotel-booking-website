import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { ServicesComponent } from './components/services/services.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    ServicesComponent,
    RoomsComponent,
    GalleryComponent,
    WelcomeComponent,
    TestimoniesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
