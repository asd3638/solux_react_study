function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            <h1>
                합성 vs 상속
            </h1>
            {props.children}
        </div>
    )
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h2>
                {props.title}
            </h2>
            <p>
                {props.message}
            </p>
        </FancyBorder>
    )
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for inviting our spacecraft!"
        />
    )
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}
function Contacts() {
    return (
        <div>
            This is CONTACTS
        </div>
    )
}

function Chat() {
    return (
        <div>
            This is CHAT
        </div>
    )
}

function App() {
    return (
        <SplitPane
            left={
                <Contacts/>
            }
            right={
                <Chat/>
            }
        />
    )
}

export default WelcomeDialog;