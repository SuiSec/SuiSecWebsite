export interface ISuiRequestBody {
  jsonrpc: string;
  id: number;
  method: string;
  params: string[];
}

export interface IAnalyzerData {
  sender: string;
  callPackages: string[];
}

export interface DemoData {
    Error:{
        name:string,
        message:string
    }|undefined,
    analyzeredData:IAnalyzerData,
    suiRequestBody:ISuiRequestBody
}
