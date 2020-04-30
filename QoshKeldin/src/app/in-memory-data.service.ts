import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Tole bi', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/", description: "1st floor: 146-152, 2nd floor: 246-251, 3rd floor: 342-363, 4th floor: 466-476, 5th floor: 502-523"},
      { id: 2, name: 'Panfilov', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/", description: "1st floor: 100-144, 2nd floor: 200-245, 3rd floor: 300-344, 4th floor: 400-418"},
      { id: 3, name: 'Ablyaikhan', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/", description: "1st floor: 156-184, 2nd floor: 252-284, 3rd floor: 359-389, 4th floor: 432-462"},
      { id: 4, name: 'FIT Office of registration', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/"},
      { id: 5, name: 'FIT Dean`s office' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/ru/"},
      { id: 6, name: 'Independence Hall' , image: "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c135.0.810.810a/s640x640/79372039_162450638456675_3815309259086989061_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=23HQD4sptZYAX-GorYz&oh=9969ae7daa4f6b7f4c9fccb268c378aa&oe=5ED655CD", description: "Tole bi 2nd floor" ,  url:"https://www.kbtu.kz/"},
      { id: 7, name: 'Canteen', image: "https://semantic-ui.com/images/wireframe/white-image.png" ,  url:"https://www.kbtu.kz/"},
      { id: 8, name: 'Library', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg" ,  url:"https://www.kbtu.kz/"},
      { id: 9, name: 'London`s room' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/"},
      { id: 10, name: 'Kino hall', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg" ,  url:"https://www.kbtu.kz/"},
      { id: 11, name: 'Khairov Hall' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/"},
      { id: 12, name: 'Place for smoke' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg", url: "https://www.kbtu.kz/"}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
/*{ id: 9, name: '428' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/"},
      { id: 10, name: '461', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg" ,  url:"https://www.kbtu.kz/"},
      { id: 11, name: '444', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg" ,  url:"https://www.kbtu.kz/"},
      { id: 12, name: '404' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/"},
      { id: 13, name: '443' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/"},
      { id: 14, name: '414' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/"},
      { id: 15, name: '218' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg",  url:"https://www.kbtu.kz/"},
      { id: 16, name: '452', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg" ,  url:"https://www.kbtu.kz/"},
      { id: 17, name: '179', image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg", url:"https://www.kbtu.kz/"},
      { id: 18, name: '441' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg", url:"https://www.kbtu.kz/"},
      { id: 19, name: '443' , image: "https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg", url:"https://www.kbtu.kz/"},
      */
