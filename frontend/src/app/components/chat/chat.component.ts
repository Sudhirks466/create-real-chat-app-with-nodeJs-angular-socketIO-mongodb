// frontend/src/app/components/chat/chat.component.ts
import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string = '';
  messages: string[] = [];

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.socketService.sendMessage(this.message);
      this.message = '';
    }
  }
}
