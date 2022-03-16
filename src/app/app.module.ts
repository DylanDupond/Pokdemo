import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdSearchComponent } from './id-search/id-search.component';
import { InterfaceComponent } from './interface/interface.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
