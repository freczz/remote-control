import { DRAW_COMMANDS, MOUSE_COMMANDS, PRINT_COMMANDS } from "../constants";
import { ICommandData } from "../inderfaces";

export const parseCommand = (command: string): ICommandData => {
  const [actionName, ...value]: string[] = command.split(' ');
  const [cmdType, cmdSubType]: string[] = actionName.split('_');
  return { cmdType, cmdSubType, value };
};

export const validateCommand = (command: string): boolean => {
  const actionName: string = command.split(' ')[0];
  return (
    MOUSE_COMMANDS.includes(actionName) ||
    DRAW_COMMANDS.includes(actionName) ||
    PRINT_COMMANDS.includes(actionName)
  );
};
