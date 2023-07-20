import React from "react";
import { ReactComponent as ToDo } from "../../images/icon-todo.svg";
import { ReactComponent as Reminders } from "../../images/icon-reminders.svg";
import { ReactComponent as Calendar } from "../../images/icon-calendar.svg";
import { ReactComponent as Planning } from "../../images/icon-planning.svg";

export const FEATURES = [
  { text: "Todo List", icon: <ToDo /> },
  { text: "Calendar", icon: <Calendar /> },
  { text: "Reminders", icon: <Reminders /> },
  { text: "Planning", icon: <Planning /> },
];

export const COMPANY = [
  { text: "History" },
  { text: "Our team" },
  { text: "Blog" },
];
