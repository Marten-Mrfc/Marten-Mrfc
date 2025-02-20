export interface Project {
    title: string;
    slug: string;
    description: string;
    imageUrl: string | null;
    link: string | null;
    content: string;
    tags: string[];
    startDate: string | null;
    endDate: string | null;
}
