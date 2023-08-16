export const urlRoot =
  (process.env.NODE_ENV === "development"
    ? `http://localhost:${process.env.PORT}`
    : `https://${process.env.VERCEL_URL}`) +
  "/frontend-practice/basic-dept/api";
