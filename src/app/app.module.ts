import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // te permite ocupar el ng model
import { ReactiveFormsModule} from '@angular/forms'; // <- importar formularios reactivos
import { StoreModule} from '@ngrx/store'; // <-redux
import { StoreDevtoolsModule } from '@ngrx/store-devtools';  // <-redux dev tools

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/public/nav-bar/nav-bar.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { HomeComponent } from './views/public/home/home.component';
import { CalificacionesComponent } from './views/public/calificaciones/calificaciones.component';
import { CardComponent } from './components/card/card.component';
import {environment} from '../environments/environment';
import {updateNavIdReducer} from '../redux/redirect.residentes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CalificacionesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // la primera parte la das tu
    StoreModule.forRoot({
      updateNav: updateNavIdReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
