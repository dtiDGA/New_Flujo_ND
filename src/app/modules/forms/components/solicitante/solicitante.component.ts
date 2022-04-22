import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { FormsService } from '../../services/forms.service';
import { RutValidator } from 'src/app/shared/validator/rut.validator';
import { regiones, RegionType } from '../../helper/regiones';
import { provincias, ProvinciasType } from '../../helper/provincias';
import { comunas, ComunasType } from '../../helper/comunas';
import { PhoneValidator } from 'src/app/shared/validator/phone.validator';

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.css']
})
export class SolicitanteComponent implements OnInit {

  public requesterForm!: FormGroup;
  public isJuridica: boolean = false;
  public nombresRegiones: RegionType[] = regiones;
  public nombresProvincias: string[] = [];
  public nombresComunas: string[] = [];

  private _provincias: ProvinciasType[] = provincias;
  private _comunas: ComunasType[] = comunas;

  constructor(
    private _fb: FormBuilder,
    private _validator: ValidatorService,
    private _formService: FormsService
  ) { }

  ngOnInit(): void {

    this.requesterForm = this._fb.group({
      tipoPersona:      ['natural', [Validators.required]],
      run:              ['', [Validators.required, RutValidator.validate]],
      razonSocial:      [''],
      cup:              [''],
      nombres:           ['', [Validators.required]],
      apellidoPaterno:  ['', [Validators.required]],
      apellidoMaterno:  [''],
      genero:           [''],
      domicilio: this._fb.group({
        region:             ['', [Validators.required]],
        provincia:          ['', [Validators.required]],
        comuna:             ['', [Validators.required]],
        domicilio:          ['', [Validators.required]],
        telefono:           ['', PhoneValidator.validateNumber],
        correo:             ['', [Validators.required, Validators.pattern(this._validator.emailPattern)]],
        correoConfirmacion: ['', [Validators.required, Validators.email]]
      })
    }, {
      validators: [this._validator.equalEmail('domicilio.correo', 'domicilio.correoConfirmacion')]
    })
    
  }

  // Retorna los mensajes de error del control CORREO
  get EmailErrorMsg(): string{

    const errors = this.requesterForm.get('domicilio')?.get('correo')?.errors;

    if ( errors?.['required'] ) {
      return 'El email es obligatorio.'
    }else if( errors?.['pattern'] ){
      return 'Debe ingresar un email valido.'
    }

    return '';
  }

  // Retorna mensaje de error al control telefono

  get PhoneErrorMsg(): string{

    const errors = this.requesterForm.get('domicilio')?.get('telefono')?.errors;

    if ( errors?.['invalidNumber']) {
      return 'El formato es incorrecto.'
    }

    return '';
  }
  // Retorna los mensajes de error del control RUN
  get RutErrorMsg(): string {

    const errors = this.requesterForm.get('run')?.errors;
    
    if ( errors?.['required'] ) {
      return 'El rut es obligatorio.';
    }else if( errors?.['invalidFormat'] ){
      return 'Debe ingresar un formato de rut correcto.'
    }

    return '';
  }

  // Esconde campos pertenecientes a la persona juridica o persona natural
  tipoPersonaChange( tipoPersona: MatSelectChange ): void {

   
    this.resetForm();
    
    ( tipoPersona.value === "juridica" ) ? this.isJuridica = true : this.isJuridica = false
    
    this.validationsChange(); 
    
  }


  // Valida si un campo es valido y ademas si lo han tocado
  campoNoValido( campo: string ): boolean | undefined {

    return this.requesterForm.get( campo )?.invalid
        && this.requesterForm.get( campo )?.touched
  }


  //Actualiza las provincias cuando la region cambia
  regionChange( region: string ): void {

    this.nombresProvincias = [];
    this.nombresComunas = [];
    

    this._provincias.map( provincia => {

      if (provincia.regionNumber === region) {
        this.nombresProvincias = provincia.provinciasNames;
      }
    })

  }
  
  // Actualiza las comunas cuando cambia la provincia
  provinciaChange( provincia: string ): void {

    this.nombresComunas = [];

    this._comunas.map( comuna => {

      if ( comuna.provinciaName === provincia ) {
        this.nombresComunas = comuna.comunas;
      }
    })
  }
  // Agrega y elimina las validaciones respectivas al tipo de persona
  validationsChange(): void {

    if (this.isJuridica === true) {
      
      //Persona Juridica
      this.requesterForm.get('razonSocial')?.setValidators(Validators.required);
      this.requesterForm.get('cup')?.setValidators(Validators.required);

      this.requesterForm.get('razonSocial')?.updateValueAndValidity();
      this.requesterForm.get('cup')?.updateValueAndValidity();

      //Persona Natural
      this.requesterForm.get('nombres')?.clearValidators();
      this.requesterForm.get('apellidoPaterno')?.clearValidators();

      this.requesterForm.get('nombres')?.updateValueAndValidity();
      this.requesterForm.get('apellidoPaterno')?.updateValueAndValidity();

    }else{

     //Persona Juridica
      this.requesterForm.get('razonSocial')?.clearValidators();
      this.requesterForm.get('cup')?.clearValidators();

      this.requesterForm.get('razonSocial')?.updateValueAndValidity();
      this.requesterForm.get('cup')?.updateValueAndValidity();

     // Persona Natural

      this.requesterForm.get('nombres')?.setValidators(Validators.required);
      this.requesterForm.get('apellidoPaterno')?.setValidators(Validators.required);

      this.requesterForm.get('nombres')?.updateValueAndValidity();
      this.requesterForm.get('apellidoPaterno')?.updateValueAndValidity();
    }
  }

  resetForm(): void {

      this.requesterForm.get('run')?.reset();
      this.requesterForm.get('razonSocial')?.reset();
      this.requesterForm.get('cup')?.reset();
      this.requesterForm.get('nombres')?.reset();
      this.requesterForm.get('apellidoPaterno')?.reset();
      this.requesterForm.get('apellidoMaterno')?.reset();
      this.requesterForm.get('genero')?.reset();
  }

  submit(){
    
    this._formService.saveRequester(this.requesterForm.value)

    console.log(this._formService.requesterInfo);
    
  }


}
