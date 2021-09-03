import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { House } from '../interfaces/house.interface';
import { map } from 'rxjs/operators';
//import { HOUSES } from './houses.db';


@Injectable({
  providedIn: 'root'
})
export class HousesService {

  collection!: AngularFirestoreCollection<House>;

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<House>('houses');
  }

  getAll(): Observable<any[]> {
    return this.collection.valueChanges();
  }

  getById(pId: string) {
    return this.collection.doc(pId).valueChanges();
  }

  delete(pId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.collection.doc(pId).delete();
        resolve({ success: 'ok' })
      } catch (err) {
        reject(err);
      }
    })
  }


  create(pHouse: House, pId: string = ""): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        //resolve, recibo una house pero sin id, firestore tiene un metodo que me permite crear un id y asignarselo a nuevo elemento (ID de documento);
        const id = (pId === "") ? this.firestore.createId() : pId;
        pHouse.id = id;
        const result = await this.collection.doc(id).set(pHouse);
        resolve({ success: 'ok' });
      } catch (err) {
        //reject
        reject(err);
      }
    });
  }
}
