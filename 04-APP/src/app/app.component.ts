import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Customer } from './customer';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04-APP';

  constructor(private customerService:CustomerService){}

  customer:Customer = new Customer("","","");

  customers:Customer[] = [];

  saveCustomer(){
    this.customerService.printMsg(this.customer);
    this.customers.push(this.customer);
    this.customer=new Customer("","",""); 
  }

}


