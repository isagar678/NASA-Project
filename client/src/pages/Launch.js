import { useMemo } from "react";
import { Appear, Button, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";

const Launch = (props) => {
  const selectorBody = useMemo(() => {
    if (!props.planets || props.planets.length === 0) {
      return <option disabled>No planets available</option>;
    }
    return props.planets.map((planet) => (
      <option value={planet.kepler_name} key={planet.kepler_name}>
        {planet.kepler_name}
      </option>
    ));
  }, [props.planets]);

  const today = new Date().toISOString().split("T")[0];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    try {
      props.submitLaunch(event);
    } catch (error) {
      console.error("Launch submission failed:", error);
    }
  };

  return (
    <Appear id="launch" animate show={props.entered}>
      <Paragraph>
        Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets.
      </Paragraph>
      <Paragraph>
        Only confirmed planets matching the following criteria are available for the earliest scheduled missions:
      </Paragraph>
      <ul>
        <li>Planetary radius &lt; 1.6 times Earth's radius</li>
        <li>
          Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11 times Earth's value
        </li>
      </ul>

      <form
        onSubmit={handleFormSubmit}
        className="launch-form"
      >
        <label htmlFor="launch-day">Launch Date</label>
        <input
          type="date"
          id="launch-day"
          name="launch-day"
          min={today}
          max="2040-12-31"
          defaultValue={today}
          required
        />

        <label htmlFor="mission-name">Mission Name</label>
        <input
          type="text"
          id="mission-name"
          name="mission-name"
          required
          minLength="3"
        />

        <label htmlFor="rocket-name">Rocket Type</label>
        <input
          type="text"
          id="rocket-name"
          name="rocket-name"
          defaultValue="Explorer IS1"
          required
        />

        <label htmlFor="planets-selector">Destination Exoplanet</label>
        <select id="planets-selector" name="planets-selector" required>
          {selectorBody}
        </select>

        <Clickable key="launch-clickable">
          <Button
            animate
            show={props.entered}
            type="submit"
            layer="success"
            disabled={props.isPendingLaunch}
          >
            Launch Mission ✔
          </Button>
        </Clickable>

        {props.isPendingLaunch && <Loading animate small />}
      </form>
    </Appear>
  );
};

export default Launch;
