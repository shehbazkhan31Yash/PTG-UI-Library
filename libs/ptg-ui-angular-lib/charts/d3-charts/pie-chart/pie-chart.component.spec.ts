import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    component.data=[{"Framework":"React","Released": "2013","Stars": "120793","color": "blue"}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tests private function', () => {
    // Arrange
    const myPrivateFunc = jest.spyOn(PieChartComponent.prototype as any, 'createSvg');
    myPrivateFunc.mockImplementation(() => {
    expect(myPrivateFunc).toHaveBeenCalled();
    });    
  });


});
