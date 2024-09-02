// frontend/src/app/services/socket.service.ts
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  public sendMessage(message: string) {
    this.socket.emit('sendMessage', message);
  }

  public getMessages(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('receiveMessage', (message: string) => {
        observer.next(message);
      });
    });
  }
}
