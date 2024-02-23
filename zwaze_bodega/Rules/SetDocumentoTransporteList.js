/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SetDocumentoTransporteList(clientAPI) {
    //Inicializamos el almacenamiento temporal clientData
    let clientData = clientAPI.getAppClientData();
    let aDocumentosTransporte = clientData.aDataTransport;

    let aData = [];
    for(const docTransporte of aDocumentosTransporte) {
        let oDocTransporte = {
            Title: docTransporte.Tknum,
            Subhead: `${docTransporte.Peso} ${docTransporte.Dtmeg}`,
            Footnote: docTransporte.Signi,
            Status: docTransporte.Status,
            Substatus: `${docTransporte.Capacidad} ${docTransporte.Dtmeg}`

        }
        aData.push(oDocTransporte);
    }

    return aData;
}
