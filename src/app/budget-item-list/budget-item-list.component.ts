import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/buget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteBtnClick(item: BudgetItem){
    this.delete.emit(item);

  }

  onCardClick(item: BudgetItem){
    //Show the edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width:"580px",
      data: item
    } );

    dialogRef.afterClosed().subscribe(res => {
      //check if res has a value
      if(res){
        
       this.update.emit({old: item, new: res})
      }
    })
  }
}

export interface UpdateEvent{
  old: BudgetItem;
  new: BudgetItem;
}
