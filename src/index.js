import './index.css';
import Terrain from './terrain';
import Ship from './ship';

let canvas = document.createElement('canvas');
canvas.width = 1500;
canvas.height = 300;
let context = canvas.getContext('2d');
document.body.appendChild(canvas);

let terrain = new Terrain(1500, 300);
terrain.render(context);
let ship = new Ship(1500, 300);
ship.render(context);