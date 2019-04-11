import { Component , ViewChild} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  // @ViewChild ('myCanvas') canvasElement;
  selected = [];
  radiusValue = "50px";
  // 'height' : 5px ; width = 5px;

  // canvas setup
  expression = {'height' : this.radiusValue , 'width' : this.radiusValue }

  

  ngOnInit(){
      this.selected.length = 15;


  }

  // populateCircles(){
  //   for ()
  // }

circleClicked (element){
  console.log(element);
}

}

