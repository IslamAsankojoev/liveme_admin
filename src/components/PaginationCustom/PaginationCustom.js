import { Pagination} from "react-admin";

const PaginationCustom = props => <Pagination rowsPerPageOptions={[1]} {...props} />;

export default  PaginationCustom;