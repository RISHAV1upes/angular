import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public num1:number;
  public num2:number;
  public message:String;
  add(){
    this.message="Sum of "+this.num1+ " and "+this.num2+" is "+(this.num1+this.num2);
  }
  sub(){
    this.message="Subtraction of "+this.num1+ " and "+this.num2+" is "+ (this.num1-this.num2);
  }
  mult(){
    this.message="Multiplication of "+this.num1+ " and "+this.num2+" is "+ (this.num1*this.num2);
  }
  div(){
    this.message="Division of "+this.num1+ " and "+this.num2+" is "+(this.num1/this.num2);
  }
}
