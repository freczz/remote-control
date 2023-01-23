import { mouse, up, down, left, right } from "@nut-tree/nut-js";
import { MOUSE_COMMAND_TYPES } from "../constants";

export const moveMouse = async(cmdSubType: string, value: string[]): Promise<string> => {
  let message: string = `mouse_${cmdSubType}_${value}`;

  switch (cmdSubType) {
    case MOUSE_COMMAND_TYPES.up:
      await mouse.move(up(Number(value)));
      break;
    case MOUSE_COMMAND_TYPES.down:
      await mouse.move(down(Number(value)));
      break;
    case MOUSE_COMMAND_TYPES.right:
      await mouse.move(right(Number(value)));
      break;
    case MOUSE_COMMAND_TYPES.left:
      await mouse.move(left(Number(value)));
      break;
    case MOUSE_COMMAND_TYPES.position:
      const position = await mouse.getPosition();
      message = `mouse_position_${position.x}px,_${position.y}px`;
      break;
  }

  return message;
};
