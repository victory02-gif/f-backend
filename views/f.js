document.addEventListener('click',(e)=>{
    const target=e.target.closest('[data-page]');
        if(target){
            if(target.dataset.page==='signIn'){
                document.startViewTransition(()=>{
                    signIn();
                });
                
            };
        };
});
//get data
const COLOR='color';
const allData=JSON.parse(localStorage.getItem(COLOR));
const dataStored=[];
if(allData){
    allData.forEach(e => {
        dataStored.push(e);
    });
};
const USER='user';
//track
const trackBtw=document.querySelector('.track-btw').addEventListener('click',()=>{trackID();});
function trackID(){
    const idInput=document.querySelector('.tracking-in').value.trim();
        if(dataStored&&dataStored.length!==0){
            getTrackingDetails(dataStored, idInput);
        }else{
            const trackingPageHead=document.querySelector('.main-head0').style.display='none';
            const trackingPageAlart=document.querySelector('.tracking-alert-box').style.display='block';
                return;
        }
};
function getTrackingDetails(d, iN){
    const data=d;
    const Tinput=iN;
    let count=0;
    if(Tinput){ 
        data.forEach(e=>{
            if(e.id===Tinput){
                document.startViewTransition(()=>{
                    displayTDetails(e);
                });
                pState(e);
            }else{
                count++
            }
            if(count===data.length){
                const trackingPageHead=document.querySelector('.main-head0').style.display='none';
                const trackingPageAlart=document.querySelector('.tracking-alert-box').style.display='block';
                return
            };
        });
    };
};
function displayTDetails(d){
    const data=d;
    const trackingIDText=data.id;
    const fromCityText=data.senderDetails.city;
    const fromCityDateText=data.senderDetails.date;
    const fromCityTimeText=data.senderDetails.time;
    const receivedBFCityText=data.receiversCompanyDetails.city;
    const receivedBFDateText=data.receiversCompanyDetails.date;
    const receivedBFTimeText=data.receiversCompanyDetails.time;
    const receivedBFDayText=data.receiversCompanyDetails.day;
    const receivedBFDepationTimeText=data.receiversCompanyDetails.depationDateAndTime.time;
    const receivedBFDepationDayText=data.receiversCompanyDetails.depationDateAndTime.day;
    const customsCityText=data.customesDetails.city;
    const customsDateText=data.customesDetails.data;
    const customsTimeText=data.customesDetails.time;
    const customsDayText=data.customesDetails.day;
    const toCityText=data.clDetails.address;
    const toTimeRecivedDateText=data.clDetails.packageRecivedDAndT;
    const packageWeightText=data.packageDetails.weight;
    const packagePiecesText=data.packageDetails.pieces;
    const packageTotalWeightText=data.packageDetails.totalWeight;
    const travelFTimeShippedText=receivedBFTimeText;
    const travelFDayDateArrivedText=`${receivedBFDayText}, ${receivedBFDateText}`;
    const travelFArrivedLocationCityText=`FEDEX SMARTPOST ${receivedBFCityText.toLocaleUpperCase()}`;
    const travelFTimeArrivedText=receivedBFTimeText;
    const travelFDepationLocationCityText=travelFArrivedLocationCityText;
    const travelFDepationTimeText=receivedBFDepationTimeText;
    const travelFDayDateDepationText=`${receivedBFDepationDayText}, ${receivedBFDepationTimeText}`;
    const customsOfficeArrivedLocationText=`CUSTOMS OFFICE ${customsCityText.toLocaleUpperCase()}`;
    const customsOfficeArrivedTimeText=customsTimeText;
    const customsOfficeDayDateArrivedText=`${customsDayText}, ${customsDateText}`;
    //tracking id
    const trackingIDDisplay=document.querySelector('.tracking-id-text').textContent=trackingIDText;
    //
    const trackingPage=document.querySelector('.track-home-page').style.display='none';
    const trackingNextPage=document.querySelector('.tracking-body').style.display='block';
    //t animation
    const fromCity=document.querySelector('.from-body-from-text').textContent=fromCityText;
    const fromDate=document.querySelector('.from-body-date-text').textContent=fromCityDateText;
    //RECEIVED BY FEDEX
    const receivedBFCity=document.querySelector('.pReceved-body-pReceved-text').textContent=receivedBFCityText;
    const receivedBFDate=document.querySelector('.pReceved-body-date-text').textContent=receivedBFDateText;
    //CUSTOMS CLEARNCE
    const customsCity=document.querySelector('.customs-body-location-text').textContent=customsCityText;
    const customsDate=document.querySelector('.customs-body-date-text').textContent=customsDateText;
    //TO
    const toCity=document.querySelector('.to-body-loctaion-text').textContent=toCityText;
    const toTimeRecivedDate=document.querySelector('.to-body-date-text').textContent=toTimeRecivedDateText;
    //Shipment facts
    const trackingID=document.querySelector('.overview-tracking-number-text').textContent=trackingIDText;
    const shipmentDate=document.querySelector('.overview-ship-date-text').textContent=receivedBFDate;
    const shipmentDepationDate=document.querySelector('.overview-standard-transit-text').textContent=`${receivedBFDepationDayText}, ${receivedBFDepationTimeText}`;
    //Package details
    const packageWeight=document.querySelector('.package-weight-text').textContent=packageWeightText;
    const packagePieces=document.querySelector('.package-pieces-text').textContent=packagePiecesText;
    const packageTotalWeight=document.querySelector('.package-total-weight-text').textContent=packageTotalWeightText;
    //Travel history
    const travelFTimeShipped=document.querySelector('.main-travel-time').textContent=travelFTimeShippedText;
    const travelFDayDateArrived=document.querySelector('.travel-arrived-day-time').textContent=travelFDayDateArrivedText;
    const travelFArrivedLocationCity=document.querySelector('.travel-arrived-place-location').textContent=travelFArrivedLocationCityText;
    const travelFTimeArrived=document.querySelector('.travel-arrived-location-time').textContent=receivedBFTimeText;
    const travelFDepationLocationCity=document.querySelector('.travel-departed-place-location').textContent=travelFArrivedLocationCityText;
    const travelFDepationTime=document.querySelector('.travel-departed-location-time').textContent=travelFDepationTimeText;
    const travelFDayDateDepation=document.querySelector('.travel-departed-day-time').textContent=travelFDayDateDepationText;
    //CUSTOMS
    const customsOfficeArrivedLocation=document.querySelector('.customes-arrived-place-location').textContent=customsOfficeArrivedLocationText;
    const customsOfficeArrivedTime=document.querySelector('.customes-arrived-location-time').textContent=customsOfficeArrivedTimeText;
    const customsOfficeDayDateArrived=document.querySelector('.customes-arrived-day-time').textContent=customsOfficeDayDateArrivedText;
    //dateValidation();
};
function pState(d){
    const dataDay=Number(d.customesDetails.date.split('/')[0]);
    const dataMonth=Number(d.customesDetails.date.split('/')[1]);
    const newDateDay=new Date().getDate();
    const newDateMonth=new Date().getMonth()+1;
        if(dataMonth!==newDateMonth){
            if(dataMonth<newDateMonth){
                deliveryDelayed();
            }
        }
        if(newDateDay!==31&&dataDay!==31){
            if(newDateDay>dataDay){
                deliveryDelayed(); 
            }else if(dataDay===newDateDay){
                deliveryDelayed();
            }
        }    
};
function signIn(){
    const data=JSON.parse(localStorage.getItem(USER));
    if(data){
        if(data.id==='1234'&&data.p==='chizzy'){
            document.startViewTransition(()=>{
                user();
                return;
            });
        }else{
            const trackingPage=document.querySelector('.track-home-page').style.display='none';
            const trackingNextPage=document.querySelector('.tracking-body').style.display='none';
            const userPage=document.querySelector('.user-page').style.display='none';
            const signInPage=document.querySelector('.login-page').style.display='block';
        }
    }else{
        const trackingPage=document.querySelector('.track-home-page').style.display='none';
        const trackingNextPage=document.querySelector('.tracking-body').style.display='none';
        const userPage=document.querySelector('.user-page').style.display='none';
        const signInPage=document.querySelector('.login-page').style.display='block';
    }
};
const loginBtw=document.querySelector('.login-btw').addEventListener('click',()=>{
    login();
});
function login(){
    const userID=document.querySelector('.user-id').value;
    const userPassword=document.querySelector('.user-password').value;
        if(userID==='1234'&&userPassword==='chizzy'){
            document.startViewTransition(()=>{
                user();
            });
            const passChecked=document.querySelector('.remember-check-box').checked;
            passChecked? saveLoginInfor(userID, userPassword) : null;
        }else{
            const loginBox=document.querySelector('.login-content-box').style.display='none';
            const errorPage=document.querySelector('.login-error-box').style.display='block';
        }
};
function saveLoginInfor(uID, uP){
    const userData={id:uID, p:uP};
    localStorage.setItem(USER, JSON.stringify(userData));
}
function user(){
    const trackingPage=document.querySelector('.track-home-page').style.display='none';
    const trackingNextPage=document.querySelector('.tracking-body').style.display='none';
    const signInPage=document.querySelector('.login-page').style.display='none';
    const userPage=document.querySelector('.user-page').style.display='block';
    const GreatText=document.querySelector('.u-s-t').textContent='Welcome';
}
function deliveryDelayed(){
    const deliveryStatuesText=document.querySelector('.delivery-status0-text');
    const deliveryStatuesIconTrue=document.querySelector('.d-a-i');
    const deliveryStatuesIconFalse=document.querySelector('.d-i');
    const deliveryStatuesBar=document.querySelector('.tracking-animation-bar0');
    const deliveryStatuesBarIconTrue=document.querySelector('.i-i');
    const deliveryStatuesBarIconFalse=document.querySelector('.a-i');
    const deliveryStatuesTransmitTrue=document.querySelector('.intransit-box');
    const deliveryStatuesTransmitFalse=document.querySelector('.customs-box');
    const deliveryAlartText=document.querySelector('.delivery-messege-alert');
    const customsTextDetails=document.querySelector('.travel-customes');
    const dST='Clearance Delay';
    deliveryStatuesText.textContent=dST;
    deliveryStatuesIconTrue.style.display='none';
    deliveryStatuesIconFalse.style.display='block';
    deliveryStatuesBar.style.backgroundColor='red';
    deliveryStatuesBarIconTrue.style.display='none';
    deliveryStatuesBarIconFalse.style.display='block';
    deliveryStatuesTransmitTrue.style.display='none';
    deliveryStatuesTransmitFalse.style.display='block';
    deliveryAlartText.style.display='block';
    customsTextDetails.style.display='block';
};
let shipmentDetailsPass=true;
const shipmentDetails=document.querySelector('.shipment-facts');
shipmentDetails.addEventListener('click',()=>{
    const details=document.querySelector('.shipment-facts-content');
    const shipmentDetailsIconDown=document.querySelector('.s-i-d');
    const shipmentDetailsIconUp=document.querySelector('.s-i-u');
        if(shipmentDetailsPass){
            details.style.display='block';
            shipmentDetailsIconDown.style.display='none';
            shipmentDetailsIconUp.style.display='block';
            shipmentDetails.style.borderBottom='1px solid';
                return shipmentDetailsPass=false;
        }else{
        details.style.display='none';
        shipmentDetailsIconUp.style.display='none';
        shipmentDetailsIconDown.style.display='block';
        shipmentDetails.style.borderBottom='none';
            return shipmentDetailsPass=true;
        };
});
let travelDetailsPass=true;
const travelDetails=document.querySelector('.travel-history');
    travelDetails.addEventListener('click',()=>{
        const travelDetailsIconDown=document.querySelector('.t-i-d');
        const travelDetailsIconUp=document.querySelector('.t-i-u');
        const details=document.querySelector('.travel-box');
        if(travelDetailsPass){
            details.style.display='block';
            travelDetailsIconDown.style.display='none';
            travelDetailsIconUp.style.display='block';
                return travelDetailsPass=false;
        }else{
        details.style.display='none';
        travelDetailsIconUp.style.display='none';
        travelDetailsIconDown.style.display='block';
            return travelDetailsPass=true;
        };
});
const getIDBtw=document.querySelector('.get-t-id').addEventListener('click',()=>{
    getTrackingID();
});
function getTrackingID(){
const senderDetails={
    city: document.querySelector('.from-in').value.trim(),
    date: document.querySelector('.from-date-in').value.trim(),
    time: document.querySelector('.from-time-in').value.trim()
};
const companyReceived={
    city: document.querySelector('.company-in').value.trim(),
    date: document.querySelector('.company-date-in').value.trim(),
    time: document.querySelector('.company-time-in').value.trim(),
    day:  document.querySelector('.company-day-in').value.trim(),
    depationTime:{
        day: document.querySelector('.company-d-day-in').value.trim(),
        time: document.querySelector('.company-d-time-in').value.trim()
    }
};
const clDetails={
    address: document.querySelector('.cl-in').value.trim(),
    packageRecivedDAndT: document.querySelector('.cl-date-in').value.trim()
};
const packageDetails={
    weight: document.querySelector('.package-weight-in').value.trim(),
    pieces: document.querySelector('.package-pieces-in').value.trim(),
    totalWeight: document.querySelector('.package-total-weight-in').value.trim()
};
const customesDetails={
    city: document.querySelector('.customes-in').value.trim(),
    date: document.querySelector('.customes-date-in').value.trim(),
    time: document.querySelector('.customes-time-in').value.trim(),
    day:  document.querySelector('.customes-day-in').value.trim(),
};
inPutValidation(senderDetails, companyReceived, clDetails, packageDetails, customesDetails)
};
function inPutValidation(sd, cr, cld, pd, cd){
   if(sd.city===''){
    alert('Sender city cant be empty');
    return
   };
   if(sd.date===''){
    alert('Sender date cant be empty');
    return
   };
   if(sd.time===''){
    alert('Sender time cant be empty');
    return
   };
   if(sd.time===''){
    alert('Sender time cant be empty');
    return
   };
   if(cr.city===''){
    alert('Company city cant be empty');
    return
   };
   if(cr.date===''){
    alert('Company date cant be empty');
    return
   };
   if(cr.time===''){
    alert('Company time cant be empty');
    return
   };
   if(cr.day===''){
    alert('Company day cant be empty');
    return
   };
   if(cr.depationTime.day===''){
    alert('depation day cant be empty');
    return
   };
   if(cr.depationTime.time===''){
    alert('depation time cant be empty');
    return
   };
   if(cld.address===''){
    alert('Cl address cant be empty');
    return
   };
   if(cld.packageRecivedDAndT===''){
    alert('Cl Package Recived date cant be empty');
    return
   };
   if(pd.weight===''){
    alert('Package Details weight cant be empty');
    return
   };
   if(pd.pieces===''){
    alert('Package Details pieces cant be empty');
    return
   };
   if(pd.totalWeight===''){
    alert('Package Details Total Weight cant be empty');
    return
   };
   if(cd.city===''){
    alert('Customes city cant be empty');
    return
   };
   if(cd.date===''){
    alert('Customes date cant be empty');
    return
   };
   if(cd.time===''){
    alert('Customes time cant be empty');
    return
   };
   if(cd.day===''){
    alert('Customes day cant be empty');
    return
   };
   getID(sd, cr, cld, pd, cd);
};
let tempDetails=null;
function getID(sd, cr, cld, pd, cd){
    const data=JSON.parse(localStorage.getItem(COLOR));
    let tempIDStored=[];
    if(data){
        data.forEach(e=>{
            tempIDStored.push(e.id);
        });
    }
    if(tempIDStored.length===20){
        alert('max id genarated');
        return;
    }
    let lastIDNum=null;
    do{
        lastIDNum=`98700436109${Math.floor(Math.random()*20)}`;
    }while((tempIDStored.length===0)? false: tempIDStored.includes(lastIDNum));
    const idDetails={
        senderDetails: { city: sd.city, date: sd.date, time: sd.time },
        receiversCompanyDetails: { city: cr.city, date: cr.date, time: cr.time, day:cr.day, depationDateAndTime: {time: cr.depationTime.time, day: cr.depationTime.day}},
        clDetails: {address: cld.address, packageRecivedDAndT: cld.packageRecivedDAndT },
        packageDetails: {weight: pd.weight, pieces: pd.pieces, totalWeight: pd.totalWeight},
        customesDetails: {city: cd.city, date: cd.date, time: cd.time, day: cd.day},
        id:lastIDNum
    };
    const idDisplay=document.querySelector('.generated-id-text').textContent=idDetails.id;
    return tempDetails=idDetails;
};
const saveIDBtw=document.querySelector('.save-t-id').addEventListener('click',()=>{
    if(tempDetails){
        saveID(tempDetails, COLOR);
    }
});

function saveID(data, COLOR){
    dataStored.push(data);
    localStorage.setItem(COLOR, JSON.stringify(dataStored));
    alert('ID Successfull Saved');
    return tempDetails=null;
}
function deleteID(d){
    const updatedData=[];
    const data=JSON.parse(localStorage.getItem(COLOR));
    data.forEach(e=>{ 
        if(e.id!==d){
            updatedData.push(e);
        };
    });
    localStorage.setItem(COLOR, JSON.stringify(updatedData));
    alert('Succesfully deleted ID');
}
if(dataStored){
    dataStored.forEach(e=>{
    idRender(e.id);
    });
};
function idRender(d){
    const data=d;
    const parentDiv=document.querySelector('.id-parentBody');
    const createChildDiv=document.createElement('div');
        createChildDiv.className='id-box';
    const divChild=document.createElement('h5');
       divChild.className='id-text';
       divChild.textContent=data;
    const divBtw=document.createElement('button');
        divBtw.className='id-delete-btw';
        divBtw.textContent='delete';
        divBtw.addEventListener('click',()=>{
            parentDiv.removeChild(createChildDiv);
            deleteID(data);
        });
        createChildDiv.append(divChild, divBtw);
        parentDiv.appendChild(createChildDiv);
}