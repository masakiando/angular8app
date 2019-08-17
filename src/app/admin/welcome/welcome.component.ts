import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  // template: `
  // <h1>App Component</h1>
  // <style>
  //   h1 {
  //     color: green;
  //   }
  // </style>
  // `,
  // styles: [`{}`],
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  name0 = 'david0';
  name: string;
  @Input() name1: string;
  @Input() name2: string;
  isUserLoggedIn = false;
  isLoggedInClass = 'is-logged-in';
  items: string[] = ['One', 'Two', 'Three'];
  states = ['Floida', 'Ohio', 'Califrnis', 'Texas'];
  cars = [
    {
      color: 'red',
      name: 'aaaa',
      purchased: new Date(),
    },
    {
      color: 'blue',
      name: 'rrrr',
      purchased: new Date(),
    },
    {
      color: '#fff',
      name: 'rrrr',
      purchased: new Date(),
    }
  ];
  carColor: string;
  constructor(private renderer: Renderer2) {
    this.name = 'david';
  }

  addCar() {
    const newCar = {
      color: 'green',
      name: 'rrrr',
      purchased: new Date(),
    };
    this.cars.push(newCar);
    // this.cars = [].concat(this.cars).concat(newCar);
  }
  isLoggedIn() {
    return this.isUserLoggedIn;
  }

  login() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

  ngOnInit() {
    console.log('this.name0', this.name0);
    console.log('this.name', this.name);

    this.setUpperCase();
    console.log('this.name1', this.name1);
    console.log('this.name2', this.name2);

    const ele = document.getElementById('welcome-message');
    // ele.classList.add('is-logged-in');
    this.renderer.addClass(ele, 'is-logged-in');
    this.renderer.setStyle(ele, 'color', 'pink');

  }
  setUpperCase() {
    this.name1 = this.name1.toUpperCase();
  }

  diplayName() {
    alert(this.name1);
  }
  getUpperCaseName() {
    return this.name1;
  }

  updateName($event: Event) {
     // 型アサーションは値の持つ型情報を実行時の値とは別に上書きします。
    // this.serverName =(<HTMLInputElement>event.target).value;
    const ele = $event.target as HTMLInputElement;
    console.log('ele', ele);
    this.name = ele.value;
  }

  onClick() {
    console.log('hello on click');
  }

  getStates() {
    return this.states.map(state => state.toUpperCase());
  }
}
