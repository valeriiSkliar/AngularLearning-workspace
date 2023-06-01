import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../utils/itask';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.css'],
})
export class TaskComponent {
	@Input() task: ITask | null = null;

	@Output() edit = new EventEmitter<ITask>();
}
