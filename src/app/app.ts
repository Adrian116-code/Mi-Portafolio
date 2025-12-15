import { Component, signal, OnInit } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('portafolio');
  
  ngOnInit(): void {
    
    AOS.init({
    });
  }
  
}
