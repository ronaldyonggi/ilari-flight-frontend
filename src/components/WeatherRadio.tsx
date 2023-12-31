import { Weather } from "../types";

interface WeatherRadioProps {
    setNewWeather: React.Dispatch<React.SetStateAction<Weather>>
}

const WeatherRadio = (props: WeatherRadioProps) => {
    const { setNewWeather } = props

    return (
        <fieldset>
            <legend>Select Weather:</legend>
            <div>
                <input type="radio" id="sunny" name="weather" value={Weather.Sunny} defaultChecked onChange={() => setNewWeather(Weather.Sunny)} /> 
                <label htmlFor="sunny">Sunny</label>

                <input type="radio" id="rainy" name="weather" value={Weather.Rainy} onChange={() => setNewWeather(Weather.Rainy)} /> 
                <label htmlFor="rainy">Rainy</label>

                <input type="radio" id="cloudy" name="weather" value={Weather.Cloudy} onChange={() => setNewWeather(Weather.Cloudy)} /> 
                <label htmlFor="cloudy">Cloudy</label>

                <input type="radio" id="stormy" name="weather" value={Weather.Stormy} onChange={() => setNewWeather(Weather.Stormy)} /> 
                <label htmlFor="stormy">Stormy</label>

                <input type="radio" id="windy" name="weather" value={Weather.Windy} onChange={() => setNewWeather(Weather.Windy)} /> 
                <label htmlFor="windy">Windy</label>

            </div>
        </fieldset>
    )
}

export default WeatherRadio;