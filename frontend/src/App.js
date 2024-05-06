import Pagination from "./comonents/pagination/Pagination";
import { useState } from "react";
import { data } from "./data/data";
import { paginate } from "./utils/paginate";

function App() {
  const [currentPageCount, setCurrentPageCount] = useState(0);
  const dataArr = paginate(data, currentPageCount, 2);

  const itemPageSize = 1;

  const handlePageChange = (page) => {
    setCurrentPageCount(page);
  };

  return (
    <div className="App">
      {dataArr.map((dataA) => (
        <div>
          <h1>{dataA.name}</h1>
          <span>{dataA.age}</span>
        </div>
      ))}
      <Pagination
        itemCount={2}
        pageSize={itemPageSize}
        onPageChange={handlePageChange}
        currentPage={currentPageCount}
      />
    </div>
  );
}

export default App;
