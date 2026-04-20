export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Work {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    message: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}