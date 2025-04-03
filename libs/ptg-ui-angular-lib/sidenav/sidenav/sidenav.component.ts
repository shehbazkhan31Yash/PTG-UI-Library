/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-sidenav;
 * @description This component for side navigation/menu
 * @modify Akshay Patidar
 **/

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ptg-ui-sidenav1',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild('fixedButton') elRef: ElementRef | any;
  hidden = true;
  isCollapsed = true;
  getMenuId: any;

  @Input() selectedPath = '';
  @Input() menuItems?: [] | any;
  // menuItems: any[] = [];
  @Input() isMenuOpen = false;
  @Output() selectMenu = new EventEmitter<any>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  destroyed = new Subject<void>();
  currentScreenSize!: string;
  getScreenSize: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {
  }

    
  ngOnInit(): void {
    this.menuItems =[
      {
        id: '1',
        path: '/accordian-example',
        icon: 'fa-solid fa-chevron-down',
        label: 'ACCORDION',
        disabled: false,
      },
      {
        id: '2',
        path: '/calendar',
        icon: 'fa-solid fa-calendar',
        label: 'CALENDER',
        disabled: false,
      },
      {
        id: '3',
        path: '/carousel',
        icon: 'fas fa-solid fa-slideshare',
        label: 'CAROUSEL',
        disabled: false,
      },
    
      // Charts routing
      {
        id: '4',
        label: 'CHARTS',
        icon: 'fas fa-chart-line',
        pages: [
          {
            label: 'D3_CHARTS',
            path: '/charts/d3-charts',
            id: 'd3-chart',
            disabled: false,
            parentId: '4',
          },
          {
            label: 'HIGH_CHARTS',
            path: '/charts/high-charts',
            id: 'high-chart',
            disabled: false,
            parentId: '4',
          },
        ],
      },
      // Datatable routing
      {
        id: '5',
        label: 'DATA_TABLE',
        icon: 'far fa-star',
        pages: [
          {
            label: 'AG_GRID',
            path: '/datatable/ag-grid',
            id: 'ag-grid',
            disabled: false,
            parentId: '5',
          },
          {
            label: 'NGX_DATATABLE',
            path: '/datatable/ngx-datatable',
            id: 'ngx-table',
            disabled: false,
            parentId: '5',
          },
          {
            label: 'MATERIAL',
            path: '/datatable/material-datatable',
            id: 'material',
            disabled: false,
            parentId: '5',
          },
        ],
      },
      {
        id: '6',
        path: '/dialog',
        icon: 'fas fa-window-maximize',
        label: 'DIALOG',
        disabled: false,
      },
      {
        id: '7',
        path: '/draganddrop',
        icon: 'fas fa-grip-vertical',
        label: 'DRAG_AND_DROP',
        disabled: false,
      },
      {
        id: '8',
        path: '/download',
        icon: 'fas fa-download',
        label: 'DOWNLOAD',
        disabled: false,
      },
      {
        id: '9',
        path: '/grid-layout',
        icon: 'fa-solid fa-border-all',
        label: 'GRID_LAYOUT',
        disabled: false,
      },
      {
        id: '10',
        path: '/indeterminate-checkbox',
        icon: 'fas fa-square-check',
        label: 'INDETERMINATE',
        disabled: false,
      },
      {
        id: '11',
        path: '/pipes',
        icon: 'fa-solid fa-p',
        label: 'PIPES',
        disabled: false,
      },
      {
        id: '12',
        path: '/role',
        icon: 'fas fa-lock',
        label: 'ROLE_BASED',
        disabled: false,
      },
      {
        id: '13',
        path: '/select',
        icon: 'fa-solid fa-check-to-slot',
        label: 'SELECT',
        disabled: false,
      },
      {
        id: '14',
        path: '/accessibility',
        icon: 'fa-solid fa-keyboard',
        label: 'WEB_ACCESSIBILITY',
        disabled: false,
      },
      {
        id: '15',
        path: '/multistep-form',
        icon: 'fa-solid fa-file',
        label: 'MULTI_FORMS',
        disabled: false,
      },
      {
        id: '15',
        path: '/card',
        icon: 'fa-solid fa-file',
        label: 'CARDS',
        disabled: false,
      },
      {
        id: '16',
        path: '/breadcrumbs',
        icon: 'fa-solid fa-file',
        label: 'BREADCRUMBS',
        disabled: false,
      },
      {
        id: '17',
        path: '/theme-generator',
        icon: 'fa-solid fa-file',
        label: 'THEME_GENERATOR',
        disabled: false,
      },
      {
        id: '18',
        path: '/mat-theme',
        icon: 'fa-solid fa-file',
        label: 'MAT_THEME_GENERATOR',
        disabled: false,
      },
      {
        id: '18',
        path: '/button',
        icon: 'fa-solid fa-file',
        label: 'BUTTON',
        disabled: false,
      },
    ];
    this.menuItems.sort((a, b) => a.label.localeCompare(b.label));


    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
        this.customScss();
      });
  }
  toggle(): void {
    this.hidden = !this.hidden;
  }

  open(): void {
    this.hidden = false;
  }

  close(): void {
    this.hidden = true;
  }

  // Method for navigation on click on menu
  navigate(menuItem: any): void {
    if (typeof menuItem === 'object') {
      if (menuItem && menuItem.disabled === false) {
        this.selectedPath = menuItem.path;
        this.selectMenu.emit(menuItem);
        this.router.navigate([this.selectedPath], { relativeTo: this.route });
      }
    } else {
      this.isCollapsed = !this.isCollapsed;
      this.getMenuId = menuItem;
    }
  }
  isMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.customScss();
  }
  customScss() {
    const dom: HTMLElement = this.elementRef.nativeElement;
    // const elements = dom.querySelectorAll('.fixed-button');

    const x: any = document.getElementsByClassName('sidenav-container');
    // let btnClass: any = document.getElementsByClassName('fixed-button');

    if (!this.isMenuOpen) {
      x[0].style.width = '4vw';
    } else {
      if (this.currentScreenSize == 'XSmall') {
        x[0].style.width = '0vw';
      } else if (this.currentScreenSize == 'Small') {
        //  btnClass[0].style.top = "35px";
        x[0].style.width = '25vw';
      } else if (this.currentScreenSize == 'Medium') {
        //  btnClass[0].style.top = "35px";
        x[0].style.width = '18vw';
      } else if (this.currentScreenSize == 'Large') {
        // btnClass[0].style.top = "15px";
        x[0].style.width = '18vw';
      } else if (this.currentScreenSize == 'XLarge') {
        x[0].style.width = '18vw';
        //  btnClass[0].style.top = "15px";
      } else {
        // btnClass[0].style.top = "15px";
      }
      this.cdr.detectChanges();
    }
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
