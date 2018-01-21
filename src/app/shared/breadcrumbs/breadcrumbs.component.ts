import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor(
    private router: Router,
    public title: Title) {
      this.getRouteData()
      .subscribe(data => {
        this.label = data.title;
        this.title.setTitle(data.title);
      });
  }

  ngOnInit() {
  }

  getRouteData() {
    return this.router.events
    .filter(event => event instanceof ActivationEnd && event.snapshot.firstChild == null)
    .map((event: ActivationEnd) => event.snapshot.data);
  }

}
