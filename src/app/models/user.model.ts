export class User {
    constructor(
        public id?: number,
        public username?: string,
        public name?: string,
        public surname?: string,
        public email?: string,
        public password?: string,
        public phone?: string,
        public role?: string,
        public status?: boolean,
        public createdAt?: string
    ) { }
}