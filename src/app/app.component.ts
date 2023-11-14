import { Component } from '@angular/core';
import { FirebaseService } from './fire-base/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FirebaseService]
})
export class AppComponent {
  constructor(private firebaseService: FirebaseService) {
    
  }
  title = 'FireBase';

}
