import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { GoogleMapsLoaderService } from '../../services/google-maps-loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 9.0820, lng: 8.6753 };
  zoom = 6;
  alertMarkers: Array<{ position: google.maps.LatLngLiteral, label: string }> = [];

  constructor(private mapsLoader: GoogleMapsLoaderService) {}

  async ngOnInit() {
    try {
      await this.mapsLoader.load();
      this.fetchAlerts();
    } catch (error) {
      console.error('Google Maps failed to load:', error);
    }
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

