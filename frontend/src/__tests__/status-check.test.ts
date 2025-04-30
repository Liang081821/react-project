import { describe, it, expect } from "vitest";
import axios from "axios";

describe("Check api status", () => {
  it("return 200", async () => {
    const response = await axios.get("http://localhost:5000/api/blogs");
    expect(response.status).toBe(200);
  });
});
