import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: any  = [{type:'server',name:'TestServer',content:'Test Server Content'}];


  onAddedServer(serverData: { name: string; content: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onAddedBlueprint(bluePrintData: { name: string; content: string }) {
     this.serverElements.push({
       type: 'blueprint',
       name: bluePrintData.name,
       content: bluePrintData.content
     });
  }
}
