import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{name: string, content: string}>();
  newServerName: any   = '';
  newServerContent: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  /*onAddServer() {
    this.serverCreated.emit({name: this.newServerName,content:this.newServerContent});
  }*/
  onAddServer(nameInput: HTMLInputElement, contentInput:HTMLInputElement) {
    /*console.log(nameInput.value)
    console.log(contentInput.value)*/
    this.serverCreated.emit({name: nameInput.value,content:contentInput.value});
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({name: this.newServerName,content: this.newServerContent});
  }

}
