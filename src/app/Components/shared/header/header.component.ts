import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { DataService } from '../../../Services/data.service';
import { ScrollingService } from '../../../Services/scrolling.service';
import { UserAuthService } from '../../../Services/user-auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faCartShopping = faCartShopping;
  constructor(private dataSer:DataService,
    private scroll: ScrollingService,
    private authSer : UserAuthService,
    private router: Router
  ){

  }
  // ngOnInit(){
  //   this.dataSer.setUser();
  
  // }
 get getUserDetails(){
    return this.dataSer.getUser
  }
 get  isUserLogged(){
    return this.authSer.isUserLogin;
  }
  get getUserRole(){
    return this.dataSer.getUser.role
  }

  logOut(){
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  onLogo(){
    if(this.authSer.isUserLogin){
        this.router.navigate(['./permit'])
    }
  }
}
