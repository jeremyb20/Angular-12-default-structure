import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public showPassword: boolean;
  loginForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  hideMsg: boolean = false;
  ShowMsg: string;
  //timeSeconds: number =  6000;
  constructor( private _authService: AuthService, private formBuilder: FormBuilder,private router: Router) { }
 
    ngOnInit() {
      this.loginForm =  this.formBuilder.group({
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        //email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
    }
    get f() { return this.loginForm.controls; }
    
    onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      const user = {
        email: this.f.email.value,
        password: this.f.password.value
      }

      this._authService.authenticateUser(user);
    
      // this._authService.authenticateUser(user).subscribe(data => {
      //   if(data.success) {
      //     this.loading = false;
      //     switch (data.pet.userState) {
      //       case 0:
      //         this.router.navigate(['/admin']);
      //         break;
      //       case 3:
      //         this.router.navigate(['/dashboard-pet']);
      //       break;
         
      //       default:
      //         break;
      //     }
      //   } else {
      //     this.hideMsg = true;
      //     this.ShowMsg = data.msg;
      //     this.loading = false;
      //     setTimeout(() => { this.hideMsg = false }, this.timeSeconds);
      //   }
      // },
      // error => {
      //   this.loading = false;
      //   this.hideMsg = true;
      //   this.ShowMsg = 'Servicio en mantenimiento, favor de iniciar sesión más tarde';
      //   setTimeout(() => { this.hideMsg = false }, 100000);
      //   console.log(error);
      // });
    }
}
