

 export function NewProductParams(title: string, typeName: string, groupLACCode: string,  startDate: string, endDate: string): any[]  {
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
         params.push(`endYear${endDate}`);
     }

     return params;
 }
