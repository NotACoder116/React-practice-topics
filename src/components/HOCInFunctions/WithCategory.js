export const WithCategory = (limit) => {
    return (WrappedComponent) => {
        let categories = ['c1', 'c2', 'c3'];
        categories = categories.slice(0, limit);
        return (props) => {
            return <>
            Hello from With Category
            <WrappedComponent {...props} categories={categories}/>
            </>
        }
    }
}