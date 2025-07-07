function Props({user}) {

    return(
        <>
            <h1>Props</h1>

            <h3>Name is {user.name}</h3>
            <h3>Age is {user.age}</h3>
            <h3>Email is {user.email}</h3>
            {/* <h3>Name is {user2.name}</h3>
            <h3>Age is {user2.age}</h3>
            <h3>Email is {user2.email}</h3> */}

            <h2>Props are short for properties</h2>
            <h2>Props are used to pass data from parent to child component</h2>
            <h2>Props are read-only and cannot be modified by the child component</h2>
            <h2>Props can be used to pass data, functions, and components</h2>
            <h2>Props are used to make components reusable and dynamic</h2>

        </>
    )
}
export default Props;