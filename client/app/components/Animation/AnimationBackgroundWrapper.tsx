"use client";

import { useEffect } from "react";
import { animatePageBackground } from "../../utils/animations";

export default function AnimationBackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const cleanup = animatePageBackground();
    return cleanup;
  }, []);

  return <>{children}</>;
}
