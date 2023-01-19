import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from '../_Models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  // private _baseUrl:string="http://localhost:9091/api/branch";
  addBranchURL:string;
  getBranchURL:string;
  updateBranchURL:string;
  deleteBranchURL:string;
  constructor(private http:HttpClient) {
    this.addBranchURL="http://localhost:9091/api/branch/addBranch";
    this.getBranchURL="http://localhost:9091/api/branch/getAll";
    this.updateBranchURL="http://localhost:9091/api/branch/updateBranch";
    this.deleteBranchURL="http://localhost:9091/api/branch/deleteBranchBybranchId";
   }
   addBranch(b:Branch):Observable<Branch>{
    return this.http.post<Branch>(this.addBranchURL,b);
   }
   getAllBranches():Observable<Branch[]>{
    return this.http.get<Branch[]>(this.getBranchURL);
  }
  updateBranch(b:Branch):Observable<Branch>{
    return this.http.put<Branch>(this.updateBranchURL,b);
    
    }
    deleteBranch(b:Branch):Observable<Branch>{
      return this.http.delete<Branch>(this.deleteBranchURL+'/'+b.branchId);
    }
}
