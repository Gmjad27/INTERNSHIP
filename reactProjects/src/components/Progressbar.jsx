function Progressbar(props) {
    return (
        <>
            <div className="lanName">

                <label style={{ color: props.color }}>{props.label}</label>
                <label>{props.skill}</label>
            </div>
            <div className="proBar">
                <div className="progress" style={{
                    width: props.skill,

                }}></div>
            </div>
        </>
    )
}


export default Progressbar