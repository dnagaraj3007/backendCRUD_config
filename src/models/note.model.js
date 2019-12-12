import mongoose from 'mongoose';
const NoteSchema = mongoose.Schema({
  'title': {'type': String, 'required': true},
  'description': {'type': String}
},
{
  'timestamps': true
});

var noteModel = mongoose.model('Note', NoteSchema);

export default noteModel;

