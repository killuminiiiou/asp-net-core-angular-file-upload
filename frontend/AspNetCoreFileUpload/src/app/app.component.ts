import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

type attachment = Array<{name: string, file: Blob}>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  public constructor(private http: HttpClient) {}
  
  public attachments: attachment = [];

  public upload(event: any): void {
    const file = event.target.files[0];
    console.log('uploading ' + file.name);
    this.attachments.push({ name: file.name, file: file });
    console.log('file uploaded!');
  }

  public submit(): void {
    console.log('submit - attch[0] = ' + this.attachments[0].name);
    console.log('submit - attch[1] = ' + this.attachments[1].name);
    console.log('submit - attch[0] = ' + this.attachments[0].file);
    console.log('submit - attch[1] = ' + this.attachments[1].file);
    const formData = new FormData();
    formData.append('attachments', this.attachments[0].file, this.attachments[0].name);
    formData.append('attachments', this.attachments[1].file, this.attachments[1].name);
    formData.append('categoryName', 'Vehicle');
    formData.append('subCategoryName', 'Car');
    formData.append('title', 'Selling car');
    formData.append('price', '12000');

    console.log(formData);

    this.http.post('http://localhost:5000/api/uploads', formData)
    .pipe(
      map(res => console.log('got response', res),
      catchError(error => of(console.error('got error', error)))))
      .subscribe(() => console.log('next'), error => console.log(error));
  }
}
