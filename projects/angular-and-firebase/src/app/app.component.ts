import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ITask, TaskDialogResult } from './utils/itask';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	constructor(private dialog: MatDialog) {}

	todo: ITask[] = [
		{
			title: 'Buy milk',
			description: 'Go to the store and buy milk',
		},
		{
			title: 'Create a Kanban app',
			description: 'Using Firebase and Angular create a Kanban app!',
		},
	];

	inProgress: ITask[] = [];

	done: ITask[] = [];

	newTask(): void {
		const dialogRef = this.dialog.open(TaskDialogComponent, {
			width: '270px',
			data: {
				task: {},
			},
		});
		dialogRef.afterClosed().subscribe((result: TaskDialogResult | undefined) => {
			if (!result) {
				return;
			}
			this.todo.push(result.task);
		});
	}

	editTask(list: 'done' | 'todo' | 'inProgress', task: ITask): void {
		const dialogRef = this.dialog.open(TaskDialogComponent, {
			width: '270px',
			data: {
				task,
				enableDelete: true,
			},
		});
		dialogRef.afterClosed().subscribe((result: TaskDialogResult | undefined) => {
			if (!result) {
				return;
			}
			const dataList = this[list];
			const taskIndex = dataList.indexOf(task);
			if (result.delete) {
				dataList.splice(taskIndex, 1);
			} else {
				dataList[taskIndex] = task;
			}
		});
	}

	drop(event: CdkDragDrop<ITask[]>): void {
		if (event.previousContainer === event.container) {
			return;
		}
		if (!event.container.data || !event.previousContainer.data) {
			return;
		}
		transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
	}
}
