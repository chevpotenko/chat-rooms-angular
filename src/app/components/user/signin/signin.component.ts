import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	public err;

	constructor(private dataService: DataService,
				private sharedService: SharedService,
				private router: Router) { }

	ngOnInit() {}

	submit($event, id, email, password){
        this.dataService.add('api/users/', {id, email, password}).subscribe(
            (user) => {   
				this.err = '';
				this.router.navigate(['/']);
				this.sharedService.setIsLogin(true);
			}
		);		   
	}

}
