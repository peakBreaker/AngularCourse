import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-webapp';
  counter = 0;

  onLogoClicked () {
    alert("Logo Clicked!")
  }

  onTitleChange(event:any) {
    console.log(typeof(event))
    this.title=event.target.value
  }

  onCounterButton(event:any) {
    this.counter += 1;
  }  

}
