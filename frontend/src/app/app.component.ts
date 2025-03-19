import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = 'Loading...';

  ngOnInit() {
    axios.get('http://localhost:5000/')
      .then(response => {
        this.message = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.message = 'Failed to connect to backend';
      });
  }
}

