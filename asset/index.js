let DateInput=document.querySelector('#date');
let SubmitButton=document.querySelector('#submit_holiday');


const CalulateDate=(InputDate,CurrentDate)=>{

    let TwoDateTimes=InputDate.getTime()-CurrentDate.getTime();
    let TotalDaysDifference=Number.parseInt(Math.abs(TwoDateTimes/(1000 * 3600 * 24)));
    
    let ConvertIntoHour=TotalDaysDifference*24;


    return {
        TotalDaysDifference,
        ConvertIntoHour
    }
}

const HandleSubmitButton=e=>{
    e.preventDefault();
    let InputDate=new Date(DateInput.value);
    let BookedWrapper=document.querySelector(".booked");
    BookedWrapper.innerHTML="";
    if(InputDate!="Invalid Date"){
        let CurrentDate=new Date();
   
        const {TotalDaysDifference,ConvertIntoHour}=CalulateDate(InputDate,CurrentDate);
    
    
        let HTML=`
        <p>Your Holiday Boooked</p>
        <p>Enjoy Your Holiday After <span>${ConvertIntoHour} hours</span> - After <span>${TotalDaysDifference} days</span></p>
    
        `
    
    
        BookedWrapper.insertAdjacentHTML('beforeend',HTML);
    }else{
        BookedWrapper.insertAdjacentHTML('beforeend','<p>Invalid Date</p>');
    }

}

SubmitButton.addEventListener("click",  HandleSubmitButton)