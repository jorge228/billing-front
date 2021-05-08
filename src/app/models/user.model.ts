export class User {
    constructor(
        public id?: number,
        public name?: string,
        public surname?: string,
        public email?: string,
        public phone?: string,
        public role?: string,
        public status?: boolean,
        public createdAt?: string
    ) { }
}