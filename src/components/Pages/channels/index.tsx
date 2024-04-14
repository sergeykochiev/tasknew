// "use client"

// import ChannelScruct from "@/common/types/data-sctructures/channel"
// import ContentListHeader from "@/components/ContentList/header"
// import ContentList from "@/components/ContentList/list"
// import ChannelTile from "@/components/Tile/Channel"
// import { useRouter } from "next/navigation"
// import { FC, useState } from "react"

// const ChannelsPage: FC<{ channels: Array<ChannelScruct>, creatable: boolean }> = ({ channels, creatable }) => {
//     const [search, setSearch] = useState<string>("")
//     const channelsFiltered = channels.filter(e => e.label.toLowerCase().includes(search) || e.label.toUpperCase().includes(search))
//     const router = useRouter()
//     const goto = () => {
//         router.push(creatable ? "/channels/create" : "/discover/channels")
//     }
//     return (
//         <>
//             <ContentListHeader creatable={creatable} search={search} setSearch={setSearch} goto={goto} />
//             <ContentList light={!creatable} list={channelsFiltered} Component={ChannelTile} />
//         </>  
//     )
    
// }

// export default ChannelsPage