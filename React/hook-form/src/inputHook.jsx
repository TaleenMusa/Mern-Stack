
const inputHook = ({label}) => {

    const [value, setValue] = useState('')
    return (
        <p>{label}:<input type="text" onChange={e=>setValue(e.target.value)}/></p>
    )
}