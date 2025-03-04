import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'controls/header';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ai-docs';
  dark: boolean = false;
}
