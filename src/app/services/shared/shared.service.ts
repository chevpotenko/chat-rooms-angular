import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public data = {
        isLogin: false
    };

    constructor() { }

    setIsLogin(isLogin){
        this.data.isLogin = isLogin;
    }  

    getIsLogin(){
        return this.data.isLogin;
    }
}
