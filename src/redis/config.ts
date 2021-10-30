const config = {
  host: process.env.REDIS_HOST!,
  password: process.env.REDIS_PASSWORD!,
  timeoutMillis: 3 * 1000,
};

export default config;
