/* process.env */

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
  }
}

const nodeEnv = process.env.NODE_ENV;
