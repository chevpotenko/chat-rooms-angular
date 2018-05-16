import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { SharedService } from '../../../services/shared/shared.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    public err:string = '';

	constructor(private dataService: DataService,
				private sharedService: SharedService,
				private router: Router) {

	}

	ngOnInit() {
		
	}

	signUp(e, email, password) {
		e.preventDefault();
        this.dataService.add('api/users/', { email, password }).subscribe(
            (user) => {   
				this.err = '';
				this.router.navigate(['/']);
				this.sharedService.setIsLogin(true);
			},
			(err) => {
				if(Array.isArray(err.error.message)){
					this.err = err.error.message.join(', ');
				}else{          
					this.err = err.error.message;
				}                
			}
		);		   
	}

}
