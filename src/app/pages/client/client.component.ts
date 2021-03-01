import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

  public model: string = 'clients';
  public entity: string = 'client';
  public clients: any[] = [];

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.crudService.list(this.model)
      .subscribe((resp: any) => {
        console.log(resp);
        this.clients = resp.data;
        console.log(this.clients);
      });
  }

  goToCreate() {
    this.router.navigate([`/dashboard/${this.entity}/create`]);
  }

  goToEdit(id: string) {
    this.router.navigate([`/dashboard/${this.entity}/update/${id}`]);
  }

}
