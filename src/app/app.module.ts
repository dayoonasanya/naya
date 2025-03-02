import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { HomeComponent } from './components/home/home.component';
import { LiveMapComponent } from './components/live-map/live-map.component';
import { HeaderComponent } from './components/header/header.component'; // ✅ Import Header
import { FooterComponent } from './components/footer/footer.component'; // ✅ Import Footer

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveMapComponent,
    HeaderComponent, // ✅ Add Header
    FooterComponent  // ✅ Add Footer
  ],
  imports: [
    BrowserModule,
    RouterModule, // ✅ Ensure this is present
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
