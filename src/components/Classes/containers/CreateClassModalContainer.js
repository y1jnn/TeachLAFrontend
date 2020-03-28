import CreateClassModal from "../components/CreateClassModal.js";
import { connect } from "react-redux";
import { addClass } from "../../../actions/classesActions";

const mapStateToProps = state => {
  return {
    uid: state.userData.uid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addClass: (classKey, data) => dispatch(addClass(classKey, data)),
  };
};

const CreateClassModalContainer = connect(mapStateToProps, mapDispatchToProps)(CreateClassModal);

export default CreateClassModalContainer;