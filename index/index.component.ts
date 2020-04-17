import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  feature = 'Feature 1'

  selectedFeatures: any = [];


  constructor() { }

  ngOnInit(): void {
  }
  onAdd() {
    this.selectedFeatures.push(this.feature);
  }

  onRemove(){
    this.selectedFeatures.pop();
  }

}
