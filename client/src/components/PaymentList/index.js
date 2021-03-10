import React from "react";
import PaymentListItem from "../PaymentListItem";

export default function PaymentList(props) {
    var roomies = [];

    const cleanData = (data) => {
        var roomObj = {};

        for( var i=0; i< data.expenses.length; i++) {
            let key = data.expenses[i].paidBy;
            let amount =0;
            for (var j=0; j< data.expenses.length; j++) {
                if (data.expenses[j].paid === true && data.expenses[j].paidBy === key) {
                    amount += parseInt(data.expenses[j].expenseAmount);
                }   
            }
            
            if(key !== "0" && key !== "") {
                roomObj[key] = amount;
                roomies.push(roomObj);
            }
        }    
    }

    cleanData(props.data);

    return (
        <div className="d-flex justify-content-center border">
                <PaymentListItem name={roomies} />
        </div>
    )
}