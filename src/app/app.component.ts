import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ai-docs';
  dark: boolean = true;
  toggleDarkMode() {
    this.dark = !this.dark;
  }
}
