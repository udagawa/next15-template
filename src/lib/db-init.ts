import { openDB } from './db';

let databaseInitialized = false;

export async function initDB() {
  if (databaseInitialized) {
    return;
  }
  try {
    const db = await openDB();

    // TODO: setup db

    await db.close();
    databaseInitialized = true;
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
}
