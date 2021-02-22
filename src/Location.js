import { findRenderedDOMComponentWithClass } from "react-dom/test-utils"

export const Location = ({ location }) => (
    <div>
      <p>{location.name}</p>
      <p>Working hours</p>
      <ul>
        {location.openHours.map((day) => (
          <li>
            <span>{day.dayName} </span>
            {!day.dayOff ? <span>{`${day.startTime} - ${day.endTime}`}</span> : <span>NOT WORKING</span>}
          </li>
        ))}
      </ul>
    </div>
)
// We make new const Location, with single properties, which we pass down, also,
// I wanted to use ternary operator as it was the main challenge in this task
// Using span instead of paragraph, even though we could get same results in a lot of other different ways

export default Location;