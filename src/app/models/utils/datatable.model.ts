export class DatatablesModelResponse {
    data: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
  }

  export class DatatablesModelRequestParam {
    start: number;
    limit: number;
    orderCol : number;
    orderDir :string;
  }
  