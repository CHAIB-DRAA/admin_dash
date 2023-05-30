import { Schema, model, models } from 'mongoose';

const CoursesSchema = new Schema({
  clientId: {
    type: String,
    
  },
  adressDepart: {
    type: String,
    required: [true, 'Adresse Depart est obligatoire.'],
  },
  adressArrive: {
    type: String,
    required: [true, 'adresse arrive est obligatoire.'],

  },
  dateDépart : {
        type: String,
        required: [true, 'date de départ est obligatoire.'],
  },
  dateArrive : {
    type: String,
    required : [true, 'date de départ est obligatoire.'],
  
},
bonDeCommande: {
    type: String,
}
});

const Courses = models.Courses || model('Courses', CoursesSchema);

export default Courses;