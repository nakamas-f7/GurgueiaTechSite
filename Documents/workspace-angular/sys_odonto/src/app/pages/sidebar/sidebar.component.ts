import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, interval } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;  

  constructor(private observer: BreakpointObserver, private router: Router) {     
    
  }


  ngOnInit(): void {   

    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(100))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      /* .pipe(
        //untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      ) */
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
     
  }

 
  

}
