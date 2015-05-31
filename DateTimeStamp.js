// --------------------------------------------------------------------------------
//           Class: DateTimeStamp
//          Author: Cfizz, Create Date: 2014-02-14, 
//  Source Control: git.
//         Purpose: Get / Set DateTime stamping for a Process...
//         Methods: Get        - instance of DateTime stamp
//                  Set        - instance of DateTime stamp
//                  AddSeconds - takes (seconds, callback) to reset DateTime.
// --------------------------------------------------------------------------------
function DateTimeStamp () {
    this.datetime = new Date();
    this.sDateTime = '';
    this.DateDelim = '/';
    this.TimeDelim = ':';
    this.Seperator = ' ';
}

DateTimeStamp.prototype = {
    constructor: DateTimeStamp,
    setDateDelim:function (Parm)  {
        this.DateDelim = Parm;
    },
    setTimeDelim:function (Parm)  {
        this.TimeDelim = Parm;
    },
    setSeperator:function (Parm)  {
        this.Seperator = Parm;
    },
    getDateTime:function ()  {
        return this.sDateTime;
    },
    setDateTime:function ()  {
        var iYrs = String(this.datetime.getFullYear());
        var iMth = String(this.datetime.getMonth() + 1);
        var iDay = String(this.datetime.getDate());
        var iHrs = String(this.datetime.getHours());
        var iMns = String(this.datetime.getMinutes());
        var iScs = String(this.datetime.getSeconds());
        var iMsc = String(this.datetime.getMilliseconds());
        iMth.length < 2 ? iMth = '0' + iMth: iMth = iMth;
        iDay.length < 2 ? iDay = '0' + iDay: iDay = iDay;
        iHrs.length < 2 ? iHrs = '0' + iHrs: iHrs = iHrs;
        iMns.length < 2 ? iMns = '0' + iMns: iMns = iMns;
        iScs.length < 2 ? iScs = '0' + iScs: iScs = iScs;
        iMsc.length < 3 ? iMsc = '0' + iMsc: iMsc = iMsc;
        iMsc.length < 3 ? iMsc = '0' + iMsc: iMsc = iMsc;
        this.sDateTime = iYrs + this.DateDelim +
                         iMth + this.DateDelim +
                         iDay + this.Seperator +
                         iHrs + this.TimeDelim +
                         iMns + this.TimeDelim +
                         iScs + this.TimeDelim + iMsc;
    },
    AddSeconds:function (secs, callback) {
        var waitSecs = (secs * 1000);
        this.datetime.setMilliseconds( this.datetime.getMilliseconds() + waitSecs )
        this.setDateTime();
        return callback(this.getDateTime());
    }
}
// export the class
module.exports = DateTimeStamp;
