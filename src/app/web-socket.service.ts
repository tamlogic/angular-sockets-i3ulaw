import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import * as Rx from 'rxjs';

@Injectable()
export class WebSocketService {

  private socket;
  private ws_url = '';

  constructor() {}

  connect(): Subject<MessageEvent> {
    this.socket = io(this.ws_url);
    let observable = new Observable(observer => {
      this.socket.on('message', data => {
        console.log('Received a message from WebSocket: ', data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      }
    };
    return Subject.create(observer, observable);
  }
} 