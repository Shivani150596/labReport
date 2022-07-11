import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestResultService } from './services/test-result.service';
import { Reports } from './shared/models/report';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'report';
  reports:Reports[] = [];
  constructor( private testreports : TestResultService, private router : Router){


  }
  ngOnInit(): void {
    this.reports = this.testreports.getAll();
  }

  
}
