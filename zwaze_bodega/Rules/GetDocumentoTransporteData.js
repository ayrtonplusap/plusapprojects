/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */

import modifyDateValue from './Utilities/ModifyDateValue';
import createFilter from './Utilities/CreateFilter';

export default async function GetDocumentoTransporteData(clientAPI) {

    clientAPI.showActivityIndicator(1);

    //Almacenando el valor del controlador
    let dpFechaDocTransporte = clientAPI.getPageProxy().evaluateTargetPath('#Control:DatePickerFechaDocTransporte');
    let valueDpFechaDocTransporte = modifyDateValue(dpFechaDocTransporte);

    //Almacenando el valor del controlador
    let valueSpDocTransporte = clientAPI.getPageProxy().evaluateTargetPath('#Control:SimplePropertyDocTransporte/#Value');

    //Creando el filtro OData de la fecha
    let filterFechaDocTransporte = createFilter("Erdat", "eq", "datetime", valueDpFechaDocTransporte);

    //Crendo el Data Query Builder para la URL OData
    let documentosDataQueryBuilder = clientAPI.dataQueryBuilder();
    documentosDataQueryBuilder.expand('AdjuntoTransp');
    documentosDataQueryBuilder.filter(filterFechaDocTransporte);

    //Verificamos si la variable que almacena el valor del Documento de Transporte existe 
    if (valueSpDocTransporte) {
        //Creando el filtro OData del Documento de Transporte
        let filterDocTransporte = createFilter("Tknum", "eq", "string", valueSpDocTransporte);

        //Agregando el filtro a la URL OData
        documentosDataQueryBuilder.filter().and(filterDocTransporte);
    }

    //Configuramos los parámetros que se van a utilizar en la sentencia Read
    let serviceName = "/zwaze_bodega/Services/Online_ZOD_SD_BODEGA_SRV.service";
    let documentosEntitySet = "Documentos_TransporteSet";
    let properties = [];
    let documentosQueryOptions = await documentosDataQueryBuilder.build();

    //Consulto la información de Documentos
    return await clientAPI.read(serviceName, documentosEntitySet, properties, documentosQueryOptions).then(async (data) => {
        let aDocumentos = data._array;
        if (aDocumentos.length > 0) {
            //Inicializamos el almacenamiento temporal clientData
            let clientData = clientAPI.getAppClientData();
            //Guardamos la data obtenida para mostrarla luego
            clientData.aDataTransport = aDocumentos;
            //Configuramos el EntitySet para la nueva consulta
            let partnersEntitySet = "Partners_TransporteSet";
            //Iniciamos la iteración de todos los documentos

            for (const oDocumento of clientData.aDataTransport) {
                //Creando el filtro OData del Expand Documento de Transporte
                let docTransporte = oDocumento.Tknum;
                let filterIterativeDocTransporte = createFilter("Tknum", "eq", "string", docTransporte);
                //Creando el Data Query Builder para la URL OData
                let partnersDataQueryBuilder = clientAPI.dataQueryBuilder();
                partnersDataQueryBuilder.expand("");
                partnersDataQueryBuilder.filter(filterIterativeDocTransporte);
                let partnersQueryOptions = await partnersDataQueryBuilder.build();

                //Consulto la información de Partners
                await clientAPI.read(serviceName, partnersEntitySet, properties, partnersQueryOptions).then((data) => {     //Acá utilizamos el mismo properties debido a que es un array vacío
                    let aPartners = data._array;
                    //Guardamos la data obtenida para mostrarla luego
                    oDocumento.aDataPartners = aPartners;
                });

            }
            clientAPI.executeAction("/zwaze_bodega/Actions/NavToDocumentoTransporte_List.action");
        } else {
            clientAPI.executeAction("/zwaze_bodega/Actions/MessageDataNotFound.action");
        }
        clientAPI.dismissActivityIndicator(1);
    });
    
}
