import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
// import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource}  from '@angular/material';
@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.scss']
})
export class TrackerListComponent implements OnInit {
  public pitJson;
  public tntData;
  public url = 'assets/pits.json';
  public schools;
  public years;

  constructor(private _http: HttpClient) {

    
   }

  ngOnInit() {
    this._http.get(this.url).subscribe((pitData) => { 
      this.pitJson = pitData; 
      this.tntData = new MatTableDataSource(this.pitJson);
      
      this.years = _.uniqBy(this.pitJson, "school_year");
      this.schools = _.uniqBy(this.pitJson, "school_name");
    
    });
    
  }

}
