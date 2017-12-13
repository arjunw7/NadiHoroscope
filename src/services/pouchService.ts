import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
 
@Injectable()
export class PouchService {
 
  data: any;
  db: any;
  remote: any;
 
  constructor() {
 
    this.db = new PouchDB('powerdb');
 
    this.remote = 'https://couchdb-3c74a1.smileupps.com/_utils/database.html?powerdb';
 
    let options = {
      live: true,
      retry: true,
      continuous: true
    };
 
    this.db.sync(this.remote, options);
 
  }
 
  getData() {
    
     if (this.data) {
       return Promise.resolve(this.data);
     }
    
     return new Promise(resolve => {
    
       this.db.allDocs({
    
         include_docs: true
    
       }).then((result) => {
    
         this.data = [];
    
         let docs = result.rows.map((row) => {
           this.data.push(row.doc);
         });
    
         resolve(this.data);
    
         this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
           this.handleChange(change);
         });
    
       }).catch((error) => {
    
         console.log(error);
    
       });
    
     });
    
   }
 
   createPlants(plant){
    this.db.post(plant);
  }
   
  updatePlants(plant){
    this.db.put(plant).catch((err) => {
      console.log(err);
    });
  }
   
  deletePlants(plant){
    this.db.remove(plant).catch((err) => {
      console.log(err);
    });
  }
 
handleChange(change){
    
     let changedDoc = null;
     let changedIndex = null;
    
     this.data.forEach((doc, index) => {
    
       if(doc._id === change.id){
         changedDoc = doc;
         changedIndex = index;
       }
     });
    
     //A document was deleted
     if(change.deleted){
       this.data.splice(changedIndex, 1);
     }
     else {
    
       //A document was updated
       if(changedDoc){
         this.data[changedIndex] = change.doc;
       }
    
       //A document was added
       else {
         this.data.push(change.doc);
       }
    
     }
    
   } 
}
