import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'edu-app';

  showHeader = true;
showFooter = true;
  
constructor(private router: Router) {}
  
  ngOnInit() {
      // on route change to '/login' or '/signup', set the variable showHead and showFooter to false
      this.router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/course' || event['url'] == '/course/register') {
           this.showHeader = false;
            this.showFooter = false;
          } else {
            this.showHeader = true;
            this.showFooter = true;
          }
        }
      });
    }
  
}
