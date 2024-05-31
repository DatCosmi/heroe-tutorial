import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //private heroesUrl = 'api/heroes';
  data: User[] = [
    {
      id: 1,
      name: 'Ivan',
      lastName: 'Garcia',
      age: 21,
      status: true,
    },
    {
      id: 2,
      name: 'Samuel',
      lastName: 'Reyna',
      age: 20,
      status: true,
    },
    {
      id: 3,
      name: 'Paola',
      lastName: 'Herrera',
      age: 21,
      status: false,
    },
    {
      id: 5,
      name: 'Juan',
      lastName: 'Pérez',
      age: 28,
      status: true,
    },
    {
      id: 6,
      name: 'María',
      lastName: 'López',
      age: 34,
      status: false,
    },
    {
      id: 7,
      name: 'Carlos',
      lastName: 'García',
      age: 22,
      status: true,
    },
    {
      id: 8,
      name: 'Ana',
      lastName: 'Martínez',
      age: 41,
      status: false,
    },
    {
      id: 9,
      name: 'Luis',
      lastName: 'Rodríguez',
      age: 30,
      status: true,
    },
  ];

  constructor() {}

  getData() {
    return this.data;
  }

  addData(user: User) {
    this.data.push(user);
  }
}
