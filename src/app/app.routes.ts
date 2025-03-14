import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LiveMapComponent } from './components/live-map/live-map.component';
import { ReportIncidentComponent } from './components/report-incident/report-incident.component';
import { CommunityComponent } from './components/community/community.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: LiveMapComponent },
  { path: 'report', component: ReportIncidentComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'profile', component: ProfileComponent }
];
