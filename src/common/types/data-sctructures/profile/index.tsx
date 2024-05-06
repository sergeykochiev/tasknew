class ProfileStruct {
    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public avatar: string,
        public slug: string,
        public visible: boolean,
        public creation_date: string,
        public userId: number
    ) {}
}

export default ProfileStruct