import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arr: any = []

  updateData: any = {
    firstName: '',
    lastName: ''
  }
  // dummy record
  formData = [
    {
      firstName: 'jon',
      lastName: 'wick'
    },
    {
      firstName: 'vin',
      lastName: 'disel'
    }
  ]

  editRecord(item: any) {
    console.log("Data is : ", item)
    this.updateData = item;
    console.log("update record now : ", this.updateData)
  }

  deleteData(data: any) {

    this.formData = this.formData.filter(i => i != data)
  }

  saveData() {

    console.log("update data record " , this.updateData)
    
    this.formData.push(this.updateData)
    
    console.log(this.formData)
  }


}
