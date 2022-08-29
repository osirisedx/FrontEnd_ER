import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';
import {Title} from "@angular/platform-browser";

enableProdMode();
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Porfolio de Eduardo Rodrigues");
  }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#container--horizontal').pagepiling({
        scrollingSpeed: 1,
        anchors:['pagina1', 'pagina2', 'pagina3', 'pagina4','pagina5'],
        menu: '#menu',
        easing: 'swing',
        navigation: {
          'textColor': '#000',
          'bulletsColor': '#000',
          'position': 'right',
          'tooltips': ['section1', 'section2', 'section3', 'section4','section5']
      },
        onLeave: function(index: number, nextIndex: number, direction: string) {
                  //after leaving section 1
          if(index != 0 && direction =='down'){
            $('#navBar').addClass('header-hidden');

          } else if(index == 2 && direction == 'up'){
            $('#navBar').removeClass('header-hidden');
          } else if(index != 2 && nextIndex == 1 && direction == 'up'){
            $('#navBar').removeClass('header-hidden');
          }

        }

      });
    });

  }


}
