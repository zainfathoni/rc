import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "../__mocks__/node";

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

// Confirm a successful setup for MSW interception
server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
