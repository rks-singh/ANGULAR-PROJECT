import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03-APP';

  msg1:string ="Welcome to Data Binding Angular application Development."

  msg2:string="My name is Ravi Shekhar Singh, I am Java FullStack Developer.."

  ms1BtnColor:String ="blue";

  ms2BtnColor:String="orange";

  displayMsg1() {
    
    this.msg1 ="Welcome to Data Binding Angular application Development Zone."
  }

  displayMsg2(){
    this.msg2="My name is Ravi Shekhar Singh, I am Java FullStack Developer..\n I have good hands-on experience in developeing Distributed Application. And Web Application."
  }


  // 2 way data binding.
  msg3:string="";
}
