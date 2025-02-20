import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from "../../common/confirm-password.validator";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  
  public showPasswordEmailSent: boolean;
  public showNewPassword: boolean;
  public showConfirmPassword: boolean;
  loginForm: FormGroup;
  addressForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  hideMsg: boolean = false;
  ShowMsg: string;
  //timeSeconds: number =  6000;
  constructor( private _authService: AuthService, private formBuilder: FormBuilder,private router: Router) { }
 
    ngOnInit() {
      this.loginForm = this.formBuilder.group(
        {
          passwordEmailSent: ["",Validators.required],
          newPassword: ["",Validators.required],
          confirmPassword: ["",Validators.required]
        }, {
          validator: MustMatch('newPassword', 'confirmPassword')
        }
      );
    }
    get f() { return this.loginForm.controls; }
    
    onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      const user = {
        passwordEmailSent: this.f.passwordEmailSent.value,
        newPassword: this.f.newPassword.value,
        confirmPassword: this.f.confirmPassword.value
      }

      console.log(user);

     // this._authService.authenticateUser(user);
    
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
