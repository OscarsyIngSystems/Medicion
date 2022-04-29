import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Injectable({
  providedIn: 'root',
})
export class DataDbService {
  private measuresCollection: AngularFirestoreCollection<any>;

  constructor(
    private afs: AngularFirestore,
    public iziToast: Ng2IzitoastService
  ) {
    this.measuresCollection = afs.collection<any>('measures');
  }

  saveMeasures(newMeasures: any) {
    this.measuresCollection.add(newMeasures).then((response) => {
      if (response.id) {
        this.iziToast.success({
          title: 'Correcto!',
          message: 'Datos guardados',
        });
        console.log('Guardado');
        console.log(this.iziToast);
      }
    });
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
