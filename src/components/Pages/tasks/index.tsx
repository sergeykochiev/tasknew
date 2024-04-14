// "use client"

// import TaskStruct from "@/common/types/data-sctructures/task"
// import ContentListHeader from "@/components/ContentList/header"
// import ContentList from "@/components/ContentList/list"
// import TaskTile from "@/components/Tile/Task"
// import { useRouter } from "next/navigation"
// import { FC, useState } from "react"

// const TasksPage: FC<{ tasks: Array<TaskStruct>, creatable: boolean }> = ({ tasks, creatable }) => {
//     const [search, setSearch] = useState<string>("")
//     const tasksFiltered = tasks.filter(e => e.title.toLowerCase().includes(search) || e.title.toUpperCase().includes(search))
//     const router = useRouter()
//     const goto = () => {
//         router.push(creatable ? "/tasks/create" : "/discover/tasks")
//     }
//     return (
//         <>
//             <ContentListHeader creatable={creatable} search={search} setSearch={setSearch} goto={goto} />
//             <ContentList light={!creatable} list={tasksFiltered} Component={TaskTile} />
//         </>  
//     )
    
// }

// export default TasksPage