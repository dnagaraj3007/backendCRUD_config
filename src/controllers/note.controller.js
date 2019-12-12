import Note from '../models/note.model.js';
var api = {};



api.create = (req, res) =>{
  if (!req.body.title) {
    res.status(400).send({
      'message': 'Note cannot be empty'
    });
  }

  const note = new Note({
    'title': req.body.title,
    'description': req.body.description
  });

  note.save().then(data =>{
    res.send(data);
  }).catch((err) => {
    res.status(500).send({
      'message': err.message || 'Some error occured while saving data'
    });
  });
};

api.findOne = (req, res) =>{
  Note.findById(req.params.noteId).then((note)=>{
    if (!note) {
      res.status(400).send({
        'message': 'Note not found with noteId ' + req.params.noteId
      });
    }
    res.status(200).send(note);
  }).catch((err)=>{
    res.status(500).send({
      'message': err.message || 'Unable to fetch note'
    });
  });
};

api.updateNote = (req, res) =>{
  Note.findByIdAndUpdate(req.params.noteId, {
    'title': req.body.title,
    'description': req.body.description
  }).then((note)=>{
    if (!note) {
      res.status(400).send({
        'message': 'Note not found with noteId' + req.params.noteId
      });
    }
    res.status(200).send(note);
  }).catch((err) =>{
    res.status(500).send({
      'message': err.message || 'Unable to update the note ' + req.params.noteId
    });
  });

};

api.deleteNote = (req, res) =>{
  Note.findByIdAndRemove(req.params.noteId).then((note)=>{
    if (!note) {
      res.status(400).send({
        'message': 'Note not found with noteId' + req.params.noteId
      });
    }
    res.status(200).send({
      'message': 'Note deleted successully'
    });
  }).catch((err)=>{
    res.status(500).send({
      'message': err.message || 'Unable to delete note with noteId' + req.params.noteId
    });
  });
};

api.findAll = (req, res) =>{
  Note.find().then((notes) =>{
    res.status(200).send(notes);
  }).catch((err) =>{
    res.status(400).send({
      'message': err.message || 'Error fetching notes'
    });
  });


};


export default api;
