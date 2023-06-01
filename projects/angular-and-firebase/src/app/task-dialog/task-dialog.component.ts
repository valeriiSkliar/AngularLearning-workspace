import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITask, TaskDialogData } from '../utils/itask';

@Component({
	selector: 'app-task-dialog',
	templateUrl: './task-dialog.component.html',
	styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent {
	private backupTask: Partial<ITask> = {
		...this.data.task,
	};

	constructor(
		public dialogRef: MatDialogRef<TaskDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: TaskDialogData,
	) {}

	cancel(): void {
		this.data.task.title = this.backupTask.title;
		this.data.task.description = this.backupTask.description;
		this.dialogRef.close(this.data);
	}
}
