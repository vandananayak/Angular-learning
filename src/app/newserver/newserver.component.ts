import { Component } from '@angular/core';

@Component({
  selector: 'app-newserver',
  templateUrl: './newserver.component.html',
  styleUrls: ['./newserver.component.css'],
})
export class NewserverComponent {
  serverId: any = 10;
  serverStatus: string = Math.random() < 0.5 ? 'Online' : 'Offline';
  serverStatusClass(): object {
    return {
      Online: this.serverStatus === 'Online' ? 'Online' : 'Offline',
    };
  }
  getColor(): object {
    // return this.serverStatus==='Online'?"green":"red"
    return { color: this.serverStatus === 'Online' ? 'green' : 'red' };
  }
}
