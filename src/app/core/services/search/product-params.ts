

 export function NewProductParams(title: string, typeName: string, groupLACCode: string,  startDate: string, endDate: string, idResearcher: string): any[]  {
     const params: any[] = [];

     if (title) {
         params.push( `title=${title}`);
     }

     if (groupLACCode) {
         params.push(`groupCode=${groupLACCode}`);
     }

     if (typeName) {
         params.push(`typeName=${typeName}`);
     }

     if (startDate) {
         params.push(`startYear=${startDate}`);
     }

     if (endDate) {
         params.push(`endYear=${endDate}`);
     }

     if (idResearcher){
        params.push(`researcherId=${idResearcher}`);
     }

     return params;
 }
