import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('portafolio');
  
  ngOnInit(): void {
    
    AOS.init({
    });
   this.isPc = window.innerWidth > 768;
  }

  MostrarAngular: boolean = false;

  MostrarSpring: boolean = false;

  MostrarPython: boolean = false;

  toggleAngular(){
    this.MostrarAngular = !this.MostrarAngular;
  }

  toggleSpring(){
    this.MostrarSpring = !this.MostrarSpring;
  }

  togglePython(){
    this.MostrarPython = !this.MostrarPython;
  }

  isPc: boolean = false;

 @HostListener('window:resize')
  onResize() {
    this.isPc = window.innerWidth > 1024;
  }
<<<<<<< HEAD
=======
  
  
>>>>>>> 7a1ebc532677e430690e4d378491ce2f208e82d1
}
