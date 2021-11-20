import { HttpHeaders } from "@angular/common/http";

export default class HttpConfig {

    public static url = "http://localhost:8888/api";
    private static header: HttpHeaders;

    public static getHeader(): HttpHeaders {
        if(!HttpConfig.header){
            HttpConfig.header = new HttpHeaders()
            .set("cliente", "b787a4ab-30e3-46b6-927b-3660f75cd9df");
        }
        return  HttpConfig.header;
    }
}