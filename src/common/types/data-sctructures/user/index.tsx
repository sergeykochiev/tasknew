class UserStruct {
    constructor(
        public id: number,
        public nickname: string,
        public email: string,
        public status: string,
        public is_staff: boolean,
        public is_active: boolean
    ) {}
}

export default UserStruct