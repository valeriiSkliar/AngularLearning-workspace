import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { ITask, TaskDialogResult } from './utils/itask';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

const getObservable = (collection: AngularFirestoreCollection<ITask>) => {
	const subject = new BehaviorSubject<ITask[]>([]);
	collection.valueChanges({ idField: 'id' }).subscribe((val: ITask[]) => {
		subject.next(val);
	});
	return subject;
};
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	todoLength!: number;

	inProgressLength!: number;

	doneLength!: number;

	constructor(private dialog: MatDialog, private store: AngularFirestore) {}

	todo = getObservable(this.store.collection('todo')) as Observable<ITask[]>;

	inProgress = getObservable(this.store.collection('inProgress')) as Observable<ITask[]>;

	done = getObservable(this.store.collection('done')) as Observable<ITask[]>;

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
			this.store.collection('todo').add(result.task);
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
			if (result.delete) {
				this.store.collection(list).doc(task.id).delete();
			} else {
				this.store.collection(list).doc(task.id).update(task);
			}
		});
	}

	drop(event: CdkDragDrop<ITask[] | null, any, any>): void {
		if (event.previousContainer === event.container || event.container.data === null) {
			return;
		}
		const item = event.previousContainer.data[event.previousIndex];
		this.store.firestore.runTransaction(() => {
			const promise = Promise.all([
				this.store.collection(event.previousContainer.id).doc(item.id).delete(),
				this.store.collection(event.container.id).add(item),
			]);
			return promise;
		});
		transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
	}
}
