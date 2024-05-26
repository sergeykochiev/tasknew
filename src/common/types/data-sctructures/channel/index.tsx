class Channel {
    constructor(
        public id: number,
        public creatorId: number,
        public description: string,
        public label: string,
        public price: number | null,
        public visibility: boolean,
        public slug: string
    ) {}
}

export default Channel