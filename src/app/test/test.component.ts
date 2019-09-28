import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  items: Observable<any[]>;

  constructor(afs: AngularFirestore) {
    // this.items = afs.collection('subs').valueChanges();
  }

  ngOnInit() {
  }



}
