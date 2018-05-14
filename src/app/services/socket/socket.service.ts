import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as io from "socket.io-client";

@Injectable()
export class SocketService {

    private url : string = "http://localhost:3000";
    private socket: any;

    constructor() {
        
    }

    sendMessage(message) {
        this.socket.emit('chat', message);    
    }

    sendActiveUser(user) {
        this.socket.emit('typing', user);    
    }
  
    getMessages() {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('chat', (data) => {
                observer.next(data);    
            });       
        });     
        return observable;
    }

    getActiveUser() {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('typing', (data) => {
            observer.next(data);    
            });       
        })     
        return observable;
    } 
  
}
