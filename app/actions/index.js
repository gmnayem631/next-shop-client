"use server";

import { signIn } from "../auth";

export async function doSocialLogin(formData) {
  const action = formData.get("action");

  if (action === "google") {
    await signIn("google", { redirectTo: "/" });
  }
}
