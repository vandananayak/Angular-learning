import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: any = 10;
  serverStatus: string = Math.random() < 0.5 ? 'Online' : 'Offline';
  ServerCreated: boolean = false;
  disabled: boolean = true;

  servername: string = '';

  constructor() {
    setTimeout(() => (this.disabled = false), 2000);
  }

  onAddnewServer(): void {
    if (this.servername !== '') {
      this.ServerCreated = true;
    } else {
      this.ServerCreated = false;
    }
  }

  onServername(event) {
    this.servername = (<HTMLInputElement>event.target).value;
  }

  getColor(): object {
    // return this.serverStatus==='Online'?"green":"red"
    return { color: this.serverStatus === 'Online' ? 'green' : 'red' };
  }

  keyTyped(): void {
    console.log(this.servername);
  }

  serverStatusClass(): object {
    return {
      Online: this.serverStatus === 'Online' ? 'Online' : 'Offline',
    };
  }
}
