/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function TestingRule(clientAPI) {
    //Inicializamos el almacenamiento temporal clientData
    let clientData = clientAPI.getAppClientData();
    //Guardamos la data obtenida para mostrarla luego
    console.log(clientData.aDataTransport);

}
