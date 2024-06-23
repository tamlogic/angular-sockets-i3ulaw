import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WebSocketService } from './web-socket.service';
import { ChatService } from './chat.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [WebSocketService, ChatService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
