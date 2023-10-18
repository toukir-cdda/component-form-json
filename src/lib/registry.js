"use client";

import React, { useState } from "react";
import { SheetsRegistry, SheetsManager } from "jss";

export default function JssStyleRegistry({ children }) {
  const [styleSheet] = useState(() => new SheetsRegistry());

  if (typeof window !== "undefined") return <>{children}</>;

  return <SheetsManager styles={styleSheet.registry}>{children}</SheetsManager>;
}
