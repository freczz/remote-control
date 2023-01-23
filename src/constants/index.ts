export const INVALID_DATA = "Invalid data";

export enum COMMAND_TYPES {
  mouse = "mouse",
  draw = "draw",
  print = "print"
}

export enum MOUSE_COMMAND_TYPES {
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

export enum DRAW_COMMAND_TYPES {
  circle = "circle",
  rectangle = "rectangle",
  square = "square",
}

export const DRAW_COMMANDS = [
  "draw_circle",
  "draw_rectangle",
  "draw_square",
];

export const PRINT_COMMANDS = ["prnt_scrn"];
