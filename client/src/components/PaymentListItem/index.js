import React from "react";

export default function PaymentListItem(props) {
    let nam = {};
    nam = props.name[0];
    
    let names = 0;
    if (!nam) {
        var emptArr = [];
    } else {
        var namesArr = Object.keys(nam);
        var amountArr = Object.values(nam);
        names = namesArr.length;
    }
    
    // const amount = Object.values(props.name);
    // console.log(props.name);
    // console.log(namesArr);
    // console.log(amountArr);
    

    var output;


    if (names === 1){
        output = <h6>{namesArr[0]}: <span><p>${amountArr[0]}</p></span></h6>;
    } else if (names === 2) {
        output = 
            <div>
                <h6>{namesArr[0]}: <span><p>${amountArr[0]}</p></span></h6>
                <h6>{namesArr[1]}: <span><p>${amountArr[1]}</p></span></h6>
            </div>;
    } else if (names === 3) {
        output = 
            <div>
                <h6>{namesArr[0]}: <span><p>${amountArr[0]}</p></span></h6>
                <h6>{namesArr[1]}: <span><p>${amountArr[1]}</p></span></h6>
                <h6>{namesArr[2]}: <span><p>${amountArr[0]}</p></span></h6>
            </div>;
    } else if (names === 4) {
        output = 
            <div>
                <h6>{namesArr[0]}: <span><p>${amountArr[0]}</p></span></h6>
                <h6>{namesArr[1]}: <span><p>${amountArr[1]}</p></span></h6>
                <h6>{namesArr[2]}: <span><p>${amountArr[0]}</p></span></h6>
                <h6>{namesArr[3]}: <span><p>${amountArr[0]}</p></span></h6>
            </div>;
    } else {
        output = <h6>No Payments Yet</h6>;
    }

    console.log(output);

    return (
        <div>
            {output}
        </div>
    )
    
}