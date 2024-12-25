import { connect } from "react-redux";
import { setVisibilityFilter } from "../redux/actions/ListActions";
import FilterBtns from "../components/FilterBtns";
let mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter,
    };
};
let mapDispathToProps = (dispatch) => {
    return {
        changeFilter: (filter) => {
            dispatch(setVisibilityFilter(filter));
        },
    };
};
const FilterBtnsContainer = connect(
    mapStateToProps,
    mapDispathToProps
)(FilterBtns);
export default FilterBtnsContainer;
