import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverCreated: boolean = false;
  disabled: boolean = true;

  serverName: string = '';
  servers:any=['Testserver1','Testserver2'];

  constructor() {
    setTimeout(() => (this.disabled = false), 2000);
  }

  onAddnewServer(): void {
    if (this.serverName !== '') {
      this.serverCreated = true;
      this.servers.push(this.serverName);
    } else {
      this.serverCreated = false;
    }
  }

  onServername(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  keyTyped(): void {
    console.log(this.serverName);
  }
}
