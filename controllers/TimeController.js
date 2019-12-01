var moments = require('moment-timezone');
moments().tz("Asia/Bangkok").format();
// moments.lang('th', {
//     ordinal: Function
// });
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.reformatToSave = function reformatToSave(time) {
    //    //console.log('time-reformatToSave',time)
    var time_val = moments.utc(time).tz("Asia/Bangkok").format('YYYY-MM-DD HH:mm:ss');
    return time_val;
}
Task.reformatToNew = function reformatToNew(time) {
    // //console.log('time-reformatToSave',time)
    var time_val = moments.utc(time).format('YYYY-MM-DD HH:mm:ss');
    return time_val;
}

Task.reformatTo = function reformatTo(time) {
    // //console.log('time-reformatToSave',time)
    var time_val = moments.utc(time).format('YYYY-MM-DD');
    return time_val;
}
module.exports = Task;