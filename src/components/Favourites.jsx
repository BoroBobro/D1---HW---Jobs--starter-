import { useSelector } from "react-redux";

const Favourites = () => {
  const companies = useSelector(state => state.favourites.companies);

  return (
    <div>
      <h2>Aziende preferite</h2>
      <ul>
        {companies.map((company, idx) => (
          <li key={idx}>
            {company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;