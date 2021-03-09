import React, { useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../utils/API";
import { useExpenseContext } from "../utils/GlobalState";
import { ADD_EXPENSE, DELETE_EXPENSE, GET_EXPENSES } from "../utils/actions";
import "./style.css";
import  ExpenseTableRow  from "../components/ExpenseTableRows";
import { RadialChart, XAxis, XYPlot, YAxis, VerticalBarSeries, LabelSeries } from "react-vis";
import PaymentList from "../components/PaymentList";
import AuthService from "../services/auth.service";



const Budget = () => {
    const expnameRef = useRef();
    const expamtRef = useRef();
    const exptypeRef = useRef();
    const paid = useRef();
    const paidBy = useRef();
    const currentUser = AuthService.getCurrentUser();
    
    
    const [state, dispatch] = useExpenseContext();
    

    const sortExpenses = (data) => {
        data.sort(function (a, b) {
            return b.expenseAmount - a.expenseAmount;
        });
    }
    
    const getHomeId = () => {
        const HomeId = currentUser.id;
        return HomeId;
    }

    let HomeId = getHomeId();
    // console.log(HomeId);


    const getExpenses = (data) => {
        let id = data;
        console.log(id);

        API.getExpenses(id)
        .then(results => {
            sortExpenses(results.data)
            dispatch({
                type: GET_EXPENSES,
                expenses: results.data
            });
            
            // console.log(state);
        })
        
    }

    useEffect (() => {
        getExpenses(HomeId);
    }, []);

    
    
    const pieDataFormat = (data) => {
        
        let rentSum = 0;
        let utilitiesSum = 0;
        let otherSum = 0;

        for (var i = 0; i < data.expenses.length; i++) {
            if (data.expenses[i].expenseType == "rent") {
                rentSum += parseInt(data.expenses[i].expenseAmount);
            } else if (data.expenses[i].expenseType == "utilities") {
                utilitiesSum += parseInt(data.expenses[i].expenseAmount);
            } else {
                otherSum += parseInt(data.expenses[i].expenseAmount);
            }
        }

        // console.log(utilitiesSum);
        const pieChart = [];
        pieChart.push({angle: rentSum, label: rentSum});
        pieChart.push({angle: utilitiesSum, label: utilitiesSum});
        pieChart.push({angle: otherSum, label: otherSum});
        return pieChart;
    }

    const barDataFormat = (data) => {
        let rentOwed = 0;
        let rentPaid = 0;
        let utilitiesOwed = 0;
        let utilitiesPaid = 0;
        let otherOwed = 0;
        let otherPaid = 0;

        for (var i=0; i < data.expenses.length; i++) {
            if (data.expenses[i].expenseType == "rent") {
                rentOwed += parseInt(data.expenses[i].expenseAmount);
                if (data.expenses[i].paid === true) {
                    rentPaid += parseInt(data.expenses[i].expenseAmount);
                }
            } else if (data.expenses[i].expenseType == "utilities") {
                utilitiesOwed += parseInt(data.expenses[i].expenseAmount);
                if (data.expenses[i].paid === true) {
                    utilitiesPaid += parseInt(data.expenses[i].expenseAmount);
                }
            } else {
                otherOwed += parseInt(data.expenses[i].expenseAmount);
                if (data.expenses[i].paid === true) {
                    otherPaid += parseInt(data.expenses[i].expenseAmount);
                }
            }

            
        }

        let totalOwed = [{x: "Rent", y: rentOwed}, {x: "Utilities", y: utilitiesOwed}, {x: "Other", y: otherOwed}];
        let totalPaid = [{x: "Rent", y: rentPaid}, {x: "Utilities", y: utilitiesPaid}, {x: "Other", y: otherPaid}];
        let exportedData = {totalOwed: totalOwed, totalPaid: totalPaid};

        

        return exportedData;
    }
    
    const barLabelData = (data) => {
        let totalOwed = data.totalOwed;
        let totalPaid = data.totalPaid;
        let labelData = totalOwed.map ((d, idx) => ({
            x:d.x,
            y: Math.max(totalOwed[idx].y, totalPaid[idx].y)
        }));

        return labelData
    }


    const addExpense = () => {
        
        
        let newExpense = {
            expenseName: expnameRef.current.value,
            expenseAmount: expamtRef.current.value,
            expenseType: exptypeRef.current.value,
            paid: paid.current.checked,
            paidBy: paidBy.current.value,
            expenseDate: Date.now(),
            HomeId: currentUser.id
        }
        // console.log(newExpense);
        API.addExpense(newExpense);
    };

    
    // console.log(state);
    
    const pieData = pieDataFormat(state);
    const barData = barDataFormat(state);
    const barLabels = barLabelData(barData); 
    // console.log(barData);
    // console.log(barLabels);

    let labelData = barLabels;


    return (
            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="col md-12">
                        <h1>Overall Roommate Budget Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="card col-md-5">
                        <h2>Total Budget</h2>
                        <div className="row justify-content-center my-4">
                            <div className="col-8 chart">
                                <RadialChart
                                data={pieData}
                                showLabels={true}
                                labelsRadiusMultiplier={1.4}
                                radius={125}
                                labelsStyle={{backgroundColor: "#ffffff" }}
                                width={300}
                                height={300} />
                            </div>
                            <div className="col-4">
                                <h4>Breakdown of Expenses:</h4>
                                <div className="card">
                                    <h6>Total Rent:   <span><img src="/assets/Rent.png" alt="rent slice color"></img></span></h6>
                                    <h6>Total Utilities:   <span><img src="/assets/Utilities.png" alt="utilities slice color"></img></span></h6>
                                    <h6>Total Other Expenses:   <span><img src="/assets/Other.png" alt="rent slice color"></img></span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-5">
                        <h2>Roommate Budget and Payments</h2>
                        <div className="row">
                            <div className="col-md-8">
                            <XYPlot xType="ordinal" height={400} width={350} xDistance={100}>
                                <XAxis />
                                <YAxis />
                                <VerticalBarSeries className="vertical-bar-series-example" data={barData.totalOwed} />
                                <VerticalBarSeries className="vertical-bar-series-example" data={barData.totalPaid} />
                                <LabelSeries data={labelData} getLabel={d => d.x} />
                            </XYPlot>
                            </div>
                            <div className="col-md-4">
                                <h4>Breakdown of Payments:</h4>
                                <div className="card">
                                    <h6>Paid:   <span><img src="/assets/Rent.png" alt="rent slice color"></img></span></h6>
                                    <h6>Total:   <span><img src="/assets/Utilities.png" alt="utilities slice color"></img></span></h6>
                                </div>
                                <br />
                                <div>
                                    <h4>Sum of Roommate Payments:</h4>
                                        <PaymentList data={state} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="card col-md-10" id="bottomcard">
                        <h2>Expense Management:</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Add New Expense:</h3>
                                <form className="form-group" onSubmit={addExpense}>
                                    <input className="form-control mb-5" required ref={expnameRef} placeholder="Name of Expense"/>
                                    <input className="form-control mb-5" required ref={expamtRef} placeholder="Expense Amount" />
                                    <input className="form-control mb-5" required ref={exptypeRef} placeholder="Expense Type, enter Rent, Utilities, or Other" />
                                    <label className="label">Paid?<span><input type="checkbox" className="form-control mb-5" ref={paid} /></span></label>
                                    <input className="form-control mb-5" ref={paidBy} placeholder="Paid by ..." />
                                    <button className="btn btn-success mt-3 mb-5" type="submit">Save Expense</button>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <h3>Largest Expenses:</h3>
                                <table border="1" style={{width: "80%", textAlign: "center"}}>                           
                                    <tr>
                                        <th>Expense Name</th>
                                        <th>Expense Amount</th>
                                        <th>Expense Type</th>
                                        <th>Expense Paid?</th>
                                        <th>Expense Paid By</th>
                                    </tr>
                                    {state.expenses.map(expense => (
                                        <ExpenseTableRow  expenseName={expense.expenseName} expenseAmount={expense.expenseAmount} expenseType={expense.expenseType} paid={expense.paid} paidBy={expense.paidBy} /> 
                                    ))}
                                        
                                    
                                </table>                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Budget;