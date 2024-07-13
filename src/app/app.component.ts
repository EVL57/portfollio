import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private themeService:ThemeService){

  }

  title = 'portfollio';


  ngOnInit(): void {

    const theme : string | null = localStorage.getItem('theme');

    if(theme){
      this.themeService.switchTheme(theme);
    }
  }
}
