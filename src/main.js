

import './css/index.css';
import './css/index.less';
import './css/index.scss';
import './fonts/iconfont.css';

// import $ from 'jquery';
const $ = require('jquery');

$(function() {
  $('li:odd').css('color', 'lightblue')
  $('li:even').css('color', 'orange')
})


class Person {
  static info = {
    name: 'zs',
    age: 20
  }
}

// var p1 = new Person();

console.log(Person.info);