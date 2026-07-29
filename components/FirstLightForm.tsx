"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function FirstLightForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      body.append(key, String(value));
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("The signup could not be submitted.");
      }

      router.push("/thanks");
    } catch {
      setError("Something went dim for a moment. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="email-form"
      name="first-light"
      method="POST"
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <input type="hidden" name="form-name" value="first-light" />
      <label htmlFor="email">Email address</label>
      <div>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Joining…" : "Join the list"}
        </button>
      </div>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
