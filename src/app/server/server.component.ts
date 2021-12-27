import {Component} from '@angular/core'

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
})

export class ServerComponent{
  disabled=true;
  constructor(){
setTimeout(()=>this.disabled=false,2000)

  }

  serverId=10;
  serverStatus='offline'
}