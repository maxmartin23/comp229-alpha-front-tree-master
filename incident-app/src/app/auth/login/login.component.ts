import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: AuthService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
  }

  username = ""
  password = ""
  loading = false
  error = false

  login = () => {
    this.loading = true
    this.error = false
    const {username,password} = this
    this.loginService.authenticate({username,password})
    .subscribe((d)=>{
      this.loading = false
      let tmp = JSON.parse(JSON.stringify(d))
      tmp["message"]=="User is autheticated"
      if(tmp["message"]=="User is autheticated"){
          this.error = false  
          this.loginService.storeUserData(tmp.token,{username,password})
          this.router.navigate(['/home']);      
      } else {
        this.error = true
      }
    })
  }

}
