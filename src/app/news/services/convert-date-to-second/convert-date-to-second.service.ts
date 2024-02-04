import {Injectable} from "@angular/core";

@Injectable(
  {
    providedIn: "root"
  }
)
export class DateConverter {
  public calculateDate(sec: number): Date {
    return new Date(new Date().getTime() - 24 * 60 * 60 * sec);
  }
}
