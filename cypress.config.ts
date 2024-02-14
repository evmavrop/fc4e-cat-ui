import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  hosts: { localhost: "127.0.0.1" },
  env: {
    auth_base_url: "http://localhost:58080/",
    auth_realm: "quarkus",
    auth_client_id: "frontend-service",
  },

  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
