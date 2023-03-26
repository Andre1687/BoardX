import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp, arrayUnion } from 'firebase/firestore';
import { Element, List } from './models.interface';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  // Import to authenticate.
  // Imports instance to the firebase database called db.
  constructor(private db: AngularFirestore,
      private afAuth: AngularFireAuth
    ) { }

 /**
  * Adds a table to the collection 'tables'
  * @param table Object with title & array of elements.
  * @param otherParam The other parameter.
  * @returns event 'add'to the database.
  */
  async addTable(table: any) {
    // Wait for the state of the user.
    const user = await this.afAuth.currentUser

    // If there is no user nothing is done.
    if(!user) return

    // Add table with the data instance
    // The id is generated automatically in the 'tables' collection
    // Converts date from tupe 'date' into a 'firestore timestamp'
    return this.db.collection("tables").add({
      ...table,
      uid: user.uid,
      date: Timestamp.fromDate( new Date()),
    })
  }

 /**
  * Obtains all the tables of the user.
  * @param uid unique id to the user.
  * @returns Ordered query by index in acending fashion.
  */ 
  getTables(uid: string) {
    // Query to the database in the collection 'tables'.
    // Makes reference to all the documents with the property 'uid' being the same to the uid of the user.
    // Orders by index in an acending fhashion.
    return this.db.firestore.collection("tables")
    .where('uid', '==', uid).orderBy("index", "asc")
  }

  /**
   * Actualizes and array of documents (tables).
   * The items of the array have their references.
   * @param lists Array of lists.
   */ 
  actualizeIndexes(lists: List[]) {
    for(let list of lists){
      this.db.collection('tables').doc(list.docRef).update({index: list.index})
    }

  }

 /**
  * Deletes a table from the database.
  * @param docRef the id of the document.
  * @returns Query of erased.
  */ 
  deleteTable(docRef: string) {
    // Deletes a document in the collection 'tables'.
    return this.db.collection('tables').doc(docRef).delete()
  }

  /**
  * Adds an element to the array 'elements' of a document in the database.
  * @param docRef id of the document to actualize.
  * @param elemento element to concatinate to the array.
  * @returns Query of the operation 'update'.
  */ 
  addElementTable(docRef: string, element: any) {
    return this.db.collection('tables').doc(docRef).update({
      // arrayUnion is used to add an element to the array.
      elements: arrayUnion(element)
    })
  }

  /**
   * 
   * @param docRef id of the element being actualized.
   * @param arr Array that is going overwrite the previous one. 
   * @returns Query of the operation 'update'.
   */
  actualizeArrayElements(docRef: string, arr: Element[]) {
    return this.db.collection('tables').doc(docRef).update({
      elements: arr
    })
  }

  /**
   * Actualize the title of the document.
   * @param docRef Id of the document being actualized.
   * @param nuevoTitle New title.
   * @returns Query of the operation 'update'.
   */
  actualizaTitle(docRef: string, nuevoTitle: string) {
    return this.db.collection('tables').doc(docRef).update({
      title: nuevoTitle
    })
  }
}
