import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/buget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  isNewItem:boolean = true;

  constructor() { }

  ngOnInit(): void {
    //if item has a value
    if(this.item){
      //this means that an existing item obejct was passed into this componenet, therefore this isn't a new item
      this.isNewItem = false;
    }else{
      this.isNewItem = true;
      this.item = new BudgetItem('',0);
    }
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
