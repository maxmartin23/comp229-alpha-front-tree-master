import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User | undefined;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void
  {
    // console.log({fromTheComponent:this.user})
    // JSON.parse(this.authService.getUserData()) ||
    const userData:string|null = this.authService.getUserData()
    this.user = userData? JSON.parse(userData):new User();
    // console.log({newUser:this.user})
  }

  onLogoutClick(): void
  {
    this.authService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

  isAdmin(): boolean {
    return this.user?.role==='admin'
  }
  isLoggedIn(): any
  {
    const result = this.authService.authenticated;
    console.log({result})
    if (result)
    {
      try {
console.log('trying')
        const user = localStorage.getItem('user')
        this.user = JSON.parse(user || "");
        return result;
      } catch(e) {
        return false
      }
    } else {
      return
    }
  }

}
