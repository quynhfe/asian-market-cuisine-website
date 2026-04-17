import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";

export default function LegacyMenuPage() {
  redirect(`/${DEFAULT_LOCALE}/menu`);
}
