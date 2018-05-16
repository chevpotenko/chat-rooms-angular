import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { SharedService } from '../../services/shared/shared.service';

@Component({
    selector: 'app-page-index',
    templateUrl: './page-index.component.html',
    styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {

    public rooms;
    public users;
    public currentRoom;
    public sharedData;  

    constructor(private dataService: DataService,
                private sharedService: SharedService){
        this.sharedData = sharedService.data;
    }

    ngOnInit() {
        this.dataService.getAll('api/rooms').subscribe(rooms => { this.rooms = rooms });
        this.dataService.getAll('api/users').subscribe(users => { this.users = users });
    }

    selectRoom(id) {
        this.currentRoom = this.rooms.find((item, index) => { 
            return item.id === id 
        });
    }

    addRoom(name) {
        var newRoom = {
            name: name,
            todo: []
        };
        this.dataService.add('api/rooms', newRoom).subscribe(room => {
            this.rooms.push(room);
        });    
    }

    deleteRoom(id) {
        this.rooms = this.rooms.filter(room => room.id !== id);
        this.dataService.delete('api/rooms/', id).subscribe(); 
    }

    addTask(task) {
        this.currentRoom.todo.push(task);
        var id = this.currentRoom.id;        
        var item = {
            name: this.currentRoom.name,
            todo: this.currentRoom.todo
        };       
        this.dataService.update('api/rooms/', id, item).subscribe();    
    }  

    deleteTask(index) {
        this.currentRoom.todo.splice(index, 1);
        var id = this.currentRoom.id;
        var item = { 
            id: this.currentRoom.id,
            name: this.currentRoom.name,
            todo: this.currentRoom.todo
        };
        this.dataService.update('api/rooms/', id, item).subscribe();    
    }

}