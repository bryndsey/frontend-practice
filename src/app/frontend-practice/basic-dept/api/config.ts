const projectPath = "/frontend-practice/basic-dept/api";

const devUrl = `http://localhost:${process.env.PORT}${projectPath}`;

const productionUrl =
  process.env.VERCEL_URL === undefined
    ? undefined
    : `https://${process.env.VERCEL_URL}${projectPath}`;

export const urlRoot =
  process.env.NODE_ENV === "development" ? devUrl : productionUrl;
