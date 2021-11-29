import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(window).on("scroll", function() {
		// 	$(this).scrollTop() > 300 ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut()
		// }), $(".back-to-top").on("click", function() {
		// 	return $("html, body").animate({
		// 		scrollTop: 0
		// 	}, 600), !1
		// })
  }

}
