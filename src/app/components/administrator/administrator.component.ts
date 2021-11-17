import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  constructor( private _notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  showtoast() {
    this._notificationService.success('Hola', 'sucess', 16000);
  }
}
