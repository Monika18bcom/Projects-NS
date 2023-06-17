class API {
    #secure = false;
    constructor(url,method = "GET"){
        this.url = url;
        this.method = method;

        if(this.url.startsWith("https")){
            this.#secure = true;
        }
    }

    isSecure(){
        return this.#secure
    }

    updateURL(updatedurl){

        if(updatedurl.startsWith("https")){
            this.#secure = true;
        }else {
            this.#secure = false;
        }
    }
}
