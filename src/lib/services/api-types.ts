export type PortfolioDto = ProjectTeaserDto[];

export type ProjectTeaserDto = {
  slug: string;
  title: string;
  released: string;
};

export type ProjectDto = {
  slug: string;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  content: string;
  released: string;
  after?: string;
  before?: string;
};
