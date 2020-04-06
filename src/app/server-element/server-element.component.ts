import { Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} 
from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'], 
  encapsulation: ViewEncapsulation.None // Default encapsulation is Emulated, now the css will be 
  // applied globally.. With Default encapsulation it is only applied in that component only.
  // see the css file of this component it now chnages lable color of cockpit component after I set 
  // viewencapsulation to none.
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  // @Input("srvElement") serverElement: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!'); // this will be triggered on when we click the button
    // Change first Element because both the name variable are same in memory.
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    // Content is whatever is inside of the opening and closing tag of the component, example below
    //<app-server-element 
      //*ngFor="let serverElement of serverElements"
      //[name]="serverElement.name"> 
        //  <p>
          //    <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
            //  <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
          //</p>
      //</app-server-element>
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
