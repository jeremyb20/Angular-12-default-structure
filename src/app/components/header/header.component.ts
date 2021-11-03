import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public data = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   // this.refresh()
  }

  refresh() {
    this.data = {};
    this.http.get('https://api.github.com/users/lealceldeiro')
      .subscribe(data => {
        this.data = data;
      });
  }

}
