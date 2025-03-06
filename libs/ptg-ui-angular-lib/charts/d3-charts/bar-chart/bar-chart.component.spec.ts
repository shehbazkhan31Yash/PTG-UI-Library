import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    component.data=[{"Framework":"React","Released": "2013","Stars": "120793","color": "blue"}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tests private function', () => {
    // Arrange
    const myPrivateFunc = jest.spyOn(BarChartComponent.prototype as any, 'createSvg');
    myPrivateFunc.mockImplementation(() => {
    expect(myPrivateFunc).toHaveBeenCalled();
    });    
  });

});
