import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-change-number2',
  templateUrl: './change-number2.component.html',
  styleUrls: ['./change-number2.component.css']
})
export class ChangeNumber2Component {
  @Output() changeNumber2: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.changeNumber2.emit();
  }
}
