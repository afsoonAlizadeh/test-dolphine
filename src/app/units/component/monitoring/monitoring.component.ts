import {
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
} from '@angular/core';
import * as L from 'leaflet';
import { LayerGroup, tileLayer } from 'leaflet';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss'],
})
export class MonitoringComponent implements OnInit {
  // options = {
  //   layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
  //   zoom: 5,
  //   center: L.latLng(46.879966, -121.726909),
  // };

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
