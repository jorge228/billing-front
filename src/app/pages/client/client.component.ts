import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.crudService.list()
      .subscribe((resp: any) => {
        console.log(resp);
      });
  }

}
