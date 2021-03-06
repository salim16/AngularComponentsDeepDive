import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'A Testing Server!' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onServerOrBlueprintAdded(serverData: { type: string, serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: serverData.type,
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // onBlueprintAdded(blueprintData: { type: string, serverName: string, blueprintContent: string }) {
  //   this.serverElements.push({
  //     type: blueprintData.type,
  //     name: blueprintData.serverName,
  //     content: blueprintData.blueprintContent
  //   });
  // }

  onChangeFirst() {
    // Doing this would trigger new javascript object in the memory, that means new component itself
    //this.serverElements[0] = {type: 'server', name: 'Changed', content: 'also changed!'};

    this.serverElements[0].name = 'changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }
}
