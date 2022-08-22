import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';

enableProdMode();
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#container--horizontal').pagepiling({
        sectionsColor: ['#f2f2f2','#4bbfc3', 'green','#7baabe','red'],
        scrollingSpeed: 1,
        anchors:['page1', 'page2', 'page3', 'page4','page5'],
        menu: '#menu',
        onLeave: function(index: number, nextIndex: any, direction: string, valor: boolean) {
                  //after leaving section 1
          if(index == 1 && direction =='down'){
            $('#menu').addClass('header-hidden');

          }

          else if(index == 2 && direction == 'up'){
            $('#menu').removeClass('header-hidden');
          }
        }

      });
    });
    
  }


}
