import { Component, Input } from '@angular/core';
import { Header } from '../../config/interface/header';

@Component({
  selector: 'app-auth-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class AuthHeaderComponent {
  @Input() header: Header = {
    action: '',
    description: '',
  };
}
