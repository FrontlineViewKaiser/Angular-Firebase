import { Injectable, OnInit, inject, OnDestroy } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  collectionData,
  onSnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService implements OnDestroy {
  public unsubList;
  public unsubIndiv;

  constructor(public firestore: Firestore) {
    this.setupSubscriptions();
  }

  public setupSubscriptions() {
    this.unsubList = onSnapshot(this.getNotesRef(), (list) => {
      list.forEach((note) => {
        console.log(note.data());
      });
    }, (error) => {
      console.error("Error fetching notes:", error);
    });

    this.unsubIndiv = onSnapshot(
      this.getIndivDoc('trash', 'a7675aggu86668'),
      (element) => {
        console.log(element.data());
      }, (error) => {
        console.error("Error fetching individual document:", error);
      }
    );
  }

  ngOnDestroy() {
    if (this.unsubList) {
      this.unsubList();
    }
    if (this.unsubIndiv) {
      this.unsubIndiv();
    }
  }

  getNotesRef() {
    return collection(this.firestore, 'notes');
  }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  getIndivDoc(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}

/* 

  items$;
  items;
  
    this.items$ = collectionData(this.getNotesRef());
    this.items = this.items$.subscribe((list) =>{
      list.forEach(note => {
        console.log(note)
      });
    });
    this.items$.unsubscribe()




*/
