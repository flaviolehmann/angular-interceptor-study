import { Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private mainService: MainService
  ) { }
  
  desiredResponseStatus = 200;

  onSubmit(): void {
    if (this.desiredResponseStatus < 100 || this.desiredResponseStatus >= 600) {
      alert('Please, insert a value between 100 and 599');
      return;
    }
    this.mainService
      .makeRequest(this.desiredResponseStatus)
      .subscribe(res => alert('Hello! I\'m the main app!'));
  }

}
