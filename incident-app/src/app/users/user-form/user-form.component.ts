import { Component, OnInit } from '@angular/core';
import { UserFormService } from './user-form.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private userFormService: UserFormService, private route: ActivatedRoute,  private router: Router ) { }

  username = ""
  password = ""
  email = ""
  type = "regular"
  loading = false

  ngOnInit(): void {
  }

  register = () => {
    this.loading = true
    this.userFormService.registerUser(this.username,this.password,this.email,this.type)
    .subscribe((d)=>{
      this.loading = false
      this.router.navigate(['/home']);
    })
  }

}
