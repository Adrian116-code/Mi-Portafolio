import { Component, signal, OnInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
declare var AOS: any;

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class App {
  protected readonly title = signal('portafolio');

  ngOnInit(): void {

    AOS.init({
    });
    this.isPc = window.innerWidth > 768;
  }

  MostrarAngular: boolean = false;

  MostrarSupabase: boolean = false;

  MostrarPython: boolean = false;

  MostrarUnity: Boolean = false;

  MostrarAndroid: Boolean = false;

  toggleAngular(){
    this.MostrarAngular = !this.MostrarAngular;
  }

  toggleSupabase(){
    this.MostrarSupabase = !this.MostrarSupabase;
  }

  togglePython(){
    this.MostrarPython = !this.MostrarPython;
  }

  toggleUnity(){
    this.MostrarUnity = !this.MostrarUnity;
  }

  toggleAndroid(){
    this.MostrarAndroid = !this.MostrarAndroid;
  }

  isPc: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.isPc = window.innerWidth > 1024;
  }
}