import { useMemo } from "react";
import { Appear, Table, Paragraph } from "arwes";
import PropTypes from "prop-types";

const History = (props) => {
  const tableBody = useMemo(() => {
    if (!props.launches || props.launches.length === 0) {
      return <tr><td colSpan="6">No data available</td></tr>;
    }
    return props.launches
      .filter((launch) => !launch.upcoming)
      .map((launch) => (
        <tr key={String(launch.flightNumber)}>
          <td>
            <span style={{ color: launch.success ? "greenyellow" : "red" }}>█</span>
          </td>
          <td>{launch.flightNumber}</td>
          <td>{new Date(launch.launchDate).toDateString()}</td>
          <td>{launch.mission}</td>
          <td>{launch.rocket}</td>
          <td>{launch.customers?.join(", ")}</td>
        </tr>
      ));
  }, [props.launches]);

  return (
    <article id="history">
      <Appear animate show={props.entered}>
        <Paragraph>History of mission launches including SpaceX launches starting from the year 2006.</Paragraph>
        <Table animate>
          <table style={{ tableLayout: "fixed" }}>
            <caption>History of SpaceX Mission Launches</caption>
            <thead>
              <tr>
                <th style={{ width: "2rem" }}></th>
                <th style={{ width: "3rem" }}>No.</th>
                <th style={{ width: "9rem" }}>Date</th>
                <th>Mission</th>
                <th style={{ width: "7rem" }}>Rocket</th>
                <th>Customers</th>
              </tr>
            </thead>
            <tbody>
              {tableBody}
            </tbody>
          </table>
        </Table>
      </Appear>
    </article>
  );
};

History.propTypes = {
  launches: PropTypes.arrayOf(
    PropTypes.shape({
      flightNumber: PropTypes.number.isRequired,
      launchDate: PropTypes.string.isRequired,
      mission: PropTypes.string.isRequired,
      rocket: PropTypes.string.isRequired,
      customers: PropTypes.arrayOf(PropTypes.string),
      upcoming: PropTypes.bool.isRequired,
      success: PropTypes.bool.isRequired,
    })
  ),
  entered: PropTypes.bool,
};

export default History;
