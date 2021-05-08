import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public title: string;
  public titleSubs$: Subscription;

  constructor(private router: Router) {
    this.getDataRoute();
    this.titleSubs$ = this.getDataRoute()
      .subscribe(({ title }) => {
        this.title = title;
        document.title = `BillingApp - ${title}`;
      });
  }
  ngOnDestroy(): void {
    document.title = `AdminPro`;
    this.titleSubs$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

}
