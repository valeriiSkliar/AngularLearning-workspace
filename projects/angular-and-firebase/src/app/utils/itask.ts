export interface ITask {
	id?: string;
	title: string;
	description: string;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface TaskDialogData {
	task: Partial<ITask>;
	enableDelete: boolean;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface TaskDialogResult {
	task: ITask;
	delete?: boolean;
}
