import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public constructor(private http: HttpClient) {}

  public upload(event: any): void {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('additional', 'I AM THE ADDITIONAL PROP!');

    this.http.post('http://localhost:5000/api/uploads', formData)
    .pipe(
      map(res => console.log('got response', res),
      catchError(error => of(console.error('got error', error)))))
      .subscribe(() => console.log('next'), error => console.log(error));
  }
}
