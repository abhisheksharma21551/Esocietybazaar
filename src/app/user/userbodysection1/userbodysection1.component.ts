import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userbodysection1',
  templateUrl: './userbodysection1.component.html',
  styleUrls: ['./userbodysection1.component.css']
})
export class Userbodysection1Component implements OnInit {
  imageObject: Array<any> = [{
    image:''
},
{
  image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdawn&psig=AOvVaw0B0XtLJgIr9-xbe5vvpcCW&ust=1581680026639000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjFv7O3zucCFQAAAAAdAAAAABAI'
},  
{
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fnature%2F&psig=AOvVaw0B0XtLJgIr9-xbe5vvpcCW&ust=1581680026639000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjFv7O3zucCFQAAAAAdAAAAABAN',
},
{
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0B0XtLJgIr9-xbe5vvpcCW&ust=1581680026639000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjFv7O3zucCFQAAAAAdAAAAABAT',
}
];
  constructor() { }

  ngOnInit() {
  }

}
