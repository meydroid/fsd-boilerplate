import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

export type Task = {
  header: string;
  body: string;
  completed: boolean;
  id: string;
};
export class TaskStore {
  tasks: Task[] = [
    {
      header: 'Summary',
      body: 'View a summary of all your clients over the last month.',
      completed: false,
      id: nanoid()
    },
    {
      header: 'Overview',
      body: 'Check out the overview of your clients.',
      completed: false,
      id: nanoid()
    }
  ];

  private cleaningTimer = null;

  constructor() {
    makeAutoObservable(this);
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }
}
