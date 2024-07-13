import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [ThemeSwitcherComponent, NavbarComponent]
})
export class HeaderComponent {

}
