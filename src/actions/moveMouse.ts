import { mouse, up, down, left, right } from "@nut-tree/nut-js";
import { MOUSE_SUB_COMMANDS } from "../constants";

export const moveMouse = async(cmdSubType: string, value: string[]): Promise<string> => {
  let message: string = `mouse_${cmdSubType}_${value}`;

  switch (cmdSubType) {
    case MOUSE_SUB_COMMANDS.up:
      await mouse.move(up(Number(value)));
      break;
    case MOUSE_SUB_COMMANDS.down:
      await mouse.move(down(Number(value)));
      break;
    case MOUSE_SUB_COMMANDS.right:
      await mouse.move(right(Number(value)));
      break;
    case MOUSE_SUB_COMMANDS.left:
      await mouse.move(left(Number(value)));
      break;
    case MOUSE_SUB_COMMANDS.position:
      const position = await mouse.getPosition();
      message = `mouse_position ${position.x}px,${position.y}px`;
      break;
  }

  return message;
};
