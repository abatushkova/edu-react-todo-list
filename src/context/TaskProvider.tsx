import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export type TaskType = {
  id: number;
  text: string;
  done: boolean;
}

type TaskPayload = {
  ['add']: {
    id: number;
    text: string;
  };
  ['change']: {
    id: number;
    text: string;
    done: boolean;
  };
  ['delete']: {
    id: number;
  };
  ['clear']: [];
}

type TaskActions = ActionMap<TaskPayload>[
  keyof ActionMap<TaskPayload>
];

const TasksContext = createContext<TaskType[]>([]);
const TasksDispatchContext = createContext<Dispatch<TaskActions>>(() => null);

export const useTasks = () => useContext(TasksContext);
export const useTasksDispatch = () => useContext(TasksDispatchContext);

const taskReducer = (tasks: TaskType[], action: TaskActions) => {
  switch (action.type) {
    case 'add': {
      return [...tasks, {
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      }];
    }
    case 'change': {
      return tasks.map(t => {
        if (t.id === action.payload.id) {
          return action.payload;
        } else {
          return t;
        }
      });
    }
    case 'delete': {
      return tasks.filter(t => t.id !== action.payload.id);
    }
    case 'clear': {
      return [];
    }
    default: {
      return tasks;
    }
  }
};

const initialTasks: TaskType[] = [];

interface IPropsModel {
  children: React.ReactNode;
}

export const TaskProvider = ({ children }: IPropsModel) => {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
