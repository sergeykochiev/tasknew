import { TempDB } from "../helpers";
import ChannelStruct from "../types/data-sctructures/channel";
import ProfileStruct from "../types/data-sctructures/profile";
import QuestionStruct from "../types/data-sctructures/question";
import TaskStruct from "../types/data-sctructures/task";
import UserStruct from "../types/data-sctructures/user";

const CURRENT_USER: UserStruct = {
    id: 4,
    nickname: "sergeykochiev",
    email: "asoijdoaisjda@email.com",
    status: "статус",
    is_staff: false,
    is_active: false
}

const USERS: Array<UserStruct> = [
    {
        id: 1,
        nickname: "sergeykochiev",
        email: "aspohjdaosdh@email.com",
        status: "статус",
        is_staff: false,
        is_active: true
    },
    {
        id: 2,
        nickname: "sergeykochiev",
        email: "fsopdhoddwd@email.com",
        status: "статус",
        is_staff: false,
        is_active: true
    },
    {
        id: 3,
        nickname: "sergeykochiev",
        email: "klfgsindwaindaw@email.com",
        status: "статус",
        is_staff: false,
        is_active: false
    },
]

const PROFILES: Array<ProfileStruct> = [
    {
        id: 1,
        first_name: "Сергей",
        last_name: "Кочиев",
        avatar: "",
        slug: "1",
        visible: true,
        creation_date: "20.03.2024 12:03:56",
        userId: 1
    },
    {
        id: 2,
        first_name: "Сергей",
        last_name: "Кочиев",
        avatar: "",
        slug: "2",
        visible: false,
        creation_date: "20.03.2024 12:04:56",
        userId: 2
    },
    {
        id: 3,
        first_name: "Сергей",
        last_name: "Кочиев",
        avatar: "",
        slug: "3",
        visible: true,
        creation_date: "20.03.2024 12:05:56",
        userId: 3
    },
    {
        id: 4,
        first_name: "Сергей",
        last_name: "Кочиев",
        avatar: "",
        slug: "4",
        visible: true,
        creation_date: "20.03.2024 12:07:56",
        userId: 4
    },
]

const CHANNELS: Array<ChannelStruct> = [
    {
        id: 1,
        creatorId: 1,
        label: "Канал 1.1",
        price: null,
        brief_description: "",
        description: "",
        is_public: true,
        tasksCount: 5,
        subsCount: 5,
        slug: "1"
    },
    {
        id: 2,
        creatorId: 1,
        label: "Канал 1.2",
        price: null,
        brief_description: "",
        description: "",
        is_public: true,
        tasksCount: 5,
        subsCount: 5,
        slug: "2"
    },
    {
        id: 3,
        creatorId: 1,
        label: "Канал 1.3",
        price: null,
        brief_description: "",
        description: "",
        is_public: false,
        tasksCount: 5,
        subsCount: 5,
        slug: "3"
    },
    {
        id: 4,
        creatorId: 1,
        label: "Канал 1.4",
        price: null,
        brief_description: "",
        description: "",
        is_public: false,
        tasksCount: 5,
        subsCount: 5,
        slug: "4"
    },
    {
        id: 5,
        creatorId: 2,
        label: "Канал 2.1",
        price: null,
        brief_description: "",
        description: "",
        is_public: true,
        tasksCount: 5,
        subsCount: 5,
        slug: "5"
    },
    {
        id: 6,
        creatorId: 2,
        label: "Канал 2.2",
        price: null,
        brief_description: "",
        description: "",
        is_public: true,
        tasksCount: 5,
        subsCount: 5,
        slug: "6"
    },
    {
        id: 7,
        creatorId: 2,
        label: "Канал 2.3",
        price: null,
        brief_description: "",
        description: "",
        is_public: false,
        tasksCount: 5,
        subsCount: 5,
        slug: "7"
    },
    {
        id: 8,
        creatorId: 2,
        label: "Канал 2.4",
        price: null,
        brief_description: "",
        description: "",
        is_public: false,
        tasksCount: 5,
        subsCount: 5,
        slug: "8"
    },
    {
        id: 9,
        creatorId: 3,
        label: "Канал 3.1",
        price: null,
        brief_description: "",
        description: "",
        is_public: true,
        tasksCount: 5,
        subsCount: 5,
        slug: "9"
    },
    {
        id: 10,
        creatorId: 3,
        label: "Канал 3.2",
        price: null,
        brief_description: "",
        description: "",
        is_public: true,
        tasksCount: 5,
        subsCount: 5,
        slug: "10"
    },
    {
        id: 11,
        creatorId: 1,
        label: "Канал 3.3",
        price: null,
        brief_description: "",
        description: "",
        is_public: false,
        tasksCount: 5,
        subsCount: 5,
        slug: "11"
    },
    {
        id: 12,
        creatorId: 3,
        label: "Канал 3.4",
        price: null,
        brief_description: "",
        description: "",
        is_public: false,
        tasksCount: 5,
        subsCount: 5,
        slug: "12"
    },
]

const TASKS: Array<TaskStruct> = [
    {
        id: 1,
        title: "Задание 1.1",
        brief_description: "Краткое описание",
        detailed_description: "Полное описание",
        avatar: "",
        visibile: true,
        creatorId: 1,
        channelId: 1,
        date_created: "20.03.2024 13:04:56",
        slug: "1",
        identifier: "0000001",
        is_feedback: true,
        attempts: 2,
        upload: "",
        questionCount: 10
    },
    {
        id: 2,
        title: "Задание 1.2",
        brief_description: "Краткое описание",
        detailed_description: "Полное описание",
        avatar: "",
        visibile: true,
        creatorId: 2,
        channelId: 2,
        date_created: "20.03.2024 13:04:56",
        slug: "2",
        identifier: "0000002",
        is_feedback: true,
        attempts: 2,
        upload: "",
        questionCount: 10
    },
    {
        id: 3,
        title: "Задание 1.3",
        brief_description: "Краткое описание",
        detailed_description: "Полное описание",
        avatar: "",
        visibile: true,
        creatorId: 3,
        channelId: 3,
        date_created: "20.03.2024 13:04:56",
        slug: "3",
        identifier: "0000003",
        is_feedback: true,
        attempts: 2,
        upload: "",
        questionCount: 10
    },
]

// const QUESTIONS: Array<QuestionStruct> = [
//     {
//         id: 1,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 1
//     },
//     {
//         id: 2,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 1
//     },
//     {
//         id: 3,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 1
//     },
//     {
//         id: 4,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 1
//     },
//     {
//         id: 5,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 1
//     },
//     {
//         id: 6,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 1
//     },
//     {
//         id: 7,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 2
//     },
//     {
//         id: 8,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 2
//     },
//     {
//         id: 9,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 2
//     },
//     {
//         id: 10,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 2
//     },
//     {
//         id: 11,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 2
//     },
//     {
//         id: 12,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 2
//     },
//     {
//         id: 13,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 2
//     },
//     {
//         id: 14,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 3
//     },
//     {
//         id: 15,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 3
//     },
//     {
//         id: 16,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 3
//     },
//     {
//         id: 17,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 3
//     },
//     {
//         id: 18,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 3
//     },
//     {
//         id: 19,
//         label: "Название вопроса название вопроса название вопроса название вопроса название вопроса",
//         taskId: 3
//     }
// ]

export { USERS, PROFILES, TASKS, CHANNELS, CURRENT_USER }

export async function seedTempDB(): Promise<void> {
    const database = new TempDB()
    await database.put('users', USERS)
    await database.put('profiles', PROFILES)
    await database.put('tasks', TASKS)
    await database.put('channels', CHANNELS)
    await database.put('answers', [])
    await database.put('variants', [])
}

