interface NotificationProps {
    message: string
}

const Notification = (props: NotificationProps)  => {
    const { message } = props;

    if (message) {
        return (
            <p style={{color:"red"}}>{message}</p>
        )
    } else {
        return <></>
    }
}

export default Notification