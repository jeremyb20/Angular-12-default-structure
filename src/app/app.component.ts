import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Spinkit, SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'theme-labo';
  selectTheme =  new FormControl('theme-default-dark');
  public spinkit = Spinkit;
  opacity:any = 0.6;

  constructor(private themeService: ThemeService, private spinner: SpinnerVisibilityService) {
    this.themeService.setTheme(this.selectTheme.value);
    this.selectTheme.valueChanges.subscribe(value => {
      this.themeService.setTheme(this.selectTheme.value);
    });
  }
}
