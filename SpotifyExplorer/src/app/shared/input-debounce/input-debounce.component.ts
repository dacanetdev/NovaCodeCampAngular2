import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-input-debounce',
  template: `<input type="text" class="form-control" [placeholder]="placeholder"
  [(ngModel)]="inputValue"/>`,
  styleUrls: ['./input-debounce.component.css']
})
export class InputDebounceComponent implements OnInit {
  @Input() placeholder: string;
  @Input() delay:number = 1000;
  @Output() changeValue:EventEmitter<any> = new EventEmitter();
  public inputValue: string;



  constructor(private elementRef:ElementRef) {
    const eventStream = Observable.fromEvent(this.elementRef.nativeElement,'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();

    eventStream.subscribe(input => this.changeValue.emit(input));
  }

  ngOnInit() {
  }

}
