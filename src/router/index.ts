import internal from "stream";
import { COMMAND_TYPES, INVALID_DATA } from "../constants";
import { moveMouse, drawShape, printScreen } from "../actions";
import { parseCommand, validateCommand } from "../utils";

export const router = async (command: string, stream: internal.Duplex): Promise<void> => {
  const {cmdType, cmdSubType, value} = parseCommand(command);
  const isValid = validateCommand(command);

  if (!isValid) {
    stream.write(INVALID_DATA);
    console.log(INVALID_DATA);
    return;
  }

  let message: string = '';

  switch (cmdType) {
    case COMMAND_TYPES.mouse:
      message = await moveMouse(cmdSubType, value);
      break;
    case COMMAND_TYPES.draw:
      message = await drawShape(cmdSubType, value);
      break;
    case COMMAND_TYPES.print:
      // message = await printScreen(cmdSubType);
      break;
  }

  if (message) {
    stream.write(message);
  }
};
