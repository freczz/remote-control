import { httpServer } from "./http_server";
import { configureWsServer } from "./ws_server";
import { config } from 'dotenv';
import { WebSocketServer } from "ws";

config();

const HTTP_PORT: number = Number(process.env.HTTP_PORT) || 8181;
const WS_PORT: number = Number(process.env.WS_PORT) || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wsServer: WebSocketServer = new WebSocketServer({ port: WS_PORT });
configureWsServer(wsServer);

process.on("SIGINT", () => {
  wsServer.clients.forEach((client) =>
    client.close(1001, "Server is shutting down")
  );
  httpServer.close();
  console.log("Web Socket Server closed");
  process.exit(0);
});
