import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-early-acess',
  templateUrl: './early-acess.component.html',
  styleUrls: ['./early-acess.component.scss']
})
export class EarlyAcessComponent {

  @ViewChild('inputref') private readonly input: any

  constructor(private readonly toastr: ToastrService) {}

  public send(): void {
    let value: string = this.input.nativeElement.value
    if (!value) {
      this.toastr.warning('Preencha o campo de email', 'Atenção')
      return undefined;
    }
    if (!value.includes('@') || !value.includes('.')) {
      this.toastr.warning('Email inválido', 'Atenção')
      return undefined;
    }
    this.toastr.success(`email "${value}" registrado!`, 'Sucesso!');
    value = '';
  }

}
