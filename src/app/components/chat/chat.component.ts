import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket/socket.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

    public name;
    public message;  
    public activeUser;  
    public messages = [];
    private connectionMessages;  
    private connectionTyping;  

    constructor(private socket:SocketService) {

    }

    ngOnInit() { 
        this.connectionMessages = this.socket.getMessages().subscribe(message => {
            this.activeUser = null;
            this.messages.push(message);
        });

        this.connectionTyping = this.socket.getActiveUser().subscribe(user => {
            this.activeUser = user;
        });
    }

    ngOnDestroy() {
        this.connectionMessages.unsubscribe();
        this.connectionTyping.unsubscribe();
    }  

    sendMsg() {
        this.socket.sendMessage({
            name: this.name,
            message: this.message
        });
    }

    typingMsg() {
        this.socket.sendActiveUser(this.name);
    }
}