import { mouse, up, down, left, right, Button, straightTo } from "@nut-tree/nut-js";
import { DRAW_SUB_COMMANS } from "../constants";

export const drawShape = async(cmdSubType: string, value: string[]): Promise<string> => {
  let message: string = '';

  switch(cmdSubType) {
    case DRAW_SUB_COMMANS.circle:
      await drawCircle(+value[0]);
      message = `draw_circle_${value[0]}px`;
      break;
    case DRAW_SUB_COMMANS.rectangle:
      await drawRectangle(+value[0], +value[1]);
      message = `draw_rectangle_${value[0]}px,${value[1]}px`;
      break;
    case DRAW_SUB_COMMANS.square:
      await drawRectangle(+value[0], +value[0]);
      message = `draw_square_${+value[0]}px`;
      break;
  }

  return message;
};

const drawCircle = async(radius: number) => {
  const { x: mouseX, y: mouseY } = await mouse.getPosition();
  await mouse.pressButton(Button.LEFT);

  for (let i = 0; i <= Math.PI * 2; i += 0.1) {
    const x = mouseX + radius + radius * Math.cos(Math.PI + i);
    const y = mouseY + radius * Math.sin(Math.PI + i);
    await mouse.move(straightTo({ x: Math.round(x), y: Math.round(y) }));
  }

  await mouse.releaseButton(Button.LEFT);
};

const drawRectangle = async(width: number, height: number) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(Number(height)));
  await mouse.move(right(Number(width)));
  await mouse.move(up(Number(height)));
  await mouse.move(left(Number(width)));
  await mouse.releaseButton(Button.LEFT);
};
