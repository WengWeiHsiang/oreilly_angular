import { Stock } from './model/stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Oreilly Angular';

  public stockObj: Stock;

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock', 'TS', 85, 80);
  }
}
