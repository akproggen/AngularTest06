import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-login',
  standalone: true, // Hier wird die Komponente eigenständig
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
 //   this.authService.login(this.username, this.password).subscribe(success => {
  //    this.message = success ? 'Login erfolgreich!' : 'Ungültige Anmeldedaten!';
  //  });
  }
}
