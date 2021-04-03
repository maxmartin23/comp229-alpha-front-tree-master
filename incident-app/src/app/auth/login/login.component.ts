import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
  }

  username = ""
  password = ""
  loading = false
  error = false

  login = () => {
    this.loading = true
    this.error = false
    this.loginService.authenticateUser(this.username,this.password)
    .subscribe((d)=>{
      this.loading = false
      let tmp = JSON.parse(JSON.stringify(d))
      if(tmp["message"]=="User is autheticated"){
          this.error = false  
          this.router.navigate(['/home']);      
      } else {
        this.error = true
      }
    })
  }

}
