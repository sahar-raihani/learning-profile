function ProgressBar({percent}) {
    return (
        <div style={{background: "#ddd", borderRadius: "6px" }}>
            <div
                style={{
                    width: `${percent}%`,
                    background: "#4caf50",
                    color: "white",
                    padding: "4px",
                    borderRadius: "6px",
                    textAlign: "center"
                }}
            >
                {percent}%
            </div>
        </div>
    )
}

export default ProgressBar;