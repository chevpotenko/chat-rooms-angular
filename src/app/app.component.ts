import { Component } from '@angular/core';
import { SharedService } from './services/shared/shared.service';
import { DataService } from './services/data/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public sharedData;

    constructor(private sharedService: SharedService,
                private dataService: DataService) {
        this.sharedData = this.sharedService.data;
    }
    
    ngOnInit() {
        this.dataService.getAll('api/user/signin').subscribe((res) => {
            var data: any = res;
            console.log(data)
            this.sharedService.setIsLogin(data.value);
        }); 
    }
}