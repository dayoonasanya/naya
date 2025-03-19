import { Component, OnInit } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = 'Loading...';

  ngOnInit() {
    axios.get<string>('http://localhost:5000/')
      .then((response: AxiosResponse<string>) => {
        this.message = response.data;
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
        this.message = 'Failed to connect to backend';
      });
  }
}

