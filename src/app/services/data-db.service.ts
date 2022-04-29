import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataDbService {
  private measuresCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.measuresCollection = afs.collection<any>('measures');
  }

  saveMeasures(newMeasures: any) {
    this.measuresCollection.add(newMeasures);
  }

  getData() {
    return new Promise<any>((resolve) => {
      this.afs
        .collection('measures')
        .valueChanges()
        .subscribe((data) => resolve(data));
    });
  }
}
