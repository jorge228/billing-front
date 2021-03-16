import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() paginator: any;
  @Input() model: string;
  public pages: number[];
  public route: string;
  public from: number;
  public until: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initPaginator();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let paginatorUpdate = changes['paginator'];
    if (paginatorUpdate.previousValue) {
      this.initPaginator();
    }
  }

  initPaginator() {
    this.pages = new Array(this.paginator.totalPages).fill(0).map((value, index) => index + 1);
    if (this.paginator.totalPages > 5) {
      this.personalizedPaginator();
    }
  }

  goToPage(page: number) {
    let goPage = page;

    if (page <= 0) {
      goPage = 1;
    }

    if (page > this.paginator.totalPages) {
      goPage = this.paginator.totalPages;
    }

    this.router.navigate([`/dashboard/${this.model}/page/${goPage - 1}`]);
  }

  personalizedPaginator() {
    switch (this.paginator.number) {
      case 0:
        this.pages = this.pages.slice(0, 5);
        break;
      case 1:
        this.pages = this.pages.slice(0, 5);
        break;
      case this.paginator.totalPages - 1:
        this.pages = this.pages.slice(this.paginator.totalPages - 5, this.paginator.totalPages);
        break;
      case this.paginator.totalPages - 2:
        this.pages = this.pages.slice(this.paginator.totalPages - 5, this.paginator.totalPages);
        break;
      default:
        this.pages = this.pages.slice(this.paginator.number - 2, this.paginator.number + 3);
        break;
    }
  }

}
