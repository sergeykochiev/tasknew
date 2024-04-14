class TaskStruct {
    constructor(
        public id: number,
        public title: string,
        public brief_description: string,
        public detailed_description: string,
        public avatar: string,
        public visibile: boolean,
        public creatorId: number,
        public date_created: string,
        public slug: string,
        public identifier: string,
        public is_feedback: boolean,
        public attempts: number,
        public upload: string,
        public questionCount: number,
        public channelId?: number
    ) {}
}

export default TaskStruct