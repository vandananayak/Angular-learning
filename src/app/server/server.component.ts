import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  
  serverId = 10;
  serverStatus = 'offline';
  ServerCreated=false;
  disabled=true;

  newServerCreate = 'No server was created';

  Servername='';

  constructor() {
    setTimeout(() => (this.disabled = false), 2000);
  }

  onAddnewServer() {
    if(this.Servername!=='')
    {
      this.ServerCreated=true;
    }
    else{
      this.ServerCreated=false;
    }
    
  }

  onServername(event)
  {
    this.Servername=(<HTMLInputElement>event.target).value;
  }
}
