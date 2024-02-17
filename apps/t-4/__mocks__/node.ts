import { setupServer } from "msw/node";
import { dummyJsonHandlers } from "./handlers.js";

export const server = setupServer(...dummyJsonHandlers);
