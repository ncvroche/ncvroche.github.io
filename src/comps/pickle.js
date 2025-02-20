import './pickle.css'
export default function pickle(pickle) {
    const darkness = pickle.pickle.value/10;
    return (
        <div className="pickleContainer">
            <div className="pickle" style={{backgroundColor: `rgba(0,0,0,${darkness})`}}>
                <div>{pickle.pickle.value}</div>
            </div>
        </div>
    )
}