import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dashboardForm = this.fb.group({
      message: ['',Validators.required],
      category: ['', Validators.required],
   
    })
    
  }
  onSend(){
    console.log(this.dashboardForm.value);
  }

}
