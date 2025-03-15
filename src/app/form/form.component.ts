import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  num1: number = 0;
  num2: number = 0;
  imc: number = 0;

  onClickImc() {
    this.imc = this.num2/(this.num1 * this.num1);
    if (this.imc < 18.5) {
    
    }
  }
  
}
