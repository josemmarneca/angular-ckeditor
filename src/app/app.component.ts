import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 8 and ckeditor 4 with ngmodel';
  editorData = '<strong>angular 8 and ckeditor 4 with ngModel</strong><p>Some initial data</p>';
  configuration = {toolbar: ['Source', '-', 'Bold', 'Italic']};
  config = {
    toolbar: [
      {name: 'document', items: ['Source', '-', 'NewPage', 'Preview', '-', 'Templates']},
      {name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']},
      '/',
      {name: 'basicstyles', items: ['Bold', 'Italic']}
    ]
  };
}
