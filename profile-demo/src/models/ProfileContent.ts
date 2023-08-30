import {faker} from "@faker-js/faker";


export class ProfileContent {
    name: string;
    jobTitle: string;
    email: string;
    profileImage: string;
    bio: string;
    avatarUrl: string;
    phone: string;
    address: string;
    constructor() {
        this.name = `${faker.person.firstName()} ${faker.person.lastName()}`;
        this.jobTitle = faker.commerce.department();
        this.email = faker.internet.email();
        this.profileImage = 'https://picsum.photos/200'; // Using Lorem Picsum for placeholder image
        this.bio = faker.lorem.paragraphs(3);
        this.avatarUrl = 'https://picsum.photos/50'; // Using Lorem Picsum for placeholder image
        this.phone = faker.phone.number();
        this.address = faker.location.streetAddress();
    }

    // Later, you can add more methods to fetch data from backend
}
