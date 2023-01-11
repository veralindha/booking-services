import TambahBokingForm from "../../components/forms/tambahbokingform";
import DataBokingTable from "../../components/table/databokingtable";
import Layout from "../../components/utils/layout";

export default function TambahBoking(){
    return(
        <Layout>
            <TambahBokingForm />
            <DataBokingTable />
        </Layout>
    )
}