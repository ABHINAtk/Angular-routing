import { Component, OnChanges, SimpleChanges ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.scss']
})
export class Student1Component implements OnChanges {
  @Input() datavalue!:boolean
public studentname:string='';


  constructor(public activaterouter:ActivatedRoute){
    console.log("activerouter,activerouter")
    activaterouter.params.subscribe((param:any)=>{
      console.log(param);
      this.studentname=param.studentname;
    })
  }
  
  ngOnChanges(changes: SimpleChanges):void {
    console.log("changes",changes)
  }
}
