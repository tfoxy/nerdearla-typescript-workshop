import api, { AxiosPromise } from "axios";

type TaskApiPath = `/api/tasks/${number}`;
type TaskRunApiPath = `/api/taskRuns/${number}`;

interface TaskRun {
  id: number;
  name: string;
  task: TaskApiPath;
}

interface Task {
  id: number;
  name: string;
  taskRuns: TaskRunApiPath[];
}

const taskRun: TaskRun = {
  id: 1,
  name: "pepito",
  task: "/api/tasks/3",
};

function getResource(path: TaskApiPath): AxiosPromise<Task>;
function getResource(path: TaskRunApiPath): AxiosPromise<TaskRun>;
function getResource(path: string): AxiosPromise<unknown> {
  return api.get(path);
}

/*
 * El objetivo es poder obtener el tipo correcto a partir de la ruta del recurso.
 */
const task = (await getResource(taskRun.task)).data;
const taskName = task.taskRuns;
