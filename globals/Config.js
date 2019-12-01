const internal = {};

module.exports = internal.Global =  class {
    constructor() { 
        this.SERVER_URL = 'http://localhost:3001' 
        this.CLIENT_URL = 'http://192.168.1.111:3000'
        // this.CLIENT_URL = 'http://192.168.0.195:3000'
        this.ONESIGNAL_KEY = "5f720a1d-87ee-4542-80d4-9c3be87e11f1" 

        this.PUBLIC_KEY = 'pkey_test_5hi50mib0e9hg4bta4a'
        this.SECRET_KEY = 'skey_test_5hi50mibbtf9syx23yq'
    } 
 
     getServerUrl(){
        return this.SERVER_URL
    }
    
    getOneSignalKey(){
        return this.ONESIGNAL_KEY
    }
    getClientUrl(){
        return this.CLIENT_URL
    }
}