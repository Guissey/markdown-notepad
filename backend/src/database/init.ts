import { Note } from './models';
import { NOTE_SAMPLES } from './samples';

export default async function initDatabase(): Promise<void> {
  try {
    if (process.env.DEV === 'true') {
      await Note.sync({ force: true }); // force: true does so that the table is always dropped then created
      await Note.bulkCreate(NOTE_SAMPLES);
    } else {
      await Note.sync();
    }
  } catch (error) {
    console.log('Database initialisation failed', error);
  }
}
