export interface IPost {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: {
    alt: string;
    asset: { url: string };
  };
  publishedAt: string;
}
