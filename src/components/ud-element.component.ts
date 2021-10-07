import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ud-element',
  template: `
  <div class="input-group mb-2">
  <label class="input-group-text ud-label" for="inputGroupSelect01">{{label}}</label>
  <select class="form-select form-select-sm" id="inputGroupSelect01">
    <option selected>Choose or enter...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <small class="mt-2 ms-2">A remark in reference to the value or lack thereof</small>
</div>
  `,
  styles: [``],
})
export class UdElementComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() selectList: Array<string>;

  ngOnInit() {}
}
