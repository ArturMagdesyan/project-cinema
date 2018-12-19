import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  login = false;
  templatesList = ['login'];

  @Input() templateName;
  @Output() clearTemplate = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const inputValue: SimpleChange = changes.templateName;
    const index = this.templatesList.indexOf(inputValue.currentValue);
    if (index > -1) {
      const modalName = inputValue.currentValue;
      this[modalName] = true;
    }
  }

  ngOnInit() {
  }

  closeModals(event) {
    console.log('event: ', event);
    const index = this.templatesList.indexOf(event);
    if (index > -1) {
      const modalName = event;
      this[modalName] = false;
      this.clearTemplate.emit();
    }
  }
}
