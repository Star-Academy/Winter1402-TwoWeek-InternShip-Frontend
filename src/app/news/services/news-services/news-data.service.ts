import {Injectable} from '@angular/core';
import {NewsData} from "../../../../models/types";
import {DateConverter} from "../convert-date-to-second/convert-date-to-second.service";

@Injectable({
  providedIn: 'root',
})
export class NewsDataService {

  constructor(private converter: DateConverter) {
  }

  private readonly NEWS_DATA: NewsData[] = [
    {
      id: 1,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: this.converter.calculateDate(1000),
      showMore: "#"

    },
    {
      id: 2,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: this.converter.calculateDate(50),
      showMore: "#"
    },
    {
      id: 3,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: this.converter.calculateDate(200),
      showMore: "#"
    },
    {
      id: 4,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: this.converter.calculateDate(5),
      showMore: "#"
    },
  ];
  public get_NEWS_DATA(): NewsData[] {
    return this.NEWS_DATA;
  }

}
