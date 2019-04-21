import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Log } from "../models/log.model";

@Injectable({
  providedIn: "root"
})
export class LogService {
  private url = "http://localhost:3000/log";

  constructor(private http: HttpClient) {}

  AllLogs(): Observable<Log[]> {
    return this.http.get<Log[]>(this.url);
  }
}
