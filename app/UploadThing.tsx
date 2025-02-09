"use client";

import { UploadButton } from "@/components/UploadThing";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        onClientUploadComplete={() => navigate.refresh()}
      />
    </main>
  );
}
