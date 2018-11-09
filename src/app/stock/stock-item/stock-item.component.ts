import { Stock } from './../../model/stock';
import {
  Component, SimpleChange, OnInit, OnChanges, OnDestroy, DoCheck,
  AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, Input, Output, EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked,
  AfterViewChecked, AfterContentInit, AfterViewInit {

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  onToggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.toggleFavorite.emit(this.stock);
  }

  changeStockPrice() {
    this.stock.price += 5;
  }

  ngOnInit(): void {
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
