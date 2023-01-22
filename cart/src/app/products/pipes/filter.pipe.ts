import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproduct:[],searchKey:string,propname:string):any[] {
    const result:any=[]
    if(!allproduct|| searchKey == '' || propname==''){
      return allproduct
    }
    
    //searching
    allproduct.forEach((product:any)=>{
     
      if(product[propname].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(product)
      }
    })
    return result
  }

}
