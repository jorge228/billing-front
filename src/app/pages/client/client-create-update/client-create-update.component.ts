import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../../services/crud/crud.service';
import Swal from 'sweetalert2';

const model: string = 'clients';
const entity: string = 'client';

@Component({
  selector: 'app-client-create-update',
  templateUrl: './client-create-update.component.html'
})
export class ClientCreateUpdateComponent implements OnInit {

  public id: number = null;
  public title: string = 'Dinamic Title';

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  public defaults = {} as any;

  constructor(private _formBuilder: FormBuilder, private _activatedRoute: ActivatedRoute, private crudService: CrudService, private router: Router) {
    this.checkParams();
    this.setForm();
  }

  ngOnInit() {
    if (this.id) {
      this.mode = 'update';
      this.getData();
    } else {
      this.defaults = {} as any;
      this.setForm();
    }
  }

  checkParams() {
    this.id = this._activatedRoute.snapshot.params.id;
  }

  getData() {
    this.crudService.getById(model, this.id).
      subscribe((response) => {
        this.defaults = response.data;
        this.setForm();
      });
  }

  goToList() {
    this.router.navigate(['/dashboard/' + model]);
  }

  save() {
    if (this.mode === 'create') {
      this.create();
    } else if (this.mode === 'update') {
      this.update();
    }
  }

  create() {
    const data = this.form.value;
    this.crudService.create(model, data).
      subscribe((resp) => {
        this.goToList();
        Swal.fire('Well done!', `Client '${resp.data.name}' was created successfully.` , 'success');
      });
  }

  update() {
    const data = this.form.value;
    this.crudService.update(model, data, this.id).
      subscribe((resp) => {
        this.goToList();
        Swal.fire('Well done!', `Client '${resp.data.name}' was updated successfully.` , 'success');
      });
  }

  setForm() {
    this.form = this._formBuilder.group({
      //id: this.defaults?.id,
      cif: this.defaults?.cif,
      name: this.defaults?.name,
      address: this.defaults?.address,
      postalCode: this.defaults?.postalCode,
      city: this.defaults?.city,
      country: this.defaults?.country,
      email: this.defaults?.email,
      phone: this.defaults?.phone,
      createdAt: this.defaults?.createdAt
    });
  }

}
