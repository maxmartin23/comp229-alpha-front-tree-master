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
    this.user = new User();
  }

  onLogoutClick(): void
  {
    this.authService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }


  isLoggedIn(): any
  {
    const result = this.authService.authenticated;
    console.log(result)
    if (result)
    {
      try {

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
