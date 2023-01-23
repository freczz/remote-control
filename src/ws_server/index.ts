import { WebSocketServer, createWebSocketStream } from 'ws';
import { AddressInfo } from "net";
import { router } from '../router';

export const configureWsServer = (wsServer: WebSocketServer) => {
  wsServer.on("listening", () => {
    const { port } = wsServer.address() as AddressInfo;
    console.log(`Start websocket server on the ${port} port!`);
  });

  wsServer.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("close", () => console.log(`Client disconnected`));

    const wsStream = createWebSocketStream(ws, { decodeStrings: false });

    wsStream.on("data", async (data: string) => {
      const command = data.toString();
      console.log(`Recived command: ${command}`);
      router(command, wsStream);
    });
  });
};
