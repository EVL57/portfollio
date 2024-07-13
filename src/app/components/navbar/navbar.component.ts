import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router){

  }

  items: MenuItem[] | undefined;

  ngOnInit(): void {

    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        command: () =>{
          this.router.navigate(['/home']);
        }
      },
      {
        label: 'Interests',
        icon: PrimeIcons.LIST,
        items: [
          {
            label: 'Games',
            command: () =>{
              this.router.navigate(['/games']);
            },
          },
          {
            label: 'Movies',
            command: () =>{
              this.router.navigate(['/movies']);
            },
          },
          {
            label: 'TV Shows',
            command: () =>{
              this.router.navigate(['/shows']);
            },
          },
          {
            label: 'Music',
            command: () =>{
              this.router.navigate(['/music']);
            },
          },
          {
            label: 'Sports & Esports',
            command: () =>{
              this.router.navigate(['/sports']);
            },
          },
        ]
      },
      {
        label: 'Projects',
        icon: PrimeIcons.GITHUB,
      },
      {
        label: 'Reading List',
        icon: PrimeIcons.BOOK,
        command: () =>{
          this.router.navigate(['/reading']);
        },
      },
      {
        label: 'CV',
        icon: PrimeIcons.USER,
        command: () =>{
          this.router.navigate(['/cv']);
        },
      },
    ]
    
  }

}
