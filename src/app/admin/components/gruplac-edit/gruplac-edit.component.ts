import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GruplacService } from 'src/app/core/services/gruplac/gruplac.service';

@Component({
  selector: 'app-gruplac-edit',
  templateUrl: './gruplac-edit.component.html',
  styleUrls: ['./gruplac-edit.component.css']
})
export class GruplacEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private gruplacService: GruplacService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { this.buildForm() }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) =>{
      this.id = params.id
      this.gruplacService.getGruplac(this.id).subscribe(
        gruplac => this.form.patchValue(gruplac)
      )      
    })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'url': ['', Validators.required]
    })
  }

  updateGruplac(event: Event){
    event.preventDefault()
    if(this.form.valid){
      let gruplac = this.form.value
      gruplac.id = this.id
      this.gruplacService.updateGruplac(gruplac).subscribe(
        response => {
          this.router.navigate(['/admin/collector-configuration/gruplac'])
        }
      )
    }
  }

}
