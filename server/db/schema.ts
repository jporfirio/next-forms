// import "server-only";

import {
  int,
  text,
  index,
  singlestoreTableCreator,
  bigint,
  timestamp,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
  (name) => `next_forms_${name}`
);

export const files_table = createTable(
  "files_table",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),

    name: text("name").notNull(),
    size: int("size").notNull(),
    url: text("url").notNull(),
    uploadedId: text("uploaded_id").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => {
    return [index("uploaded_id").on(t.uploadedId)];
  }
);

export type DB_FileType = typeof files_table.$inferSelect;
