import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ValidatorService } from 'src/app/shared/validator.service';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.css']
})
export class SolicitanteComponent implements OnInit {

  public requesterForm!: FormGroup;
  public isJuridica: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _validator: ValidatorService,
    private _formService: FormsService
  ) { }

  ngOnInit(): void {

    this.requesterForm = this._fb.group({
      tipoPersona:      ['', [Validators.required]],
      run:              ['', [Validators.required]],
      razonSocial:      [''],
      cup:              [''],
      nombres:           [''],
      apellidoPaterno:  [''],
      apellidoMaterno:  [''],
      genero:           [''],
      domicilio: this._fb.group({
        region:             ['', [Validators.required]],
        provincia:          ['', [Validators.required]],
        comuna:             ['', [Validators.required]],
        domicilio:          ['', [Validators.required]],
        telefono:           [''],
        correo:             ['', [Validators.required, Validators.email]],
        correoConfirmacion: ['', [Validators.required, Validators.email]]
      })
    }, {
      validators: [this._validator.equalEmail('correo', 'correoConfirmacion')]
    })
    
  }

  // Esconde campos pertenecientes a la persona juridica o persona natural

  tipoPersonaChange( tipoPersona: MatSelectChange ): void{

    this.requesterForm.get('run')?.reset();
    this.requesterForm.get('razonSocial')?.reset();
    this.requesterForm.get('cup')?.reset();
    this.requesterForm.get('nombres')?.reset();
    this.requesterForm.get('apellidoPaterno')?.reset();
    this.requesterForm.get('apellidoMaterno')?.reset();
    this.requesterForm.get('genero')?.reset();

    ( tipoPersona.value === "juridica" ) ? this.isJuridica = true : this.isJuridica = false

    this.validationsChange(); 
    
  }


  campoNoValido( campo: string ){

    return this.requesterForm.get( campo )?.invalid
        && this.requesterForm.get( campo )?.touched
  }


  // Limpia las validaciones para ciertos campos, para que le formulario sea valido
  validationsChange(){

    if (this.isJuridica) {
      
      // Persona Juridica
      this.requesterForm.get('razonSocial')?.setValidators(Validators.required);
      this.requesterForm.get('cup')?.setValidators(Validators.required);

      // Persona Natural
      this.requesterForm.get('nombres')?.clearValidators();
      this.requesterForm.get('apellidoPaterno')?.clearValidators();
      

    }else{

      // Persona Juridica
      this.requesterForm.get('razonSocial')?.clearValidators();
      this.requesterForm.get('cup')?.clearValidators();

      // Persona Natural
      this.requesterForm.get('nombres')?.setValidators(Validators.required);
      this.requesterForm.get('apellidoPaterno')?.setValidators(Validators.required);

    }
  }

  submit(){
    
    this._formService.saveRequester(this.requesterForm.value)

    console.log(this._formService.requesterInfo);
    
  }


}
