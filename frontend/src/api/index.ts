import { PartialBut } from '@/utils/utilityTypes';
import MarkdownNote, { EXAMPLE_NOTES } from '../types/MarkdownNoteType';

export default class API {
  /** URL's origin of the backend server */
  private static origin = import.meta.env.PROD
    ? window.location.origin // backend server also serves the frontend static files in prod
    : '/api'; // prefix to pass by dev proxy;

  private static getErrorDetais = async (res: Response): Promise<string> => {
    try {
      const errorMessage = await res.text() || res.statusText;
      return `${res.status} ${errorMessage}`;
    } catch {
      return `${res.status} ${res.statusText}`;
    }
  };

  static fetchNotes = async (): Promise<MarkdownNote[]> => {
    try {
      const res = await fetch(this.origin + '/notes');
      if (!res.ok) throw new Error(`Fetching notes failed: ${this.getErrorDetais(res)}`);
      const json = await res.json() as MarkdownNote[];
      console.log('Received notes', json);
      return json;
    } catch (error) {
      console.error(error);
      console.log('Fallback to local notes');
      return EXAMPLE_NOTES;
    }
  };

  /**
   * Request the backend to create a new empty note.
   * @return the newly created note
   */
  static createEmptyNote = async (): Promise<MarkdownNote> => {
    const res = await fetch(this.origin + '/note/create', {
      method: 'POST',
    });
    if (!res.ok) throw new Error(`Note creation failed: ${this.getErrorDetais(res)}`);
    const json = await res.json() as MarkdownNote;
    console.log('Note created', json);
    return json;
  };

  /**
   * Request the backend to update the specified attributes of a note
   * @param note a partial note with only its id and the attributes to update
   * @returns the whole updated note
   */
  static updateNote = async (note: PartialBut<MarkdownNote, 'id'>): Promise<MarkdownNote> => {
    const res = await fetch(this.origin + '/note/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    if (!res.ok) throw new Error(`Note update failed: ${this.getErrorDetais(res)}`);
    const json = await res.json() as MarkdownNote;
    console.log('Note updated', json);
    return json;
  };

  static deleteNote = async (id: number): Promise<void> => {
    const res = await fetch(this.origin + '/note/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) throw new Error(`Note deletion failed: ${this.getErrorDetais(res)}`);
  };
}
