import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scratch',
  templateUrl: './scratch.component.html',
  styleUrls: ['./scratch.component.scss']
})
export class ScratchComponent implements OnInit {
  productAttributes = [
    {
      attributeType: 'color',
      attributeValues: ['red', 'green', 'blue']
    },
    {
      attributeType: 'size',
      attributeValues: ['small', 'medium', 'large']
    },
    {
      attributeType: 'material',
      attributeValues: ['leather', 'cotton', 'silk']
    }
  ]

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    let arr: string | any[] = [];
    let tempArr = [];
    for(let i = 0;i<this.productAttributes.length;i++) {
      for(let j = 0;j<this.productAttributes[i].attributeValues.length;j++) {
        tempArr.push(this.productAttributes[i].attributeValues[j]);
      }
      if(arr.length == 0) {
        arr=tempArr
        console.log("0");
        console.log(arr)
      } else {
        console.log(">1");
        console.log(arr)
      }
      // tempArr = [];
    }
  }
}
