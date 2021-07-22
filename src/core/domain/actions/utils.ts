export enum ActionStatusType {
  start = 'start.',
  success = 'success.',
  error = 'error.',
}

export interface Action {
  type: string;
}

export interface PayloadAction<P> extends Action {
  payload: P;
}

export interface PartialPayloadAction<P> extends Action {
  payload?: P;
}

export const createActionWithStatus = <T>(
  actionType: string,
  status: ActionStatusType,
  payload?: T,
): PartialPayloadAction<T> => ({
  type: status + actionType,
  payload,
});

export const isActionWithStatus = (
  actionTypeWithStatus: string,
  targetActionType: string,
  status: ActionStatusType,
) => {
  return (
    createActionWithStatus(targetActionType, status).type ===
    actionTypeWithStatus
  );
};
