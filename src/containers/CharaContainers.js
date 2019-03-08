import { connect } from 'react-redux';
import ListChara from '../listChara';
import {fetchChara} from '../Action/CharaAction';

const mapStateToProps = (state) => (
  {
    data: state
  }
);

const mapDispatchToProps = (dispatch) => ({
  fetchChara: ()=>{
    dispatch(fetchChara())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListChara);
