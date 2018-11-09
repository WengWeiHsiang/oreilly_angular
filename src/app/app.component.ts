import { Stock } from './model/stock';
import {
  Component, SimpleChange, OnInit, OnChanges, OnDestroy, DoCheck,
  AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit
} from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked,
  AfterViewChecked, AfterContentInit, AfterViewInit {

  title = 'Oreilly Angular';

  public stock: Stock;

  onToggleFavorite(stock: Stock) {
    console.log('Favoeite for stock', stock, 'was triggred');
    this.stock.favorite = !this.stock.favorite;
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock', 'TS', 85, 80);
    console.log('AppComponent - On Init');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('AppComponent - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('AppComponent - After Content Checkd');
  }

  ngDoCheck(): void {
    console.log('AppComponent - Do check');
  }

  ngOnDestroy(): void {
    console.log('AppComponent - On Destroy');
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log('AppComponent - On Changes', changes);
  }
}
