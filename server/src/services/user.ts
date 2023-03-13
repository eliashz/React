import { User } from "../types";
import userData from "./users.json";

const users: Array<User> = userData as Array<User>;

export const getUsers = () => userData;

export const addUser = () => null;
