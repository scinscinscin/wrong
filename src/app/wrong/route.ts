import Sqlite from "better-sqlite3";
import path from "path";
const current = process.cwd();
const pathToDb = path.join(current, "./public/wrong.sqlite");
const db = new Sqlite(pathToDb, { readonly: true, fileMustExist: true });

export async function GET() {
  const stmt = db.prepare("SELECT * FROM WRONG");
  const result = await stmt.all();
  return new Response(JSON.stringify(result));
}
