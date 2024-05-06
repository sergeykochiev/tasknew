class ChannelStruct {
    constructor(
        public id: number,
        public creatorId: number,
        public brief_description: string,
        public description: string,
        public label: string,
        public price: number | null,
        public is_public: boolean,
        public slug: string
    ) {}
}

export default ChannelStruct