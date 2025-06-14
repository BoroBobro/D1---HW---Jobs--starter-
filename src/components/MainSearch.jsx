import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite, setSearchResults } from "../redux/action/action";

const MainSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const jobs = useSelector(state => state.search.results)
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {

    e.preventDefault();

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     // setJobs(data);
    //     dispatch(setSearchResults(data))
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    dispatch(setSearchResults(baseEndpoint, query))
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Inserisci la chiave di ricerca e premi Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <div key={jobData._id} style={{display: "block"}}>
            <Job key={jobData._id} data={jobData} />
            {/* <button onClick={() => dispatch({type: "ADD_FAVOURITE_COMPANY", payload: jobData.company_name})} style={{background: "transparent", border: "none"}}>⭐</button> */}
            <button onClick={() => dispatch(addToFavourite(jobData.company_name))}>⭐</button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
