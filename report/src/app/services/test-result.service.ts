import { Injectable } from '@angular/core';
import { Reports } from '../shared/models/report';

@Injectable({
  providedIn: 'root'
})
export class TestResultService {

  

  constructor() { }

  getAll(): Reports[] {
    return [
      {
        id: 1,
        name: 'Hemoglobin',
        result: 17,
        normal: 'Normal 14 to 17 gm/dL',
        comment: 'Your hemoglobin value is worst from last results',
        risk : true
      },
      {
        id: 2,
        name: 'RBC',
        result: 4.59,
        normal: 'Normal 3.8 to 4.8 gm/dL',
        comment: 'Your Red blood cell count has increased from last results',
        risk : false
      },{
        id: 3,
        name: 'Glucose',
        result: 101,
        normal: 'Normal 70 to 90 gm/dL',
        comment: 'Your Red blood cell count has increased from last results',
        risk : false
      },{
        id: 4,
        name: 'Protein',
        result: 7.10,
        normal: 'Normal 6.0 to 8.3 gm/dL',
        comment: 'Your Protein count is within range from last results',
        risk : false
      }
      
    ]
  }
}
