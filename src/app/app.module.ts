import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board.component';
import { GameService } from './components/game.service';

@NgModule({
  declarations: [AppComponent, BoardComponent ],
  imports: [BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
