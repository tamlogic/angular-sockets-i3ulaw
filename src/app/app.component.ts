import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.messages.subscribe(message => console.log(message));
  }

  sendMessage() {
    this.chatService.sendMessage('Test');
  }

}
