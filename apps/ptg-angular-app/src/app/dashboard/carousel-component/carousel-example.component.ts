import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-carousel-example',
  templateUrl: './carousel-example.component.html',
  styleUrls: ['./carousel-example.component.scss'],
})
export class CarouselExampleComponent {
  isLoaded = true;
  htmlCode = `
      <ptg-ui-carousels [carouselItems]="sampleImageWithControls" [showControls]="true"></ptg-ui-carousels>`;

  htmlCodeWithIndicators = `
      <ptg-ui-carousels [carouselItems]="sampleImages" [showIndicators]="true"></ptg-ui-carousels>`;

  htmlCodeWithCaption = `
  <ptg-ui-carousels [carouselItems]="sampleImagesWithCaption" [showIndicators]="true"></ptg-ui-carousels>`;

  tsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-carousel-component',
      templateUrl: './demo-carousel.component.html'
    })
    export class DemoCarouselComponent {
     sampleImageWithControls = [
    { image: 'https://picsum.photos/id/328/3264/2448', alt: "image1" },
    { image: 'https://picsum.photos/id/431/5000/3334', alt: "image2" },
    { image: 'https://picsum.photos/id/5/5000/3334', alt: "image3" }
  ];
  sampleImages = [
    { image: 'https://picsum.photos/id/328/3264/2448', alt: "image1" },
    { image: 'https://picsum.photos/id/431/5000/3334', alt: "image2" },
    { image: 'https://picsum.photos/id/5/5000/3334', alt: "image3" }
  ];
  sampleImagesWithCaption = [
    { image: 'https://picsum.photos/id/328/3264/2448', alt: "image1", captionLabel: 'First slide label', captionContent: 'Some representative placeholder content for the first slide.' },
    { image: 'https://picsum.photos/id/431/5000/3334', alt: "image2", captionLabel: 'Second slide label', captionContent: 'Some representative placeholder content for the second slide.' },
    { image: 'https://picsum.photos/id/5/5000/3334', alt: "image3", captionLabel: 'Third slide label', captionContent: 'Some representative placeholder content for the third slide.' }
  ];
    }`;

  sampleImageWithControls = [
    { image: 'https://picsum.photos/id/328/3264/2448', alt: "image1" },
    { image: 'https://picsum.photos/id/431/5000/3334', alt: "image2" },
    { image: 'https://picsum.photos/id/5/5000/3334', alt: "image3" }
  ];
  sampleImages = [
    { image: 'https://picsum.photos/id/5/5000/3334', alt: "image1" },
    { image: 'https://picsum.photos/id/328/3264/2448', alt: "image2" },
    { image: 'https://picsum.photos/id/431/5000/3334', alt: "image3" }
  ];
  sampleImagesWithCaption = [
    { image: 'https://picsum.photos/id/5/5000/3334', alt: "image1", captionLabel: 'First slide label', captionContent: 'Some representative placeholder content for the first slide.' },
    { image: 'https://picsum.photos/id/431/5000/3334', alt: "image2", captionLabel: 'Second slide label', captionContent: 'Some representative placeholder content for the second slide.' },
    { image: 'https://picsum.photos/id/328/3264/2448', alt: "image3", captionLabel: 'Third slide label', captionContent: 'Some representative placeholder content for the third slide.' }
  ];
}
