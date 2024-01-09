import {Injectable} from '@angular/core';
import {NewsData} from "../../../models/types";

@Injectable({
  providedIn: 'root',
})
export class NewsDataProviderService {

  private readonly news: NewsData[] = [
    {
      id: 1,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: this.calculateDate(1000),
      showMore: "#"
    },
    {
      id: 2,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: this.calculateDate(50),
      showMore: "#"
    },
    {
      id: 3,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: this.calculateDate(200),
      showMore: "#"
    },
    {
      id: 4,
      title: "تعمیرات سایت",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      updatedDate: this.calculateDate(5),
      showMore: "#"
    },
  ];

  public GetLatestNews() {
    this.news.sort((a, b) => b.updatedDate.getTime() - a.updatedDate.getTime());
    return this.news;
  }

  private calculateDate(sec: number): Date {
    return new Date(new Date().getTime() - 24 * 60 * 60 * sec);
  }
}
