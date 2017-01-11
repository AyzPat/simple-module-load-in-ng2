
export const DEFAULT_TEMPLATE = `<div>
  <label> Search </label> <input type="text" [(ngModel)]="data" />
 <br>
 <br>

  <table class="table table-stripped" style="border: 3px solid rgba(134, 6, 70, 0.96);}">
   <thead>
   <tr>
     <td *ngFor="let header of headers">
         {{ header}}
         </td>
     </tr>
   </thead>
   <tbody>
     <tr *ngFor="let item of (items|search:data)|paginate: {itemsPerPage: 5, currentPage:page, id: '1'};" >
       <td *ngFor="let value of item | dataValues">
         {{ value }}
       </td>
     </tr>
   </tbody>
 </table>
<pagination-controls (pageChange)="page = $event" id="1"
                      maxSize="7"
                      directionLinks="true"
                      autoHide="true">
 </pagination-controls>
 
 </div>`;
 
export const DEFAULT_STYLES = `h1{
        color: #257354;
    text-align: center;
}


table tbody tr:nth-child(even) {
    background-color: #eee;
}
table tbody tr:nth-child(odd) {
   background-color:#fff;
}
table tbody th {
    background-color: black;
    color: white;
}

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
th, td {
    padding: 5px;
    text-align: left;
}
thead tr{
    background-color:blanchedalmond;
        border: 2px solid black;
}
tbody tr{
     border: 2px solid black;
}
input[type=text] {
    width: 130px;
    box-sizing: border-box;
    border: 2px solid gray;
    border-radius: 4px;
    font-size: 10px;
    background-color: white;
   
    background-position: 10px 10px;
    background-repeat: no-repeat;
    /*padding: 12px 20px 12px 40px;*/
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
    width:20%;
}





`