import { Component, OnInit, Inject, OnDestroy  } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from 'src/app/services/theme.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MediaResponse, MediaService } from "src/app/services/media.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  Media: MediaResponse;
  private mediaSubscription: Subscription
  title: String;
  sidebarExpanded : boolean;
  user:any;
  selectTheme =  new FormControl('theme-default-dark');

  constructor(private router: Router, private themeService: ThemeService, private _media: MediaService) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: any) => {
      this.user = event.url;
    });

    this.mediaSubscription = this._media.subscribeMedia().subscribe(media => {
      this.Media = media;
      this.sidebarExpanded = media.IsMobile ? false: true;
    })

  
      let currentUser = this.themeService.getThemeSelected();
      if(currentUser){
        this.themeService.setTheme(currentUser);
        this.selectTheme =  new FormControl(currentUser);
      }else{
        this.themeService.setTheme('theme-default-dark');
      }
      this.selectTheme.valueChanges.subscribe((value) => {
        this.themeService.setTheme(value);
      });
  }
  

  ngOnInit(){
    
  }

  ngOnDestroy () {
    if(this.mediaSubscription){
      this.mediaSubscription.unsubscribe();
    }
  }
}
