import { Router } from 'express';
import { Note } from '../database/models';

const noteRouter = Router(); // Prefixed by /note

noteRouter.get('/all', async (_, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(404).json(error);
  }
});

noteRouter.post('/create', async (_, res) => {
  console.log('Note creation request');
  try {
    const newNote = await Note.create({ label: 'Nouvelle note' });
    console.log('New note created:', JSON.stringify(newNote));
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).send(error);
  }
});

noteRouter.put('/update', async (req, res) => {
  console.log('Note update request', JSON.stringify(req.body));
  const { id, ...attributesToUpdate } = req.body;
  if (typeof id !== 'number') {
    res.status(400).send('id missing in body');
  }
  try {
    // Try to update row
    const [nUpdatedRows] = await Note.update(
      attributesToUpdate,
      {
        where: { id: req.body.id },
        silent: !attributesToUpdate.markdown, // do not change updatedAt value if markdown is not to be updated
      },
    );
    if (nUpdatedRows) { // Send the updated note
      const updatedNote = await Note.findByPk(id);
      res.status(200).json(updatedNote);
    } else { // Send error if no note has been updated
      res.status(404).send('The specified id does not exist');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

noteRouter.delete('/delete', async (req, res) => {
  console.log('Note deletion request', JSON.stringify(req.body, null, 2));
  const { id } = req.body;
  if (typeof id !== 'number') res.status(400).send('id missing in body');
  try {
    const ndeletedRows = await Note.destroy({ where: { id } });
    console.log(ndeletedRows);
    if (ndeletedRows) {
      res.sendStatus(200);
    } else {
      res.status(404).send('The specified id does not exist');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default noteRouter;
