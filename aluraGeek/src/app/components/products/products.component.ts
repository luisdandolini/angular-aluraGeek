import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  titleProductsOne:string = 'Star Wars';
  titleProductsTwo:string = 'Consoles';
  titleProductsTrhee:string = 'Diversos';

  productStarWars = [
    {
      productPhoto: "../../../assets/img/caneca.png",
      productTitle: 'Caneca Star Wars',
      productPrice: '45,00',
    },
    {
      productPhoto: "../../../assets/img/enfeite.png",
      productTitle: 'Darth Vader',
      productPrice: '350,00',
    },
    {
      productPhoto: "../../../assets/img/boneco.png",
      productTitle: 'Soldado Star Wards',
      productPrice: '45,00',
    },
    {
      productPhoto: "../../../assets/img/babyYoda.png",
      productTitle: 'Baby Yoda',
      productPrice: '999,00',
    },
    {
      productPhoto: "../../../assets/img/yoda.png",
      productTitle: 'Yoda',
      productPrice: '1.255,00',
    },
    {
      productPhoto: "../../../assets/img/DarthVader.png",
      productTitle: 'Fantasia Darth Vader',
      productPrice: '3.500,00',
    }
  ];

  productConsole = [
    {
      productPhoto: "../../../assets/img/controleXbox.png",
      productTitle: 'Controle Xbox Serie S',
      productPrice: '399,00',
    },
    {
      productPhoto: "../../../assets/img/consolePs5.png",
      productTitle: 'Console PS5',
      productPrice: '4.000,00',
    },
    {
      productPhoto: "../../../assets/img/controleSwitch.png",
      productTitle: 'Controle Nintendo Switch',
      productPrice: '450,00',
    },
    {
      productPhoto: "../../../assets/img/Atari.png",
      productTitle: 'Atari',
      productPrice: '5.999,00',
    },
    {
      productPhoto: "../../../assets/img/GameBoy.png",
      productTitle: 'Game Boy',
      productPrice: '1.255,00',
    },
    {
      productPhoto: "../../../assets/img/XboxX.png",
      productTitle: 'Xbox Series X',
      productPrice: '7.500,00',
    }
  ];

  productAll = [
    {
      productPhoto: "../../../assets/img/bonecoSonic.png",
      productTitle: 'Boneco Sonic',
      productPrice: '49,00',
    },
    {
      productPhoto: "../../../assets/img/pikachu.png",
      productTitle: 'Boneco Picachu',
      productPrice: '900,99',
    },
    {
      productPhoto: "../../../assets/img/VR.png",
      productTitle: 'VR',
      productPrice: '4.500,00',
    },
    {
      productPhoto: "../../../assets/img/Despertador.png",
      productTitle: 'Despertador',
      productPrice: '199,99',
    },
    {
      productPhoto: "../../../assets/img/CamisaAtari.png",
      productTitle: 'Camisa Atari',
      productPrice: '89,00',
    },
    {
      productPhoto: "../../../assets/img/camisa.png",
      productTitle: 'Camisa Atari',
      productPrice: '69,99',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
