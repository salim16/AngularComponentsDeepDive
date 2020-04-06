import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverOrBlueprintCreated = new EventEmitter<{ type: string, serverName: string, serverContent: string }>();
  // @Output('bpCreated') blueprintCreated = new EventEmitter<{ type: string, serverName: string, blueprintContent: string }>();
  
  // newServerName: string = '';
  // newServerContent: string = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  // Notes
  // There are 3 ways to access HTML element inside .ts files,
  // First way is to create a reference in the template and pass that into the method.
  // Second way is to create a ViewChild ElementRef inside the template and then use it.
  // Third way is to use ngContent way to force angular to consider whats inside the selector of the comp

  // onAddServer() {
  //   this.serverOrBlueprintCreated.emit({
  //     type: 'server',
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.serverOrBlueprintCreated.emit({
  //     type: 'blueprint',
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddServer(serverNameInputElement: HTMLInputElement) {
    this.serverOrBlueprintCreated.emit({
      type: 'server',
      serverName: serverNameInputElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInputElement: HTMLInputElement) {
    this.serverOrBlueprintCreated.emit({
      type: 'blueprint',
      serverName: serverNameInputElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddServer(serverNameInputElement: HTMLInputElement, serverContentInputElement: HTMLInputElement) {
  //   this.serverOrBlueprintCreated.emit({
  //     type: 'server',
  //     serverName: serverNameInputElement.value,
  //     serverContent: serverContentInputElement.value
  //   });
  // }

  // onAddBlueprint(serverNameInputElement: HTMLInputElement, serverContentInputElement: HTMLInputElement) {
  //   this.serverOrBlueprintCreated.emit({
  //     type: 'blueprint',
  //     serverName: serverNameInputElement.value,
  //     serverContent: serverContentInputElement.value
  //   });
  // }

}
