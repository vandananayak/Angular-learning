import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: any = 10;
  serverStatus: string = Math.random() < 0.5 ? 'Online' : 'Offline';
  serverCreated: boolean = false;
  disabled: boolean = true;

  serverName: string = '';

  constructor() {
    setTimeout(() => (this.disabled = false), 2000);
  }

  onAddnewServer(): void {
    if (this.serverName !== '') {
      this.serverCreated = true;
    } else {
      this.serverCreated = false;
    }
  }

  onServername(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor(): object {
    // return this.serverStatus==='Online'?"green":"red"
    return { color: this.serverStatus === 'Online' ? 'green' : 'red' };
  }

  keyTyped(): void {
    console.log(this.serverName);
  }

  serverStatusClass(): object {
    return {
      Online: this.serverStatus === 'Online' ? 'Online' : 'Offline',
    };
  }
}
