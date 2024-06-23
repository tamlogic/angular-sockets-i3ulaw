import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { WebSocketService } from './web-socket.service';

@Injectable()
export class ChatService {

  messages: Subject<any>;

  constructor(private webSocketService: WebSocketService) {
    this.messages = <Subject<any>>this.webSocketService.connect();
  }

  sendMessage(message) {
    this.messages.next(message);
  }

}