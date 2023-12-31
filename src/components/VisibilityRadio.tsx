import { Visibility } from "../types"

interface VisibilityRadioProps {
    setNewVisibility: React.Dispatch<React.SetStateAction<Visibility>>
}

const VisibilityRadio = (props: VisibilityRadioProps) => {
    const { setNewVisibility } = props


    return (
        <fieldset>
            <legend>Select Visibility:</legend>
            <div>
                <input type="radio" id="great" name="visibility" value={Visibility.Great} defaultChecked onChange={() => setNewVisibility(Visibility.Great)} /> 
                <label htmlFor="great">Great</label>

                <input type="radio" id="good" name="visibility" value='good' onChange={() => setNewVisibility(Visibility.Good)} /> 
                <label htmlFor="good">Good</label>

                <input type="radio" id="ok" name="visibility" value='ok' onChange={() => setNewVisibility(Visibility.Ok)} /> 
                <label htmlFor="ok">Ok</label>

                <input type="radio" id="poor" name="visibility" value='poor' onChange={() => setNewVisibility(Visibility.Poor)} /> 
                <label htmlFor="poor">Poor</label>
            </div>
        </fieldset>
    )
}

export default VisibilityRadio;