import { SearchBar } from "./SearchBar"

export const Header = ({search,onSearch})=>{
    return <>
        <SearchBar search={search} onSearch={onSearch}/>
    </>
}