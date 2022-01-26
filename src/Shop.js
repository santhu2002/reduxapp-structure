import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { useSelector } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreators, dispatch)
  const {withdrawmoney,depositmoney} = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector(state => state.amount)
  return (
    <div className="container my-2">
      <h2>Deposite/Withdraw Money</h2>
      {/* <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawmoney(100)) }}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositmoney(100)) }}>+</button> */}
      <button className="btn btn-primary mx-2" onClick={() => {withdrawmoney(100)}}>-</button>
      Update Balance ({amount})
      <button className="btn btn-primary mx-2" onClick={() => {depositmoney(100)}}>+</button>
    </div>
  );
};

export default Shop;
