import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".switcher-btn").on("click", function() {
      $(".switcher-wrapper").toggleClass("switcher-toggled")
    }), $(".close-switcher").on("click", function() {
      $(".switcher-wrapper").removeClass("switcher-toggled")
    })
  };

    // $('#theme1').click(theme1);
    // $('#theme2').click(theme2);
    // $('#theme3').click(theme3);
    // $('#theme4').click(theme4);
    // $('#theme5').click(theme5);
    // $('#theme6').click(theme6);
    // $('#theme7').click(theme7);
    // $('#theme8').click(theme8);
    // $('#theme9').click(theme9);
    // $('#theme10').click(theme10);
    // $('#theme11').click(theme11);
    // $('#theme12').click(theme12);
    // $('#theme13').click(theme13);
    // $('#theme14').click(theme14);
    // $('#theme15').click(theme15);

     theme1() {
      $('body').attr('class', 'bg-theme bg-theme1');
    }
    
     theme2() {
      $('body').attr('class', 'bg-theme bg-theme2');
    }
    
     theme3() {
      $('body').attr('class', 'bg-theme bg-theme3');
    }
    
     theme4() {
      $('body').attr('class', 'bg-theme bg-theme4');
    }
    
     theme5() {
      $('body').attr('class', 'bg-theme bg-theme5');
    }
    
     theme6() {
      $('body').attr('class', 'bg-theme bg-theme6');
    }
    
     theme7() {
      $('body').attr('class', 'bg-theme bg-theme7');
    }
    
     theme8() {
      $('body').attr('class', 'bg-theme bg-theme8');
    }
    
     theme9() {
      $('body').attr('class', 'bg-theme bg-theme9');
    }
    
     theme10() {
      $('body').attr('class', 'bg-theme bg-theme10');
    }
    
     theme11() {
      $('body').attr('class', 'bg-theme bg-theme11');
    }
    
     theme12() {
      $('body').attr('class', 'bg-theme bg-theme12');
    }

}
