import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown'

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent  implements OnInit{

themes:string[] | undefined;

selectedTheme: string | undefined;

constructor(private themeService: ThemeService) {

}

changeTheme(theme:string){
    this.themeService.switchTheme(theme);
    localStorage.setItem('theme', theme);
}


  ngOnInit(): void {
      this.themes = ['lightGreen', 'darkGreen'];

      const storedTheme: string | null = localStorage.getItem('theme');

      if(storedTheme){
        this.selectedTheme = storedTheme;
      }
  }

}
