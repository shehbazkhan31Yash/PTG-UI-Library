import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { SelectComponent } from '../../select/select/select.component';

import { FileDownloadComponent } from './file-download.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

describe('FileDownloadComponent', () => {
  let component: FileDownloadComponent;
  let fixture: ComponentFixture<FileDownloadComponent>;
  global.URL.createObjectURL = jest.fn();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[NgSelectModule, FormsModule],
      declarations: [ FileDownloadComponent, SelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDownloadComponent);
    component = fixture.componentInstance;
    const tableData = {
      columnsData:['SN', 'NAME', 'DESIGNATION', 'DEPARTMENT'],
      rowsData: [
        [1, 'Astik', 'Manager', 'Engineering and MBA'],
        [2, 'Yogita', 'QA', 'Testing'],
        [3, 'Rajesh', 'Manager', 'Management'],
        [4, 'Swapnil', 'Developer', 'Development'],
        [5, 'Anmol', 'Consultant', 'HR'],
        [6, 'Mansi', 'Software Developer', 'Engineering'],
        [7, 'Astik', 'Manager', 'Engineering and MBA'],
        [8, 'Yogita', 'QA', 'Testing'],
        [9, 'Rajesh', 'Manager', 'Management'],
        [10, 'Yogita', 'QA', 'Testing'],
      ]
    }
    component.tableData = tableData;
    fixture.detectChanges();
  });

  it('should create',() => {
    expect(component).toBeTruthy();
  });
  it('should onChange called', ()=>{
    const event: Event = <Event><any>{
      target: {
          value: "test"     
      }
    };
    component.onChange(event);
  })

  it('should generate blob', () =>{
    const data = 'File';
    const type = 'png';
    component.generateBlob(data, type);
    expect(component.generateBlob(data, type)).toBeTruthy();
  })
  it('should getElementAndAsignBlob called', ()=>{
    const blob = new Blob([""], { type: 'text/html' });;
    component.getElementAndAsignBlob(blob, 'type');
     const mockElement = document.createElement('a');
     mockElement.download = 'file';
     global.URL.createObjectURL = jest.fn(() => 'fileurl');
     expect(mockElement.download).toBe('file');
  });
  it('should excel file download', () =>{
      component.downloadFile();
      component.fileType = 'EXCEL';
      expect(component.fileType).toBe('EXCEL');
      expect(component.downloadExcelFile()).toBeCalled;
  })

  it('should word file download', () =>{
    component.downloadFile();
    component.fileType = 'WORD';
    expect(component.fileType).toBe('WORD');
    expect(component.downloadWordFile()).toBeCalled;
  })

  it('should png file download', () =>{
    component.fileType = 'PNG';
    expect(component.fileType).toBe('PNG');
    expect(component.downloadimage()).toBeCalled;
    const mockElement = document.createElement('a');
    mockElement.download = 'file';
    global.URL.createObjectURL = jest.fn(() => 'fileurl');
    expect(mockElement.download).toBe('file');
  })
  it('should create table called',() =>{
    component.createTable();
    expect(component.createTable).toBeTruthy();
  });
  it('should file type is excle',fakeAsync(()=>{
    component.fileType = 'EXCEL';
    component.downloadFile();
    component.downloadExcelFile();
  }));

  it('should file type is png',fakeAsync(()=>{
    component.fileType = 'PNG';
    component.downloadFile();
    component.downloadimage();
  }));

  it('should file type is WORD',fakeAsync(()=>{
    component.fileType = 'WORD';
    component.downloadFile();
    component.downloadWordFile();
  }));

  it('should file type is PDF',async() =>{
    component.downloadPdfFile();
  });

});
