import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '05-SPRING-BOOT-ANGULAR-APP';

  message: string = 'WELCOME TO SPRING BOOT ANGULAR INTIGRATION APP';

  WELLCOME_URL: string = 'http://localhost:8080/welcome-msg';

  GREET_URL: string = 'http://localhost:8080/greet-msg';

  constructor(private http: HttpClient) {}

  messageResult: string = '';

  getWelcomeMessage() {
    this.http
      .get(this.WELLCOME_URL, { responseType: 'text' })
      .subscribe((data) => (this.messageResult = data));
  }

  getGreetMessage() {
    this.http
      .get(this.GREET_URL, { responseType: 'text' })
      .subscribe((data) => (this.messageResult = data));
  }
}
