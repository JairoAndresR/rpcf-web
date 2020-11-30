import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { GruplacService } from 'src/app/core/services/gruplac/gruplac.service';


@Component({
  selector: 'app-gruplac-form',
  templateUrl: './gruplac-form.component.html',
  styleUrls: ['./gruplac-form.component.css']
})
export class GruplacFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gruplacService: GruplacService,
    private router: Router
    ) { this.buildForm() }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'url': ['', Validators.required]
    })
  }

  registerGruplac(event: Event){
    event.preventDefault()
    if(this.form.valid){
      this.gruplacService.newGruplac(this.form.value).subscribe(
        response => this.router.navigate(['/admin/collector-configuration/gruplac'])
      )
    }
    
  }

}
