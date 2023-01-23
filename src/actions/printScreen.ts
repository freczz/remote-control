import { screen, Region, mouse } from "@nut-tree/nut-js";
import Jimp from "jimp";
import { PRINT_COMMAND, PRINT_SUB_COMMAND, SCREEN_REGION_SQUARE_WIDTH } from "../constants";

export const printScreen = async(cmdSubType: string): Promise<string> => {
  let message: string = '';
  const squareWidth = SCREEN_REGION_SQUARE_WIDTH;

  if (cmdSubType === PRINT_SUB_COMMAND) {
    try {
      const { x, y } = await mouse.getPosition();
      const [screenWigth, screenHeight ] = [await screen.width(), await screen.height()];

      const region = new Region(
        x - squareWidth / 2 > 0 ? x - squareWidth / 2 : 0,
        y - squareWidth / 2 > 0 ? y - squareWidth / 2 : 0,
        x + squareWidth / 2 > screenWigth ? screenWigth - x + squareWidth / 2 : squareWidth,
        y + squareWidth / 2 > screenHeight ? screenHeight - y + squareWidth / 2 : squareWidth,
      );

      const nutImage = await screen.grabRegion(region);
      const { data, width, height } = await nutImage.toRGB();
      const jimpImage = new Jimp({ data, width, height });
      const imgBase64 = await jimpImage.getBase64Async(Jimp.MIME_PNG);
      message = `${PRINT_COMMAND} ${imgBase64.split(",").at(-1)}`;
    } catch (error) {
      message = `${PRINT_COMMAND} error`;
    }
  }

  return message;
};
