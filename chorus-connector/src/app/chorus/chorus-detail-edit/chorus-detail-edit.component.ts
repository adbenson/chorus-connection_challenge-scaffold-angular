import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chorus } from 'src/app/common/chorus-data.service';

const newChorus: Chorus = {
  id: '',
  name: '',
  description: '',
  contactEmail: '',
  location: {
    city: '',
    state: ''
  }
}

@Component({
  standalone: true,
  selector: 'app-chorus-detail-edit',
  templateUrl: './chorus-detail-edit.component.html',
  styleUrls: ['./chorus-detail-edit.component.css'],
  imports: [
    FormsModule,
  ]
})
export class ChorusDetailEditComponent {

  chorus: Chorus = {...newChorus};

  onSave() {

  }
}
