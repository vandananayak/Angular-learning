import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  disabled = true;
  newServerCreate = 'No server was created';
  constructor() {
    setTimeout(() => (this.disabled = false), 2000);
  }

  onAddnewServer() {
    this.newServerCreate = 'Server got created';
  }

  serverId = 10;
  serverStatus = 'offline';
}
