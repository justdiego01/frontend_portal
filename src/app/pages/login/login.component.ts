import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack:MatSnackBar, private logService:LoginService, private router:Router) { }

  public datalogin ={
    username : '',
    password : '',
  }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.datalogin.username.trim() == "" || this.datalogin.username.trim() == null){
      this.snack.open("Debe ingresar un Usuario", 'Aceptar',{duration:3000})
      return;
    }

    if(this.datalogin.password.trim() == "" || this.datalogin.password.trim() == null){
      this.snack.open("Debe ingresar una Contraseña", 'Aceptar',{duration:3000})
      return;
    }

    this.logService.generartoken(this.datalogin).subscribe(
      (data:any)=>{
        console.log(data);
        this.logService.loginuser(data.token);
        this.logService.getCurrentUser().subscribe((user:any)=>{
          this.logService.setuser(user);
          console.log(user);


          if (this.logService.getUserRol() == 'administrador'){
            this.router.navigate(["/admin"]);
            this.logService.loginStatusSubject.next(true);
          }else if (this.logService.getUserRol() == 'estudiante'){
            this.router.navigate(["/listarClientes"]);
            this.logService.loginStatusSubject.next(true);
          }
        })
      }
    )
  }


}
