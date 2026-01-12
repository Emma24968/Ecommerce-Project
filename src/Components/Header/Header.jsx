import { SearchBar } from "./SearchBar"

export const Header = ({search,onSearch,count})=>{
    return <>
        <SearchBar search={search} onSearch={onSearch} count={count}/>
    </>
}