export const INVALID_DATA = "Invalid data";

export const SCREEN_REGION_SQUARE_WIDTH = 200;

export enum COMMAND_TYPES {
  mouse = "mouse",
  draw = "draw",
  prnt = "prnt"
}

export enum MOUSE_SUB_COMMANDS {
  up = "up",
  down = "down",
  right = "right",
  left = "left",
  position = "position",
}

export const MOUSE_COMMANDS = [
  "mouse_up",
  "mouse_down",
  "mouse_right",
  "mouse_left",
  "mouse_position",
];

export enum DRAW_SUB_COMMANS {
  circle = "circle",
  rectangle = "rectangle",
  square = "square",
}

export const DRAW_COMMANDS = [
  "draw_circle",
  "draw_rectangle",
  "draw_square",
];

export const PRINT_SUB_COMMAND = "scrn";

export const PRINT_COMMAND = "prnt_scrn";
