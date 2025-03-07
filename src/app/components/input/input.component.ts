import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

type Status = "success" | "error" | "disabled" | "info";

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input({required: true}) placeholder:string = "Digite algo";
  @Input() value:string = "";
  @Input({required: true}) status: Status = "info";

  @Output() change = new EventEmitter<string>();

  changeValue(){
    this.change.emit(this.value);
  }
}
