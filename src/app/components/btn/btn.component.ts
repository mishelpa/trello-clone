import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button'
  @Input() colorBtn = 'primary'
  @Input() positionText : 'text-left' | 'text-right' | 'text-center' = 'text-center';

  // get colors() {
  //   return {
  //     'bg-success-700 hover:bg-success-800 focus:ring-success-300': this.colorBtn === 'success',
  //     'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300': this.colorBtn === 'primary',
  //     'bg-red-700 hover:bg-red-800 focus:ring-red-300': this.colorBtn === 'red',
  //   }
  // }

  get colors() {
    const colorsList: { [key: string]: string } = {
      success: 'bg-success-700 hover:bg-success-800 focus:ring-success-300 text-white ' + this.positionText,
      danger: 'bg-red-700 hover:bg-red-800 focus:ring-red-300 text-white ' + this.positionText,
      primary: 'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 text-white ' + this.positionText,
      graylight: 'bg-gray-200 hover:bg-gray-500 focus:ring-gray-50 text-gray-700 ' + this.positionText,
    };
    return colorsList[this.colorBtn];
  }
}

