import type { ImageSource } from "./common";

export type TestimonialKey = "t1" | "t2" | "t3";

export interface Testimonial {
  key: TestimonialKey;
  image: ImageSource;
  /** Note sur 5 */
  rating?: number;
}