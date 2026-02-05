"use client";

import { usePathname } from "next/navigation";
import Form from "@/components/Form/Form";

export default function ConditionalForm() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  if (isContactPage) return null;

  return <Form />;
}
