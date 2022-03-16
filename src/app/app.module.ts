import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdSearchComponent } from './id-search/id-search.component';
import { InterfaceComponent } from './interface/interface.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    IdSearchComponent,
    InterfaceComponent,
    FilterPokemonPipePipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
