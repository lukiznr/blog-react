import { useParams, useNavigate } from "react-router-dom";
import data from "./data.json";
export default function Blog() {
  let param = useParams();
  const id = param.id;
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
      <div className="blog">
      <h1>{data[id].Title}</h1>
      <p>{data[id].Date}</p>
      <p className="content">{data[id].Description}</p>
        </div>
    </>
  );
}
