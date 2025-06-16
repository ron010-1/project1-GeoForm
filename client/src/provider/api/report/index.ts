import { api } from "../../interceptors/interceptors"

export default class ReportProvider{

    static async GetReports(){
        console.log(api.get("reports"));
    }
}