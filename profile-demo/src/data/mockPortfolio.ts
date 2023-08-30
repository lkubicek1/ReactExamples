import {faker} from "@faker-js/faker";
import { Project } from '../models/Project';

export const generateMockPortfolio = (count: number = 5): Project[] => {
    const projects: Project[] = [];

    for (let i = 0; i < count; i++) {
        projects.push({
            id: i,
            title: faker.company.name(),
            description: faker.lorem.paragraph(),
            imageUrl: 'https://picsum.photos/200', // Using Lorem Picsum for placeholder image
            date: faker.date.past(),
        });
    }

    return projects;
}
