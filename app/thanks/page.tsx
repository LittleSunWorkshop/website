import Link from "next/link";
import { SunMark } from "@/components/SunMark";

export const metadata = {
  title: "Thank you",
};

export default function ThanksPage() {
  return (
    <main className="thanks-page">
      <SunMark />
      <p className="eyebrow">You caught the first light</p>
      <h1>Thank you for joining us.</h1>
      <p>
        The workshop is still taking shape. We’ll send a note when the first
        collection is ready to meet the sun.
      </p>
      <Link className="button button-dark" href="/">
        Back to the workshop
      </Link>
    </main>
  );
}
