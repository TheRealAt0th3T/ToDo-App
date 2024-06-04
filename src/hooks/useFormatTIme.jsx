const useFormatTime = (strTime) => {
    var strSplitDate = String(strTime).split(' ');
    var time = new Date(strSplitDate[0]);
    //alert(date);
    var HH = time.getHours();
    var MM = time.getMinutes();

    var XM = HH >=12 ? 'PM' : 'AM';
    HH = HH > 12 ? HH-12 : HH;
   
    time =  HH + ":" + MM + " " + XM;
    return time.toString();
};

export default useFormatTime;
