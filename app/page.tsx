import { db } from "@/server/db";
import UploadThing from "./UploadThing";
import { files_table } from "@/server/db/schema";
import { cookies } from "next/headers";
import { UTApi } from "uploadthing/server";

export default async function Home() {
  const files = await db.select().from(files_table);

  async function seed() {
    "use server";

    const files = await db.select().from(files_table);
    const ids = files.map((file) => file.uploadedId);

    const utapi = new UTApi();
    await utapi.deleteFiles(ids);

    await db.delete(files_table);

    // NextJS will revalidate your current page with fresh data
    const c = await cookies();
    c.set("force-refresh", JSON.stringify(Math.random()));
  }

  return (
    <div className="max-w-full flex flex-col">
      <UploadThing />

      <code>
        {files.map((file) => (
          <fieldset key={file.name} className="border-white border-2 p-2 m-2">
            <ul>
              {Object.entries(file).map(([key, value]) => (
                <li key={key}>
                  {key}: {JSON.stringify(value)}
                </li>
              ))}
            </ul>
          </fieldset>
        ))}
      </code>

      <form action={seed} className="contents ">
        <button
          type="submit"
          className="bg-red-500 w-1/3 mx-auto rounded py-4 uppercase text-white"
        >
          Delete everything
        </button>
      </form>
    </div>
  );
}
