import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input('listPaisesHijo') public listPaises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
