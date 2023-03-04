import { WithCategory } from "./WithCategory"

const ParentCategory = ({name, categories}) => {
    return <>
    <h1>From parent Category - name ={name}</h1>
    {categories.map((eachCategory, index) => {
        return <p key={index}>{eachCategory}</p>
    })}
    </>
}

export default WithCategory(2)(ParentCategory);