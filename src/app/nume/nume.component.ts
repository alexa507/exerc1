import { Component, OnInit } from '@angular/core';
import { Names } from '../names';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-nume',
  templateUrl: './nume.component.html',
  styleUrls: ['./nume.component.css'],
})

export class NumeComponent implements OnInit {

  names: Names = {
    name: 'NAME'
  };

  fonts: any[] = [];
  selectedFont: any;
  selectedSize: number = 20;
  selectedAlignment: any;

  constructor() {
    this.fonts = [
      { name: 'Arial', code: 'Arial' },
      { name: 'Algerian', code: 'Algerian' },
      { name: 'Calibri', code: 'Calibri' },
      { name: 'Cambria', code: 'Cambria' }
    ];
  }

  ngOnInit(): void {
  }

}
