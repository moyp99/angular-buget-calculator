import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/buget-item.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EditItemModalComponent>, @Inject(MAT_DIALOG_DATA) public item: BudgetItem) {
    
   }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem){
    this.dialogRef.close(updatedItem);
  }

}
