import { Component, OnInit } from '@angular/core';
import * as Glider  from  'glider-js'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  constructor() {
    
   }

  ngOnInit() {
    new Glider(document.querySelector('.glider'), {
        // Mobile-first defaults
        slidesToShow: 1,
        slidesToScroll:2,  
        scrollLock: true,
        dots: '#resp-dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 205,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: "auto",
                    slidesToScroll: "auto",
                    itemWidth: 140,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ]
      }
      );
  }
  
}
