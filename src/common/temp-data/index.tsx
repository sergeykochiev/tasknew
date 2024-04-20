import ChannelStruct from "../types/data-sctructures/channel";
import ProfileStruct from "../types/data-sctructures/profile";
import TaskStruct from "../types/data-sctructures/task";
import UserStruct from "../types/data-sctructures/user";
import VariantStruct from "../types/data-sctructures/variant";

function genereteTasks(count: number): TaskStruct[] {
    const output = []
    for (let i = 0; i < count; i++) {
        output.push({
            id: i,
            title: `Задание ${i}`,
            brief_description: "Краткое описание",
            detailed_description: "Полное описание",
            avatar: "",
            visibile: true,
            creatorId: i,
            channelId: i,
            date_created: (new Date()).toUTCString(),
            slug: String(i),
            identifier: 1000000 + i,
            is_feedback: true,
            attempts: 3,
        })
    }
    return output
}

function generateChannels(count: number): ChannelStruct[] {
    const output = []
    for (let i = 0; i < count; i++) {
        output.push({
            id: i,
            creatorId: i,
            label: `Канал ${i}`,
            price: null,
            brief_description: "Краткое описание",
            description: "Полное описание",
            is_public: true,
            slug: String(i)
        })
    }
    return output
}

function generateUsers(count: number): UserStruct[] {
    const output = []
    for (let i = 0; i < count; i++) {
        output.push({
            id: i,
            nickname: `Пользователь ${i}`,
            email: `example@email.com`,
            status: `Статус ${i}`,
            is_staff: false,
            is_active: i % 2 == 0
        })
    }
    return output
}

function generateProfiles(count: number): ProfileStruct[] {
    const output = []
    for (let i = 0; i < count; i++) {
        output.push({
            id: i,
            first_name: "Сергей",
            last_name: "Кочиев",
            avatar: "",
            slug: String(i),
            visible: i % 2 == 1,
            creation_date: (new Date()).toUTCString(),
            userId: i
        })
    }
    return output
}

function generateData(count: number): [UserStruct[], ProfileStruct[], TaskStruct[], ChannelStruct[]] {
    return [
        generateUsers(count),
        generateProfiles(count),
        genereteTasks(count),
        generateChannels(count)
    ]
}

export const QUESTIONS: Array<QuestionStruct> = [
    {
        label: "Вопрос 1",
        isText: false
    },
    {
        label: "Вопрос 2",
        isText: false
    },
    {
        label: "Вопрос 3",
        isText: true
    },
    {
        label: "Вопрос 4",
        isText: false
    },
    {
        label: "Вопрос 5",
        isText: true
    },
]

export const VARIANTS: Array<VariantStruct> = [
    {
        label: "Вариант 1",
        correct: false
    },
    {
        label: "Вариант 2",
        correct: false
    },
    {
        label: "Вариант 4",
        correct: true
    },
    {
        label: "Вариант 5",
        correct: true
    },
    {
        label: "Правильный ответ",
        correct: true
    },
]

export const ANSWERS: any[] = []
export const [ USERS, PROFILES, TASKS, CHANNELS ] = generateData(20)
export const CURRENT_USER: UserStruct = USERS[0]