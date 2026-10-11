import { contact } from "@/content/contact";

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function telHref(e164: string): string {
  return `tel:${e164}`;
}

export function whatsappHref(message: string = contact.whatsapp.defaultMessage): string {
  const digits = contact.whatsapp.e164.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function mailHref(subject?: string): string {
  return `mailto:${contact.email.address}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}

export function publicPhones() {
  return contact.phones.filter((p) => p.public);
}
