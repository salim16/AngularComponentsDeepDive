import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverOrBlueprintCreated = new EventEmitter<{ type: string, serverName: string, serverContent: string }>();
  // @Output('bpCreated') blueprintCreated = new EventEmitter<{ type: string, serverName: string, blueprintContent: string }>();
  newServerName: string = '';
  newServerContent: string = '';
  additionType: string;

  constructor() { }

  ngOnInit() {
  }

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
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(serverNameInputElement: HTMLInputElement) {
    this.serverOrBlueprintCreated.emit({
      type: 'blueprint',
      serverName: serverNameInputElement.value,
      serverContent: this.newServerContent
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
