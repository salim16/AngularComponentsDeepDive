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
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} 
from '@angular/core';
import { staticViewQueryIds } from '@angular/compiler';

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
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

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
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of the Paragraph: ' + this.paragraph.nativeElement.textContent);
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

      // You get access to Component content at this stage only
      console.log('Test Content: ' + this.header.nativeElement.textContent);
      console.log('Text Content of the Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    // You only get access to the template elements in this stage ...
    console.log('Test Content: ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
