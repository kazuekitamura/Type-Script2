import { VFC } from "react";
import { TodoType } from "./types/todo";

//Omit<TodoType, "id" >
export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const complteMark = completed ? "[完]" : "[未]";
  return <p>{`${complteMark} ${title}(ユーザー:${userId})`}</p>;
};
