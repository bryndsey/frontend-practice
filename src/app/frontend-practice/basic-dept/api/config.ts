const projectPath = "/frontend-practice/basic-dept/api";

const devUrl = `http://localhost:${process.env.PORT}${projectPath}`;

const productionUrl = "bryans-frontend-practice.vercel.app";

export const urlRoot =
  process.env.NODE_ENV === "development" ? devUrl : productionUrl;
