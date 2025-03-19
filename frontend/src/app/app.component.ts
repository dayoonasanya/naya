import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import axios, { AxiosResponse } from 'axios';
=======
import axios from 'axios';
>>>>>>> 8951d87 (Refactor project structure: Moved frontend files from 'naya-frontend' to root 'frontend' directory for better organization.)

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
<<<<<<< HEAD
  message: string = 'Loading...';

  ngOnInit() {
    axios.get<string>('http://localhost:5000/')
      .then((response: AxiosResponse<string>) => {
        this.message = response.data;
      })
      .catch((error: any) => {
=======
  message = 'Loading...';

  ngOnInit() {
    axios.get('http://localhost:5000/')
      .then(response => {
        this.message = response.data;
      })
      .catch(error => {
>>>>>>> 8951d87 (Refactor project structure: Moved frontend files from 'naya-frontend' to root 'frontend' directory for better organization.)
        console.error('Error fetching data:', error);
        this.message = 'Failed to connect to backend';
      });
  }
}

