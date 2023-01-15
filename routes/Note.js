const express = require('express');
const router = express.Router();
const Note = require("./../models/Note")

// App Routes
router.post('/list', async function (req, res) {
    var notes = await Note.find({ userid: req.body.userid });
    res.json(notes);
});

router.post('/add', async function (req, res) {

    await Note.deleteOne({ id: req.body.id })

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    })
    await newNote.save();

    const response = { message: 'New Note Added ' + `id: ${req.body.id}` };
    res.json(response);
});

router.post('/delete', async function (req, res) {
    await Note.deleteOne({ id: req.body.id })
    const response = { message: 'New Note deleted ' };
    res.json(response);
});

module.exports = router;