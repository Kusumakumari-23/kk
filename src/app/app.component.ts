import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  private firstNumber:number=null;
  private secondNumber:number=null;
  private result:number=null;

 public addCalc():number{
    this.result=this.firstNumber+this.secondNumber;
    return this.result;
 }

 public subCalc():number{
  this.result=this.firstNumber-this.secondNumber;
  return this.result;
}

public mulCalc():number{
  this.result=this.firstNumber*this.secondNumber;
  return this.result;
}

public divCalc():number{
  this.result=this.firstNumber/this.secondNumber;
  return this.result;
}
}