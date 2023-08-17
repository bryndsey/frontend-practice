const isBuild =
  process.env.NEXT_PHASE !== undefined &&
  process.env.NEXT_PHASE.includes("build");

const projectPath = "/frontend-practice/basic-dept/api";

const devUrl = `http://localhost:${process.env.PORT}${projectPath}`;

const productionUrl =
  process.env.VERCEL_URL === undefined || isBuild
    ? undefined
    : `https://${process.env.VERCEL_URL}${projectPath}`;

export const urlRoot =
  process.env.NODE_ENV === "development" ? devUrl : productionUrl;
