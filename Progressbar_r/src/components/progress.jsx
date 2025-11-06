export default function Progressbar(props) {
    return (
        <>
            <div className="lanName">

                <div className="skills"><span>{props.label}</span> <span>{props.skill}</span></div>

            </div>
            <div className="proBar">
                <div className="progress" style={{width:props.skill}}></div>
            </div>
        </>
    )
}