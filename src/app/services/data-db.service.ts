import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import {
  query,
  where,
  limitToLast,
  getDocs,
  collection,
  orderBy,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataDbService {
  private measuresCollection: AngularFirestoreCollection<any>;
  // db = getDatabase();
  constructor(private afs: AngularFirestore) {
    this.measuresCollection = afs.collection<any>('measures');
  }

  saveMeasures(newMeasures: any): Promise<any> {
    return this.measuresCollection.add(newMeasures);
  }

  getData() {
    return new Promise<any>((resolve) => {
      this.afs
        .collection('measures')
        .valueChanges()
        .subscribe((data) => resolve(data));
    });
  }
  async getDataOrderLimit(limit: number): Promise<any[]> {
    const reference = collection(this.afs.firestore, 'measures');
    const q = query(reference, orderBy('dateNew'), limitToLast(limit));
    const querySnapshot = await getDocs(q);

    const result: any[] = [];
    querySnapshot.forEach((doc: any) => {
      result.push(doc.data());
    });
    const ret = result.reverse();
    return ret;
  }
}
