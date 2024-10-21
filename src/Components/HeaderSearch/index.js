import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";
const HeaderSearch = () => {
  return (
    <>
      {/* Header Search bar starts here*/}
      <div className="headerSearch ml-3 mr-3">
        <input type="text" placeholder="Search for Product.." />
        <Button>
          <FaSearch />
        </Button>
      </div>
      {/* Header Search bar ends here */}
    </>
  );
};
export default HeaderSearch;
