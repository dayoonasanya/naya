import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 9.0820, lng: 8.6753 }; // Centered on Nigeria
  zoom = 6;
  alertMarkers: Array<{ position: google.maps.LatLngLiteral, label: string }> = [];

  ngOnInit(): void {
    this.fetchAlerts();
  }

  fetchAlerts() {
    axios.get('http://localhost:5000/api/alerts')
      .then(response => {
        this.alertMarkers = response.data.map((alert: any) => ({
          position: {
            lat: alert.latitude,
            lng: alert.longitude
          },
          label: alert.type || '!'
        }));
      })
      .catch(error => {
        console.error('Error fetching alerts:', error);
      });
  }
}

