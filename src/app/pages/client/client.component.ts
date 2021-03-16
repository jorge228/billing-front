import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

  public model: string = 'clients';
  public entity: string = 'client';
  public clients: any[] = [];
  public page: number = null;

  constructor(private crudService: CrudService, private router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkParams();
    this.getData();
  }

  checkParams() {
    this.page = this._activatedRoute.snapshot.params.page;
  }

  getData() {
    this.crudService.paginationList(this.model, this.page)
      .subscribe((resp: any) => {
        console.log(resp);
        this.clients = resp.content;
      });
  }

  goToCreate() {
    this.router.navigate([`/dashboard/${this.entity}/create`]);
  }

  goToEdit(id: string) {
    this.router.navigate([`/dashboard/${this.entity}/update/${id}`]);
  }

  deleteClient(id: number) {
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
