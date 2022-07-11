import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestResultService } from '../services/test-result.service';
import { Reports } from '../shared/models/report';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css','../app.component.css']
})
export class ReportPageComponent implements OnInit {

  reports:Reports[] = [];
  constructor( private testreports : TestResultService, private router : Router){


  }
  ngOnInit(): void {
    this.reports = this.testreports.getAll();
  }

  landingPage(){
    this.router.navigateByUrl('/report-page')
    console.log('routing')
  }
}
