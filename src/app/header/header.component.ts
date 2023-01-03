import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @Output() issideBarToggle=new EventEmitter()

sideBarToggle(){
this.issideBarToggle.emit()
setTimeout(()=>{
  window.dispatchEvent(new Event('resize'))
},300)
}
}
