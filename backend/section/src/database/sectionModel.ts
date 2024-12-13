import { Section, Status } from '@irachus/jscommon';
import mongoose, { Document, ObjectId, Schema } from 'mongoose';

// Définition des types
export interface ISection extends Document, Section {
  _id: ObjectId;

}

// Définir le schéma
const sectionSchema: Schema = new Schema({
  ident: {
    id: { type: String },
    pageType: { type: Number },
    status: { type: Number },
    title: { type: [String] },
    titleLink: { type: [String] },
    pageId: { type: Number },
    sectionOrder: { type: Number },
    type: { type: Number },

    dateRange: {
      startDate: { type: Date },
      endDate: { type: Date }
    }
  },
  text: { type: [String], required: false },
  textCTA: { type: [String], required: false },
  image: {
    src: { type: String },
    alt: { type: [String] },
    width: { type: Number },
    height: { type: Number },
    position: { type: Number }
  },
  date: {
    create: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now }
  }
});

// Middleware pour ajouter l'id
sectionSchema.pre<ISection>('save', function (next) {
  if (this.isNew) {
    this.ident.id = this._id.toString();
    this.ident.status = Status.VALIDE
    this.date.update = new Date();
  }
  next();
});

// Exporter le modèle
const sectionModel =
  mongoose.models.section ||
  // mongoose.model<ISection>('section', sectionSchema);
  mongoose.model<ISection>('sections', sectionSchema);

export default sectionModel;
