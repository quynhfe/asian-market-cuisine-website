import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";

export default function LegacyFindUsPage() {
  redirect(`/${DEFAULT_LOCALE}/find-us`);
}
