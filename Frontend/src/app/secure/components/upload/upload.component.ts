import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Output() uploaded = new EventEmitter<String>();

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  upload(files: FileList) {
    const file = files[0];

    const data = new FormData();
    data.append('image', file);

    this.http.post(`${environment.api}/upload`, data)
      .subscribe((res: {url: string}) => {
        this.uploaded.emit(res.url);
      });
  }

}
