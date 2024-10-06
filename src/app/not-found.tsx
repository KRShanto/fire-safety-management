"use client";
import dynamic from "next/dynamic";

const NotFoundComponent = dynamic(() => import("@/components/NotFound"), {
  ssr: false,
});

export default function GlobalNotFoundPage() {
  return <NotFoundComponent />;
}
