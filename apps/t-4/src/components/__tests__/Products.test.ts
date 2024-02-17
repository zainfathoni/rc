import { render, screen, waitFor } from "@testing-library/vue";
import { HttpResponse, http } from "msw";
import { describe, expect, test } from "vitest";
import { server } from "../../../__mocks__/node";
import Products from "../Products.vue";

describe("Products", async () => {
  test("loads the first 10 products on mounted", async () => {
    render(Products);

    // TODO: Extend expect to allow `.toBeInTheDocument()` or `.toBeVisible()` assertions
    expect(screen.getByRole("heading", { name: /^products$/i })).toBeDefined();

    await waitFor(() => {
      expect(screen.getByText("iPhone 15 Pro - $999")).toBeDefined();
    });
  });

  test("shows error message when products fail to load due to network error", async () => {
    server.use(
      http.get(
        "https://dummyjson.com/products/",
        () => {
          // https://mswjs.io/docs/api/http-response/#httpresponseerror
          return HttpResponse.error();
        },
        { once: true },
      ),
    );

    render(Products);

    await waitFor(() => {
      expect(screen.getByText("Error: Failed to fetch")).toBeDefined();
    });
  });
});
