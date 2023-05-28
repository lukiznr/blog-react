import data from "./data.json";
import { useNavigate } from "react-router-dom";
export default function Index() {
  const navigate = useNavigate();
  return (
    <>
      {data.map((data, index) => (
        <div
          className="list"
          onClick={() => {
            navigate(`/${index}`);
          }}
        >
          <h2>{data.Title}</h2>
          <p>{data.Date}</p>
          <p>{data.Description}</p>
        </div>
      ))}
    </>
  );
}
