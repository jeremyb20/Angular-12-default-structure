import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import { MediaResponse, MediaService } from "src/app/services/media.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  output: boolean;
  Media: MediaResponse;
  private mediaSubscription: Subscription

  constructor(private _authService: AuthService, private _media: MediaService) {}

  ngOnInit(): void {
  }

  logout(){
    this._authService.logout();
  }

}
