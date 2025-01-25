import type { IAnswer } from "@/types";
import http from "./http";

export const getAllData = async () => {
  const data = await http.get("/data");
  return data.data;
};

export const addUserAnswers = async (data: IAnswer) => {
  await http.post("/messages", data);
};
