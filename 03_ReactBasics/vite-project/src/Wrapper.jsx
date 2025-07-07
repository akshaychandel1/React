function Wrapper({children,color="green"}) {
    return(
        <>
        <div style={{color:color, border: "5px solid green", padding: "20px",margin:"10px"}}>
        {children}
        </div>
        </>
    )
}

export default Wrapper