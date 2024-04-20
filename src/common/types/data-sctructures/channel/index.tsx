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

// interface ChannelStruct {
//     id: number,
//     creatorId: number,
//     brief_description: string,
//     description: string,
//     label: string,
//     price: number | null,
//     is_public: boolean,
//     tasksCount: number,
//     subsCount: number,
//     slug: string
// }

export default ChannelStruct