export const brevoSendMailCode = `"use server";

import type { TEMPLATE_IDS } from "@/constants/brevo.constants";

interface ISendMailProps {
  to: string;
  templateId: (typeof TEMPLATE_IDS)[keyof typeof TEMPLATE_IDS];
  params: Record<string, string>;
}

export function sendMail({ to, templateId, params }: ISendMailProps) {
  return fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: [{ email: to }],
      templateId,
      params,
    }),
  });
}`