import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $(document).click(function (event: Event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });

  });

  $(".navbar-toggler").click(function(event: Event, c:any){
    var _colorNav = $(".nav-link").hasClass("nav-link active");
    if (_colorNav === true) {
      $(event.target).addClass("disabled");
      $("nav").toggleClass("navbar-color");
  setTimeout(()=>{
      $(event.target).removeClass("disabled");
  },500);
    }

})

  }

}
