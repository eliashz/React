import { User } from "../types";
import userData from "./users.json";
//34:13
const users: Array<User> = userData as Array<User>;

export const getUsers = () => userData;

export const addUser = () => null;
