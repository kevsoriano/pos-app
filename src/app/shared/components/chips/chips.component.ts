import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> ChipsComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsComponent {
  @Input() items: string[] = [];
  @Input() placeholder: string = 'Type...';
  @Input() removable = true;
  @ViewChild('inputField') inputField: any;

  onChange: Function = () => {};
  onTouched: Function = () => {};

  constructor(private cd: ChangeDetectorRef) {}

  onChipBarClick() {
    this.inputField.nativeElement.focus();
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.triggerChange();
  }

  removeAll() {
    this.items = [];
    this.triggerChange();
  }

  onKeyDown(event: any, value: string) {
    switch(event.keyCode) {
      case 13:
      case 188: {
        if(value && value.trim() !== '') {
          if(!this.items.includes(value)) {
            this.items.push(value);
            this.triggerChange();
          }
          this.inputField.nativeElement.value = '';
          event.preventDefault();
        }
        break;
      }
      case 8: {
        if(!value && this.items.length > 0) {
          this.items.pop();
          this.triggerChange();
        }
        break;
      }
      default:
        break;
    }
  }

  writeValue(value: any) {
    this.items = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  triggerChange() {
    this.onChange(this.items);
  }
}
