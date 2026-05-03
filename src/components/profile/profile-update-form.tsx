"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

type ProfileUpdateFormProps = {
  defaultName: string;
  defaultImage: string;
};

export function ProfileUpdateForm({
  defaultName,
  defaultImage,
}: ProfileUpdateFormProps) {
  const router = useRouter();
  const [name, setName] = useState(defaultName);
  const [image, setImage] = useState(defaultImage);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(async () => {
      const { error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        toast.error(error.message || "Profile update failed.");
        return;
      }

      toast.success("Profile updated successfully.");
      router.push("/my-profile");
      router.refresh();
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="hover-lift-card mx-auto w-full max-w-xl space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/80"
    >
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f766e]">
          Update Information
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          Refresh your profile details
        </h1>
      </div>
      <input
        type="text"
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0f766e]"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        type="url"
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0f766e]"
        placeholder="Image URL"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
      >
        {isPending ? "Updating..." : "Update Information"}
      </button>
    </form>
  );
}
