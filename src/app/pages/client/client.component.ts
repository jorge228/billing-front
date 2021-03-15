import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    this.router.navigate([`/dashboard/${this.entity}/update/200`]);
  }

  deleteClient(id: number) {
    //TODO if response true, then show swal.fire
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.crudService.delete(this.model, id).
          subscribe(() => {
            this.clients = this.clients.filter(c => c.id !== id);
          });
        Swal.fire('Well done!','Client was deleted successfully.','success');
      }
    });
  }

}
