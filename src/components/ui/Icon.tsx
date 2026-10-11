import type { IconName } from "@/content/types";

type UiIcon =
  | IconName
  | "arrow-right"
  | "arrow-up-right"
  | "chevron-left"
  | "chevron-right"
  | "close"
  | "menu"
  | "phone"
  | "mail"
  | "whatsapp"
  | "pin"
  | "image"
  | "expand";

const paths: Record<UiIcon, React.ReactNode> = {
  billboard: (
    <>
      <rect x="3" y="4" width="18" height="10" rx="1" />
      <path d="M8 14v7M16 14v7M6 21h12" />
    </>
  ),
  signage: (
    <>
      <path d="M4 7h16v8H4z" />
      <path d="M8 3h8M12 3v4M7 11h3M13 11h4" />
      <path d="M12 15v6" />
    </>
  ),
  printer: (
    <>
      <path d="M6 9V3h12v6" />
      <rect x="3" y="9" width="18" height="8" rx="1" />
      <path d="M6 14h12v7H6z" />
    </>
  ),
  vehicle: (
    <>
      <path d="M3 16V9a1 1 0 0 1 1-1h10v8M14 11h4l3 3v2h-7" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  roller: (
    <>
      <rect x="3" y="3" width="15" height="6" rx="1" />
      <path d="M18 6h3v5h-9v3" />
      <rect x="10" y="14" width="4" height="7" rx="1" />
    </>
  ),
  sculpture: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <path d="M9 21v-5l-1-5h8l-1 5v5M5 21h14" />
    </>
  ),
  pen: (
    <>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17L17 7M8 7h9v9" />,
  "chevron-left": <path d="M15 18l-6-6 6-6" />,
  "chevron-right": <path d="M9 18l6-6-6-6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.3-1.3-2-1-.8.8a4 4 0 0 1-2-2l.8-.8-1-2L9.5 8.2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5L5 21" />
    </>
  ),
  expand: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />,
};

export function Icon({
  name,
  className = "size-5",
  title,
}: {
  name: UiIcon;
  className?: string;
  /** Provide only when the icon conveys meaning on its own (otherwise it is decorative). */
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
