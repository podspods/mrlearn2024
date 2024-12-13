/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


// The current database to use.
use('test');

// Search for documents in the current collection.
// db.getCollection('pagesections')
// .updateMany(
//   { "ident.pageId": 2010 },
//   { $set: { "ident.pageId": 1111 } })

//   db.pagesections.aggregate([
//     { $match: {} },  // Sélectionne tous les documents (vous pouvez appliquer un filtre ici si nécessaire)
//     { $out: "sections" }  // Spécifie la collection de destination
//  ])




//  db.getCollection('sections')
// .find(
//   { "image.src": "https://www.irisations.com/img/formation/Soudure_vitrail_stage_geste_LD_Iri.jpg" })


  db.getCollection('sections')
.updateMany(
//   { "image.position": 2 },
  { "ident.id" : "66aa9c77dca381add0c20df8" },

  { $set: {"ident.type": 601} })
//   { $set: {"image.position": 201} })
