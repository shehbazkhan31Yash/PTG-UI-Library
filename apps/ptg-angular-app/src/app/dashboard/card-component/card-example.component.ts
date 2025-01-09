import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-card-component',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.scss'],
})
export class CardExampleComponent {
  cardObj = {
    title: 'card title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
    src: 'https://img.freepik.com/free-photo/high-angle-spring-gerbera-flowers_23-2148894171.jpg?w=900&t=st=1728473029~exp=1728473629~hmac=29ea62b6f59d41d8bcec424bd447ec38d6a17b8d94235bd040b9dd424ff34a1f',
  }
  cardDataObj: any = [
    {
      cardId: 1,
      cardTitle: 'card title',
      cardContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      src: 'https://img.freepik.com/free-photo/close-up-red-gerbera-flower-with-raindrops_23-2148268283.jpg?t=st=1728472897~exp=1728476497~hmac=0f288092aa78cfead720dfe8d6f382b7eb6fa13878b89d1386e992af3dfd74b1&w=900',
    },
    {
      cardId: 2,
      cardTitle: 'Card Title',
      cardContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      src: 'https://img.freepik.com/free-photo/high-angle-spring-gerbera-flowers_23-2148894171.jpg?w=900&t=st=1728473029~exp=1728473629~hmac=29ea62b6f59d41d8bcec424bd447ec38d6a17b8d94235bd040b9dd424ff34a1f',
    },
  ];
  htmlCode = `
  <ptg-ui-card [cardObj]="cardObj">
          </ptg-ui-card>
  `;

  tsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'ptg-ui-card-component',
      templateUrl: './card-example.component.html',
      styleUrls: ['./card-example.component.scss']
    })
    export class CardExampleComponent {
    cardObj:any = {
    title: 'card title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
    src: 'https://img.freepik.com/free-photo/high-angle-spring-gerbera-flowers_23-2148894171.jpg?w=900&t=st=1728473029~exp=1728473629~hmac=29ea62b6f59d41d8bcec424bd447ec38d6a17b8d94235bd040b9dd424ff34a1f',
  }
  }`;

}
