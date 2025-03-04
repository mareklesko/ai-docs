import { Component, output, signal } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isDark = output<boolean>();
    dark = false;
    toggleDarkMode() {
        this.dark = !this.dark;
        this.isDark.emit(this.dark);
    }
}
