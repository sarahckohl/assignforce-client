import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {
  selectedTab = 0;

  tabs = [
    {
      label:'overview',
      roles: []
    }, 
    {
      label: 'batches',
      roles: []
    },
    {
      label: 'locations',
      roles: []
    },
    {
      label: 'curricula',
      roles: []
    },
    {
      label: 'trainers',
      roles: []
    },
    {
      label: 'profile',
      roles: ['Trainer']
    },
    {
      label: 'reports',
      roles: []
    },
    {
      label: 'settings',
      roles: []
    }
  ];

  id = 'undefined';

  check = true;

  constructor(private router: Router, private route: ActivatedRoute, public auth0: AuthService) {}

  logout() {
    this.auth0.logout();
  }

  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.selectedTab = this.tabs.findIndex(tab => tab.label === event.url.split('/')[1]);
    //     if (this.router.url.includes('profile')) {
    //       this.id = this.router.url.split('/')[2];
    //     }
    //   }
    // });
  }

  selectTab(evt) {
    if (this.id === 'undefined') {
      this.auth0
        .getProfile((err, profile) => {
          if(err) {
            console.log(err);
          } else {
            this.id = profile.name;
          }
        })
    }
    if (this.selectedTab === this.tabs.findIndex(tab => tab.label === 'profile')) {
      this.router.navigate([`/profile/${this.id}`]);
    } else {
      this.router.navigate([this.tabs[evt.index].label]);
    }
  }
}
