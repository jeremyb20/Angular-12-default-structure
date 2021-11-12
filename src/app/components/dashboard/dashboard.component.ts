import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'theme-labo';
  selectTheme =  new FormControl('theme-default-dark');

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {

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

}
