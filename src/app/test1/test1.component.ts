import { Component, EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  @Input() v:any;
  @Output() myEvent=new EventEmitter()
  sendDataToParent(dataFromChild:any){
    this.myEvent.emit(dataFromChild)
  }
  }



