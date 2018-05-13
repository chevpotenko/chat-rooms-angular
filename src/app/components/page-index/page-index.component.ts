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
    public todoList;
    public indexOfActiveRoom;
    public sharedData;  

    constructor(private dataService: DataService,
                private sharedService: SharedService){
        this.sharedData = sharedService.data;
    }

    ngOnInit(){
        this.dataService.getAll('api/rooms').subscribe(data => {this.rooms = data;});
        this.dataService.getAll('api/users').subscribe(data => {this.users = data; console.log(this.users)});
    }

    selectRoom(item) {
        this.todoList = this.rooms[item].todo;
        this.indexOfActiveRoom = item;
    }

    addRoom(name){
        var room = {
            id: this.rooms.length,
            name: name,
            todo: []
        };
        this.dataService.add('api/rooms', room).subscribe(data => {
            this.rooms.push(room);
        });    
    }

    deleteRoom(index){
        this.dataService.delete('api/rooms/', index + 1).subscribe(data => {
            this.rooms.splice(index, 1);
        }); 
    }

    addTask(task){
        var index = this.indexOfActiveRoom ;
        var item = { 
            id: this.rooms[index].id,
            name: this.rooms[index].name,
            todo: this.rooms[index].todo.push(task)
        }; 
        this.dataService.update('api/rooms/', index + 1, item).subscribe(data => {
            this.rooms[this.indexOfActiveRoom].todo.push(task);
        });    
    }  

    deleteTask(index){
        var indexRoom = this.indexOfActiveRoom;
        var item = { 
            id: this.rooms[indexRoom].id,
            name: this.rooms[indexRoom].name,
            todo: this.rooms[indexRoom].todo.splice(index, 1)
        };
        this.dataService.update('api/rooms/', index + 1, item).subscribe(data => {
            this.rooms[this.indexOfActiveRoom].todo.splice(index, 1);
        });    
    }

}