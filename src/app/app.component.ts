import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'abdul-PMS-project';
  constructor( private _renderer: Renderer2,
    private _elementRef: ElementRef,){};

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove(
      'bg-theme' ,'bg-theme2'
    );
    body.classList.add('bg-theme' ,'bg-theme1');



    
  }
}
