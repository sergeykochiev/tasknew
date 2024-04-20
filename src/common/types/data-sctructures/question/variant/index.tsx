class VariantStruct {
    constructor (
        public questionId: number,
        public label: string,
        public answer?: string,
        public correct?: boolean
    ) {}
}

export default VariantStruct