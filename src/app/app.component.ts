import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'A Testing Server!' }
  ];

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
}
