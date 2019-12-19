

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getGPS = async function getGPS(data, result) {
    const haversine = require('haversine')
    const start = {
        latitude: data.lat_start,
        longitude: data.lon_start
    }

    const end = {
        latitude: data.lat_end,
        longitude: data.lon_end
    }
    var res = haversine(start, end, { unit: 'meter' })
    var send = {
        distance : res
    }
    console.log(send);
    
    result(send);
}


module.exports = Task;