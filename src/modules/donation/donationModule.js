import* as donationService from  './donationService.js'
import * as donationIterface from './donationInterface.js'
export const render= ()=>{
  const data= donationService.get();
   donationIterface.appendItems(data);
} 