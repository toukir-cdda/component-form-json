"use client";

import React, { useState } from "react";
import { renderToString } from "react-dom/server";
// import jss, { SheetsRegistry, SheetsManager, sheets } from "jss";
import {
  SheetsRegistry,
  JssProvider,
  createGenerateId,
  ThemeProvider,
} from "react-jss";

import { useServerInsertedHTML } from "next/navigation";

export default function JssStyleRegistry({ children }) {
  const [styleSheet] = useState(() => new SheetsRegistry());
  const registry = new SheetsRegistry();
  const generateId = createGenerateId();

  useServerInsertedHTML(() => {
    console.log("useServerInsertedHTML", registry.toString());
  });
  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <JssProvider registry={registry} generateId={generateId}>
      {children}
    </JssProvider>
  );
}
