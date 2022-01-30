import { Injectable } from '@angular/core';
import { Condition } from 'selenium-webdriver';
import { Heroes } from '../heroes/Entidades/Heroe';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private lista: Heroes[] = [
    {
      idHeroe: '1',
      foto: 'https://i.pinimg.com/originals/a3/44/a2/a344a2a9083ae927d7bbba1caf6dab48.jpg',
      nombre: 'Capitán América',
      alias: 'Cap!',
      fechaNacimiento: new Date('04/07/1918'),
      nacionalidad: 'Americana',
      residencia: 'New York',
      poderes: ['Super fuerza'],
      nivel: 5,
    },
    {
      idHeroe: '2',
      foto: 'https://images.hdqwalls.com/download/iron-man-avengers-4-o1-1280x2120.jpg',
      nombre: 'Iron Man',
      alias: 'Tony',
      fechaNacimiento: new Date('1970/05/29'),
      nacionalidad: 'Americana',
      residencia: 'New York',
      poderes: [
        'Experto en armas',
        'Inteligencia Avanzada',
        'Vuelo supersónico',
      ],
      nivel: 5,
    },
    {
      idHeroe: '3',
      foto: 'https://i.pinimg.com/564x/cd/fe/86/cdfe867ce706a044c7e7a7b860749bf1.jpg',
      nombre: 'Thor',
      alias: 'Dios nórdico',
      fechaNacimiento: new Date('1962/08/23'),
      nacionalidad: 'Asgardiana',
      residencia: 'Asgard',
      poderes: ['Fuerza sobrehumana', 'Velocidad'],
      nivel: 5,
    },
    {
      idHeroe: '4',
      foto: 'https://www.muycomputer.com/wp-content/uploads/2021/08/Spider-Man.jpg',
      nombre: 'Spider-Man',
      alias: 'Tu buen vecino, el hombre araña...',
      fechaNacimiento: new Date('1992/08/23'),
      nacionalidad: 'Americana',
      residencia: 'New York',
      poderes: ['Mutante'],
      nivel: 5,
    },
    {
      idHeroe: '5',
      foto: 'https://i.pinimg.com/originals/6f/60/dd/6f60dddf107c5f27721f782e1317686c.jpg',
      nombre: 'Wolverine',
      alias: 'Arma X',
      fechaNacimiento: new Date('1982/08/17'),
      nacionalidad: 'Americana',
      residencia: 'New York',
      poderes: ['Fuerza sobrehumana', 'Velocidad'],
      nivel: 5,
    },
    {
      idHeroe: '6',
      foto: 'https://i.pinimg.com/originals/e8/21/90/e82190889e334d752878e509d75bdcc3.jpg',
      nombre: 'Carnage',
      alias: 'Masacre',
      fechaNacimiento: new Date('1972/04/11'),
      nacionalidad: 'Americana',
      residencia: 'New York',
      poderes: ['Simbionte'],
      nivel: 5,
    },
    {
      idHeroe: '7',
      foto: 'https://i.pinimg.com/564x/56/de/f4/56def43093b5a2febc0e88bb12e3ea3d.jpg',
      nombre: 'Venom',
      alias: 'Eddie',
      fechaNacimiento: new Date('1985/09/08'),
      nacionalidad: 'Americana',
      residencia: 'New York',
      poderes: [' Simbionte'],
      nivel: 5,
    },
    {
      idHeroe: '8',
      foto: 'https://i.pinimg.com/564x/53/39/9d/53399de33262dd29c8ce62eea46acb81.jpg',
      nombre: 'Knull',
      alias: 'Dios misterioso de la oscuridad',
      fechaNacimiento: new Date('1400/01/01'),
      nacionalidad: 'Universal',
      residencia: 'La oscuridad',
      poderes: ['Simbionte'],
      nivel: 5,
    },
    {
      idHeroe: '9',
      foto: 'https://i.pinimg.com/564x/64/ad/b8/64adb86006006bd88e28a08f7d4a8450.jpg',
      nombre: 'War Machine',
      alias: 'Glenn',
      fechaNacimiento: new Date('1985/10/08'),
      nacionalidad: 'Americana',
      residencia: 'New York',
      poderes: ['Aviador', 'Fuerza y velocidad'],
      nivel: 5,
    },
    {
      idHeroe: '10',
      foto: 'https://i.pinimg.com/564x/7a/cb/dd/7acbdd3d8b3fef678dd41acb9b057674.jpg',
      nombre: 'Hulk',
      alias: 'Bruce Banner',
      fechaNacimiento: new Date('1979/09/08'),
      nacionalidad: 'Americana',
      residencia: 'New York',
      poderes: ['Super Fuerza', 'Super Resistencia', 'Regeneración'],
      nivel: 5,
    },
    {
      idHeroe: '11',
      foto: 'https://i.pinimg.com/564x/e7/3b/44/e73b4497f12847b782987e3b51c79b40.jpg',
      nombre: 'Dr. Strange',
      alias: 'Hechicero Supremo',
      fechaNacimiento: new Date('1985/09/08'),
      nacionalidad: 'Americana',
      residencia: 'New York',
      poderes: ['Hechicero', 'Fuerzas Místicas'],
      nivel: 5,
    },
    {
      idHeroe: '12',
      foto: 'https://i.pinimg.com/564x/83/c8/d9/83c8d98997262b1b4d51e23292b40299.jpg',
      nombre: 'Kang',
      alias: 'El Conquistador',
      fechaNacimiento: new Date('1200/01/01'),
      nacionalidad: 'Universal',
      residencia: 'Universal',
      poderes: ['Espadachin', 'Super Inteligencia', 'Manejo del tiempo'],
      nivel: 5,
    },
    {
      idHeroe: '13',
      foto: 'https://i.pinimg.com/564x/f3/59/1f/f3591fed3c7caa554df15178ad41c4b6.jpg',
      nombre: 'Thanos',
      alias: '',
      fechaNacimiento: new Date('19500/04/08'),
      nacionalidad: 'ALars',
      residencia: 'Titanes',
      poderes: ['Combate cuerpo a cuerpo', 'Proyección astral'],
      nivel: 5,
    },
    {
      idHeroe: '14',
      foto: 'https://i.pinimg.com/564x/66/46/1f/66461f4f51a9ff509b31e2ce024853ef.jpg',
      nombre: 'Galactus',
      alias: 'Galan',
      fechaNacimiento: new Date('1100/01/01'),
      nacionalidad: 'Universal',
      residencia: 'Universal',
      poderes: ['Poder inconmensurable e ilimitado'],
      nivel: 5,
    },
    {
      idHeroe: '15',
      foto: 'https://i.pinimg.com/564x/07/14/e9/0714e9058071ada285a751174fe7257f.jpg',
      nombre: 'MODOK',
      alias: 'Organismo Móvil/Mecanizado Diseñado Solo para Matar',
      fechaNacimiento: new Date('1100/01/01'),
      nacionalidad: 'Desconocida',
      residencia: 'Desconocida',
      poderes: ['Intelecto sobrehumano', 'Poderes psiónicos'],
      nivel: 5,
    },
    {
      idHeroe: '16',
      foto: 'https://i.pinimg.com/564x/58/08/a7/5808a70fd12555cd22ec69d547a03c59.jpg',
      nombre: 'Magneto',
      alias: 'Max',
      fechaNacimiento: new Date('1930/01/01'),
      nacionalidad: 'Alemana',
      residencia: 'Desconocida',
      poderes: [
        'Control de formas de magnetismo',
        'Creación de campos de fuerza magnéticos',
      ],
      nivel: 5,
    },
  ];

  constructor() {}
  getHeroes(): Heroes[] {
    return [...this.lista];
  }
  getHeroeById(id: string) {
    return {
      ...this.lista.find((pl) => {
        return pl.idHeroe === id;
      }),
    };
  }
  deleteHeroe(cod: string) {
    this.lista = this.lista.filter((pl) => {
      return pl.idHeroe !== cod;
    });
  }
  insertarHeroe(
    foto,
    nombre,
    alias,
    fechaNacimiento,
    nacionalidad,
    residencia,
    nivel
  ) {
    this.lista.push({
      foto,
      nombre,
      alias,
      fechaNacimiento,
      nacionalidad,
      residencia,
      poderes: [],
      nivel,
      idHeroe: this.lista.length + 1 + '',
    });
  }

  insertarPoderes(cod: string, poder: string) {
    for (let index = 0; index < this.lista.length; index++) {
      if (this.lista[index].idHeroe === cod) {
        this.lista[index].poderes.push(poder);
      }
    }
  }
  editarHeroe(
    id: string,
    foto: string,
    nombre: string,
    alias: string,
    fechaNacimiento: Date,
    nacionalidad: string,
    residencia: string,
    nivel: number
  ) {
    for (let index = 0; index < this.lista.length; index++) {
      if (this.lista[index].idHeroe === id) {
        this.lista[index].foto = foto;
        this.lista[index].nombre = nombre;
        this.lista[index].alias = alias;
        this.lista[index].fechaNacimiento = fechaNacimiento;
        this.lista[index].nacionalidad = nacionalidad;
        this.lista[index].residencia = residencia;
        this.lista[index].nivel = nivel;
      }
    }
  }

  editarPower(idHeroe: string, index: number, power: string) {
    const heroe = [];
    for (let i = 0; i < this.getHeroeById(idHeroe).poderes.length; i++) {
      if (index === i) {
        this.getHeroeById(idHeroe).poderes[i] = power;
      }
    }
  }

  deletePowerHeroe(idHeroe: string, index: number) {
    for (let i = 0; i < this.getHeroeById(idHeroe).poderes.length; i++) {
      if (index === i) {
        this.getHeroeById(idHeroe).poderes.splice(index, 1);
      }
    }
  }
}
