import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as _ from 'underscore';

@Injectable()
export class AlbumsService {

    constructor(private http: Http) {}

    getDivite() {
      return  this.http.get('http://api.wolframalpha.com/input/json.jsp?assumptionsversion=2&async=true&banners=raw&debuggingdata=false&format=image,plaintext,imagemap,sound,minput,moutput&formattimeout=8&input=derivative+of+x%5E4&output=JSON&outputassumptionsversion=2&parsetimeout=5&podinfosasync=true&proxycode=46036654672c7fbd794766a534505fd1&recalcscheme=parallel&sbsdetails=true&scantimeout=0.5&sponsorcategories=true&statemethod=all&storesubpodexprs=true')
        .map(response => {
            return response.json();
        })             
    }
    
} 