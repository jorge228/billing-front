export class Client {
    constructor(
        public id?: number,
        public cif?: string,
        public name?: string,
        public address?: string,
        public postalCode?: string,
        public city?: string,
        public country?: string,
        public email?: string,
        public phone?: string,
        public createdAt?: string
    ) { }
}