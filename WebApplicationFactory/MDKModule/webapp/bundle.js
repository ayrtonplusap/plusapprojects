(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")
let zwaze_bodega_actions_application_appupdate_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/AppUpdate.action */ "./build.definitions/zwaze_bodega/Actions/Application/AppUpdate.action")
let zwaze_bodega_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/zwaze_bodega/Actions/Application/AppUpdateFailureMessage.action")
let zwaze_bodega_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/zwaze_bodega/Actions/Application/AppUpdateProgressBanner.action")
let zwaze_bodega_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/zwaze_bodega/Actions/Application/AppUpdateSuccessMessage.action")
let zwaze_bodega_actions_application_logout_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/Logout.action */ "./build.definitions/zwaze_bodega/Actions/Application/Logout.action")
let zwaze_bodega_actions_application_navtoabout_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/NavToAbout.action */ "./build.definitions/zwaze_bodega/Actions/Application/NavToAbout.action")
let zwaze_bodega_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/NavToActivityLog.action */ "./build.definitions/zwaze_bodega/Actions/Application/NavToActivityLog.action")
let zwaze_bodega_actions_application_navtosupport_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/NavToSupport.action */ "./build.definitions/zwaze_bodega/Actions/Application/NavToSupport.action")
let zwaze_bodega_actions_application_onwillupdate_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/OnWillUpdate.action */ "./build.definitions/zwaze_bodega/Actions/Application/OnWillUpdate.action")
let zwaze_bodega_actions_application_reset_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/Reset.action */ "./build.definitions/zwaze_bodega/Actions/Application/Reset.action")
let zwaze_bodega_actions_application_resetmessage_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/ResetMessage.action */ "./build.definitions/zwaze_bodega/Actions/Application/ResetMessage.action")
let zwaze_bodega_actions_application_usermenupopover_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Application/UserMenuPopover.action */ "./build.definitions/zwaze_bodega/Actions/Application/UserMenuPopover.action")
let zwaze_bodega_actions_closemodalpage_complete_action = __webpack_require__(/*! ./zwaze_bodega/Actions/CloseModalPage_Complete.action */ "./build.definitions/zwaze_bodega/Actions/CloseModalPage_Complete.action")
let zwaze_bodega_actions_closepage_action = __webpack_require__(/*! ./zwaze_bodega/Actions/ClosePage.action */ "./build.definitions/zwaze_bodega/Actions/ClosePage.action")
let zwaze_bodega_actions_genericbannermessage_action = __webpack_require__(/*! ./zwaze_bodega/Actions/GenericBannerMessage.action */ "./build.definitions/zwaze_bodega/Actions/GenericBannerMessage.action")
let zwaze_bodega_actions_genericmessagebox_action = __webpack_require__(/*! ./zwaze_bodega/Actions/GenericMessageBox.action */ "./build.definitions/zwaze_bodega/Actions/GenericMessageBox.action")
let zwaze_bodega_actions_genericnavigation_action = __webpack_require__(/*! ./zwaze_bodega/Actions/GenericNavigation.action */ "./build.definitions/zwaze_bodega/Actions/GenericNavigation.action")
let zwaze_bodega_actions_generictoastmessage_action = __webpack_require__(/*! ./zwaze_bodega/Actions/GenericToastMessage.action */ "./build.definitions/zwaze_bodega/Actions/GenericToastMessage.action")
let zwaze_bodega_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Logging/LogUploadFailure.action */ "./build.definitions/zwaze_bodega/Actions/Logging/LogUploadFailure.action")
let zwaze_bodega_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/zwaze_bodega/Actions/Logging/LogUploadSuccessful.action")
let zwaze_bodega_actions_logging_uploadlog_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Logging/UploadLog.action */ "./build.definitions/zwaze_bodega/Actions/Logging/UploadLog.action")
let zwaze_bodega_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Logging/UploadLogProgress.action */ "./build.definitions/zwaze_bodega/Actions/Logging/UploadLogProgress.action")
let zwaze_bodega_actions_messagedatanotfound_action = __webpack_require__(/*! ./zwaze_bodega/Actions/MessageDataNotFound.action */ "./build.definitions/zwaze_bodega/Actions/MessageDataNotFound.action")
let zwaze_bodega_actions_navtodocumentotransporte_detail_action = __webpack_require__(/*! ./zwaze_bodega/Actions/NavToDocumentoTransporte_Detail.action */ "./build.definitions/zwaze_bodega/Actions/NavToDocumentoTransporte_Detail.action")
let zwaze_bodega_actions_navtodocumentotransporte_list_action = __webpack_require__(/*! ./zwaze_bodega/Actions/NavToDocumentoTransporte_List.action */ "./build.definitions/zwaze_bodega/Actions/NavToDocumentoTransporte_List.action")
let zwaze_bodega_actions_services_oninitialize_online_zod_sd_bodega_srv_action = __webpack_require__(/*! ./zwaze_bodega/Actions/Services/OnInitialize_Online_ZOD_SD_BODEGA_SRV.action */ "./build.definitions/zwaze_bodega/Actions/Services/OnInitialize_Online_ZOD_SD_BODEGA_SRV.action")
let zwaze_bodega_globals_application_appdefinition_version_global = __webpack_require__(/*! ./zwaze_bodega/Globals/Application/AppDefinition_Version.global */ "./build.definitions/zwaze_bodega/Globals/Application/AppDefinition_Version.global")
let zwaze_bodega_globals_application_applicationname_global = __webpack_require__(/*! ./zwaze_bodega/Globals/Application/ApplicationName.global */ "./build.definitions/zwaze_bodega/Globals/Application/ApplicationName.global")
let zwaze_bodega_globals_application_supportemail_global = __webpack_require__(/*! ./zwaze_bodega/Globals/Application/SupportEmail.global */ "./build.definitions/zwaze_bodega/Globals/Application/SupportEmail.global")
let zwaze_bodega_globals_application_supportphone_global = __webpack_require__(/*! ./zwaze_bodega/Globals/Application/SupportPhone.global */ "./build.definitions/zwaze_bodega/Globals/Application/SupportPhone.global")
let zwaze_bodega_i18n_i18n_properties = __webpack_require__(/*! ./zwaze_bodega/i18n/i18n.properties */ "./build.definitions/zwaze_bodega/i18n/i18n.properties")
let zwaze_bodega_jsconfig_json = __webpack_require__(/*! ./zwaze_bodega/jsconfig.json */ "./build.definitions/zwaze_bodega/jsconfig.json")
let zwaze_bodega_pages_application_about_page = __webpack_require__(/*! ./zwaze_bodega/Pages/Application/About.page */ "./build.definitions/zwaze_bodega/Pages/Application/About.page")
let zwaze_bodega_pages_application_support_page = __webpack_require__(/*! ./zwaze_bodega/Pages/Application/Support.page */ "./build.definitions/zwaze_bodega/Pages/Application/Support.page")
let zwaze_bodega_pages_application_useractivitylog_page = __webpack_require__(/*! ./zwaze_bodega/Pages/Application/UserActivityLog.page */ "./build.definitions/zwaze_bodega/Pages/Application/UserActivityLog.page")
let zwaze_bodega_pages_documentotransporte_detail_page = __webpack_require__(/*! ./zwaze_bodega/Pages/DocumentoTransporte_Detail.page */ "./build.definitions/zwaze_bodega/Pages/DocumentoTransporte_Detail.page")
let zwaze_bodega_pages_documentotransporte_list_page = __webpack_require__(/*! ./zwaze_bodega/Pages/DocumentoTransporte_List.page */ "./build.definitions/zwaze_bodega/Pages/DocumentoTransporte_List.page")
let zwaze_bodega_pages_main_page = __webpack_require__(/*! ./zwaze_bodega/Pages/Main.page */ "./build.definitions/zwaze_bodega/Pages/Main.page")
let zwaze_bodega_rules_application_appupdatefailure_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Application/AppUpdateFailure.js */ "./build.definitions/zwaze_bodega/Rules/Application/AppUpdateFailure.js")
let zwaze_bodega_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/zwaze_bodega/Rules/Application/AppUpdateSuccess.js")
let zwaze_bodega_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/zwaze_bodega/Rules/Application/ClientIsMultiUserMode.js")
let zwaze_bodega_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/zwaze_bodega/Rules/Application/GetClientSupportVersions.js")
let zwaze_bodega_rules_application_getclientversion_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Application/GetClientVersion.js */ "./build.definitions/zwaze_bodega/Rules/Application/GetClientVersion.js")
let zwaze_bodega_rules_application_onwillupdate_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Application/OnWillUpdate.js */ "./build.definitions/zwaze_bodega/Rules/Application/OnWillUpdate.js")
let zwaze_bodega_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/zwaze_bodega/Rules/Application/ResetAppSettingsAndLogout.js")
let zwaze_bodega_rules_getdocumentotransportedata_js = __webpack_require__(/*! ./zwaze_bodega/Rules/GetDocumentoTransporteData.js */ "./build.definitions/zwaze_bodega/Rules/GetDocumentoTransporteData.js")
let zwaze_bodega_rules_logging_loglevels_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Logging/LogLevels.js */ "./build.definitions/zwaze_bodega/Rules/Logging/LogLevels.js")
let zwaze_bodega_rules_logging_settracecategories_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Logging/SetTraceCategories.js */ "./build.definitions/zwaze_bodega/Rules/Logging/SetTraceCategories.js")
let zwaze_bodega_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/zwaze_bodega/Rules/Logging/SetUserLogLevel.js")
let zwaze_bodega_rules_logging_togglelogging_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Logging/ToggleLogging.js */ "./build.definitions/zwaze_bodega/Rules/Logging/ToggleLogging.js")
let zwaze_bodega_rules_logging_tracecategories_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Logging/TraceCategories.js */ "./build.definitions/zwaze_bodega/Rules/Logging/TraceCategories.js")
let zwaze_bodega_rules_logging_userlogsetting_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Logging/UserLogSetting.js */ "./build.definitions/zwaze_bodega/Rules/Logging/UserLogSetting.js")
let zwaze_bodega_rules_setdocumentotransportelist_js = __webpack_require__(/*! ./zwaze_bodega/Rules/SetDocumentoTransporteList.js */ "./build.definitions/zwaze_bodega/Rules/SetDocumentoTransporteList.js")
let zwaze_bodega_rules_testingrule_js = __webpack_require__(/*! ./zwaze_bodega/Rules/TestingRule.js */ "./build.definitions/zwaze_bodega/Rules/TestingRule.js")
let zwaze_bodega_rules_utilities_createfilter_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Utilities/CreateFilter.js */ "./build.definitions/zwaze_bodega/Rules/Utilities/CreateFilter.js")
let zwaze_bodega_rules_utilities_modifydatevalue_js = __webpack_require__(/*! ./zwaze_bodega/Rules/Utilities/ModifyDateValue.js */ "./build.definitions/zwaze_bodega/Rules/Utilities/ModifyDateValue.js")
let zwaze_bodega_services_online_zod_sd_bodega_srv_service = __webpack_require__(/*! ./zwaze_bodega/Services/Online_ZOD_SD_BODEGA_SRV.service */ "./build.definitions/zwaze_bodega/Services/Online_ZOD_SD_BODEGA_SRV.service")
let zwaze_bodega_styles_styles_css = __webpack_require__(/*! ./zwaze_bodega/Styles/Styles.css */ "./build.definitions/zwaze_bodega/Styles/Styles.css")
let zwaze_bodega_styles_styles_json = __webpack_require__(/*! ./zwaze_bodega/Styles/Styles.json */ "./build.definitions/zwaze_bodega/Styles/Styles.json")
let zwaze_bodega_styles_styles_less = __webpack_require__(/*! ./zwaze_bodega/Styles/Styles.less */ "./build.definitions/zwaze_bodega/Styles/Styles.less")
let zwaze_bodega_styles_styles_nss = __webpack_require__(/*! ./zwaze_bodega/Styles/Styles.nss */ "./build.definitions/zwaze_bodega/Styles/Styles.nss")

module.exports = {
	application_app : application_app,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion,
	zwaze_bodega_actions_application_appupdate_action : zwaze_bodega_actions_application_appupdate_action,
	zwaze_bodega_actions_application_appupdatefailuremessage_action : zwaze_bodega_actions_application_appupdatefailuremessage_action,
	zwaze_bodega_actions_application_appupdateprogressbanner_action : zwaze_bodega_actions_application_appupdateprogressbanner_action,
	zwaze_bodega_actions_application_appupdatesuccessmessage_action : zwaze_bodega_actions_application_appupdatesuccessmessage_action,
	zwaze_bodega_actions_application_logout_action : zwaze_bodega_actions_application_logout_action,
	zwaze_bodega_actions_application_navtoabout_action : zwaze_bodega_actions_application_navtoabout_action,
	zwaze_bodega_actions_application_navtoactivitylog_action : zwaze_bodega_actions_application_navtoactivitylog_action,
	zwaze_bodega_actions_application_navtosupport_action : zwaze_bodega_actions_application_navtosupport_action,
	zwaze_bodega_actions_application_onwillupdate_action : zwaze_bodega_actions_application_onwillupdate_action,
	zwaze_bodega_actions_application_reset_action : zwaze_bodega_actions_application_reset_action,
	zwaze_bodega_actions_application_resetmessage_action : zwaze_bodega_actions_application_resetmessage_action,
	zwaze_bodega_actions_application_usermenupopover_action : zwaze_bodega_actions_application_usermenupopover_action,
	zwaze_bodega_actions_closemodalpage_complete_action : zwaze_bodega_actions_closemodalpage_complete_action,
	zwaze_bodega_actions_closepage_action : zwaze_bodega_actions_closepage_action,
	zwaze_bodega_actions_genericbannermessage_action : zwaze_bodega_actions_genericbannermessage_action,
	zwaze_bodega_actions_genericmessagebox_action : zwaze_bodega_actions_genericmessagebox_action,
	zwaze_bodega_actions_genericnavigation_action : zwaze_bodega_actions_genericnavigation_action,
	zwaze_bodega_actions_generictoastmessage_action : zwaze_bodega_actions_generictoastmessage_action,
	zwaze_bodega_actions_logging_loguploadfailure_action : zwaze_bodega_actions_logging_loguploadfailure_action,
	zwaze_bodega_actions_logging_loguploadsuccessful_action : zwaze_bodega_actions_logging_loguploadsuccessful_action,
	zwaze_bodega_actions_logging_uploadlog_action : zwaze_bodega_actions_logging_uploadlog_action,
	zwaze_bodega_actions_logging_uploadlogprogress_action : zwaze_bodega_actions_logging_uploadlogprogress_action,
	zwaze_bodega_actions_messagedatanotfound_action : zwaze_bodega_actions_messagedatanotfound_action,
	zwaze_bodega_actions_navtodocumentotransporte_detail_action : zwaze_bodega_actions_navtodocumentotransporte_detail_action,
	zwaze_bodega_actions_navtodocumentotransporte_list_action : zwaze_bodega_actions_navtodocumentotransporte_list_action,
	zwaze_bodega_actions_services_oninitialize_online_zod_sd_bodega_srv_action : zwaze_bodega_actions_services_oninitialize_online_zod_sd_bodega_srv_action,
	zwaze_bodega_globals_application_appdefinition_version_global : zwaze_bodega_globals_application_appdefinition_version_global,
	zwaze_bodega_globals_application_applicationname_global : zwaze_bodega_globals_application_applicationname_global,
	zwaze_bodega_globals_application_supportemail_global : zwaze_bodega_globals_application_supportemail_global,
	zwaze_bodega_globals_application_supportphone_global : zwaze_bodega_globals_application_supportphone_global,
	zwaze_bodega_i18n_i18n_properties : zwaze_bodega_i18n_i18n_properties,
	zwaze_bodega_jsconfig_json : zwaze_bodega_jsconfig_json,
	zwaze_bodega_pages_application_about_page : zwaze_bodega_pages_application_about_page,
	zwaze_bodega_pages_application_support_page : zwaze_bodega_pages_application_support_page,
	zwaze_bodega_pages_application_useractivitylog_page : zwaze_bodega_pages_application_useractivitylog_page,
	zwaze_bodega_pages_documentotransporte_detail_page : zwaze_bodega_pages_documentotransporte_detail_page,
	zwaze_bodega_pages_documentotransporte_list_page : zwaze_bodega_pages_documentotransporte_list_page,
	zwaze_bodega_pages_main_page : zwaze_bodega_pages_main_page,
	zwaze_bodega_rules_application_appupdatefailure_js : zwaze_bodega_rules_application_appupdatefailure_js,
	zwaze_bodega_rules_application_appupdatesuccess_js : zwaze_bodega_rules_application_appupdatesuccess_js,
	zwaze_bodega_rules_application_clientismultiusermode_js : zwaze_bodega_rules_application_clientismultiusermode_js,
	zwaze_bodega_rules_application_getclientsupportversions_js : zwaze_bodega_rules_application_getclientsupportversions_js,
	zwaze_bodega_rules_application_getclientversion_js : zwaze_bodega_rules_application_getclientversion_js,
	zwaze_bodega_rules_application_onwillupdate_js : zwaze_bodega_rules_application_onwillupdate_js,
	zwaze_bodega_rules_application_resetappsettingsandlogout_js : zwaze_bodega_rules_application_resetappsettingsandlogout_js,
	zwaze_bodega_rules_getdocumentotransportedata_js : zwaze_bodega_rules_getdocumentotransportedata_js,
	zwaze_bodega_rules_logging_loglevels_js : zwaze_bodega_rules_logging_loglevels_js,
	zwaze_bodega_rules_logging_settracecategories_js : zwaze_bodega_rules_logging_settracecategories_js,
	zwaze_bodega_rules_logging_setuserloglevel_js : zwaze_bodega_rules_logging_setuserloglevel_js,
	zwaze_bodega_rules_logging_togglelogging_js : zwaze_bodega_rules_logging_togglelogging_js,
	zwaze_bodega_rules_logging_tracecategories_js : zwaze_bodega_rules_logging_tracecategories_js,
	zwaze_bodega_rules_logging_userlogsetting_js : zwaze_bodega_rules_logging_userlogsetting_js,
	zwaze_bodega_rules_setdocumentotransportelist_js : zwaze_bodega_rules_setdocumentotransportelist_js,
	zwaze_bodega_rules_testingrule_js : zwaze_bodega_rules_testingrule_js,
	zwaze_bodega_rules_utilities_createfilter_js : zwaze_bodega_rules_utilities_createfilter_js,
	zwaze_bodega_rules_utilities_modifydatevalue_js : zwaze_bodega_rules_utilities_modifydatevalue_js,
	zwaze_bodega_services_online_zod_sd_bodega_srv_service : zwaze_bodega_services_online_zod_sd_bodega_srv_service,
	zwaze_bodega_styles_styles_css : zwaze_bodega_styles_styles_css,
	zwaze_bodega_styles_styles_json : zwaze_bodega_styles_styles_json,
	zwaze_bodega_styles_styles_less : zwaze_bodega_styles_styles_less,
	zwaze_bodega_styles_styles_nss : zwaze_bodega_styles_styles_nss
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/i18n/i18n.properties":
/*!*************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/i18n/i18n.properties ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Application/AppUpdateFailure.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Application/AppUpdateFailure.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/zwaze_bodega/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Application/AppUpdateSuccess.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Application/AppUpdateSuccess.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/zwaze_bodega/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/zwaze_bodega/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Application/ClientIsMultiUserMode.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Application/ClientIsMultiUserMode.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Application/GetClientSupportVersions.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Application/GetClientSupportVersions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Application/GetClientVersion.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Application/GetClientVersion.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Application/OnWillUpdate.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Application/OnWillUpdate.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/zwaze_bodega/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Application/ResetAppSettingsAndLogout.js":
/*!***************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/zwaze_bodega/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/GetDocumentoTransporteData.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/GetDocumentoTransporteData.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetDocumentoTransporteData)
/* harmony export */ });
/* harmony import */ var _Utilities_ModifyDateValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities/ModifyDateValue */ "./build.definitions/zwaze_bodega/Rules/Utilities/ModifyDateValue.js");
/* harmony import */ var _Utilities_CreateFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities/CreateFilter */ "./build.definitions/zwaze_bodega/Rules/Utilities/CreateFilter.js");
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */



async function GetDocumentoTransporteData(clientAPI) {
  clientAPI.showActivityIndicator(1);

  //Almacenando el valor del controlador
  let dpFechaDocTransporte = clientAPI.getPageProxy().evaluateTargetPath('#Control:DatePickerFechaDocTransporte');
  let valueDpFechaDocTransporte = (0,_Utilities_ModifyDateValue__WEBPACK_IMPORTED_MODULE_0__["default"])(dpFechaDocTransporte);

  //Almacenando el valor del controlador
  let valueSpDocTransporte = clientAPI.getPageProxy().evaluateTargetPath('#Control:SimplePropertyDocTransporte/#Value');

  //Creando el filtro OData de la fecha
  let filterFechaDocTransporte = (0,_Utilities_CreateFilter__WEBPACK_IMPORTED_MODULE_1__["default"])("Erdat", "eq", "datetime", valueDpFechaDocTransporte);

  //Crendo el Data Query Builder para la URL OData
  let documentosDataQueryBuilder = clientAPI.dataQueryBuilder();
  documentosDataQueryBuilder.expand('AdjuntoTransp');
  documentosDataQueryBuilder.filter(filterFechaDocTransporte);

  //Verificamos si la variable que almacena el valor del Documento de Transporte existe 
  if (valueSpDocTransporte) {
    //Creando el filtro OData del Documento de Transporte
    let filterDocTransporte = (0,_Utilities_CreateFilter__WEBPACK_IMPORTED_MODULE_1__["default"])("Tknum", "eq", "string", valueSpDocTransporte);

    //Agregando el filtro a la URL OData
    documentosDataQueryBuilder.filter().and(filterDocTransporte);
  }

  //Configuramos los parámetros que se van a utilizar en la sentencia Read
  let serviceName = "/zwaze_bodega/Services/Online_ZOD_SD_BODEGA_SRV.service";
  let documentosEntitySet = "Documentos_TransporteSet";
  let properties = [];
  let documentosQueryOptions = await documentosDataQueryBuilder.build();

  //Consulto la información de Documentos
  return await clientAPI.read(serviceName, documentosEntitySet, properties, documentosQueryOptions).then(async data => {
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
        let filterIterativeDocTransporte = (0,_Utilities_CreateFilter__WEBPACK_IMPORTED_MODULE_1__["default"])("Tknum", "eq", "string", docTransporte);
        //Creando el Data Query Builder para la URL OData
        let partnersDataQueryBuilder = clientAPI.dataQueryBuilder();
        partnersDataQueryBuilder.expand("");
        partnersDataQueryBuilder.filter(filterIterativeDocTransporte);
        let partnersQueryOptions = await partnersDataQueryBuilder.build();

        //Consulto la información de Partners
        await clientAPI.read(serviceName, partnersEntitySet, properties, partnersQueryOptions).then(data => {
          //Acá utilizamos el mismo properties debido a que es un array vacío
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

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Logging/LogLevels.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Logging/LogLevels.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Logging/SetTraceCategories.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Logging/SetTraceCategories.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Logging/SetUserLogLevel.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Logging/SetUserLogLevel.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Logging/ToggleLogging.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Logging/ToggleLogging.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Logging/TraceCategories.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Logging/TraceCategories.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Logging/UserLogSetting.js":
/*!************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Logging/UserLogSetting.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/SetDocumentoTransporteList.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/SetDocumentoTransporteList.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetDocumentoTransporteList)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SetDocumentoTransporteList(clientAPI) {
  //Inicializamos el almacenamiento temporal clientData
  let clientData = clientAPI.getAppClientData();
  let aDocumentosTransporte = clientData.aDataTransport;
  let aData = [];
  for (const docTransporte of aDocumentosTransporte) {
    let oDocTransporte = {
      Title: docTransporte.Tknum,
      Subhead: `${docTransporte.Peso} ${docTransporte.Dtmeg}`,
      Footnote: docTransporte.Signi,
      Status: docTransporte.Status,
      Substatus: `${docTransporte.Capacidad} ${docTransporte.Dtmeg}`
    };
    aData.push(oDocTransporte);
  }
  return aData;
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/TestingRule.js":
/*!*************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/TestingRule.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestingRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function TestingRule(clientAPI) {
  //Inicializamos el almacenamiento temporal clientData
  let clientData = clientAPI.getAppClientData();
  //Guardamos la data obtenida para mostrarla luego
  console.log(clientData.aDataTransport);
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Utilities/CreateFilter.js":
/*!************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Utilities/CreateFilter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFilter)
/* harmony export */ });
function createFilter(filterPropertyName, filterOperator, filterOperandType, filterOperand) {
  let filter = `${filterPropertyName} ${filterOperator} `;
  if (filterOperandType === "string") {
    filter += "'" + filterOperand + "'";
  } else if (filterOperandType === "date" || filterOperandType === "datetime") {
    filter += `datetime'${filterOperand}'`;
  }
  return filter;
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Rules/Utilities/ModifyDateValue.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Rules/Utilities/ModifyDateValue.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modifyDateValue)
/* harmony export */ });
function modifyDateValue(datePickerObject) {
  let valueDatePicker = datePickerObject.getValue().toISOString();
  valueDatePicker = valueDatePicker.split('T')[0];
  valueDatePicker += "T00:00:00";
  return valueDatePicker;
}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Styles/Styles.css":
/*!**********************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Styles/Styles.css ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/zwaze_bodega/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/zwaze_bodega/Styles/Styles.less":
/*!***********************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Styles/Styles.less ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/zwaze_bodega/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/zwaze_bodega/Styles/Styles.nss":
/*!**********************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Styles/Styles.nss ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/zwaze_bodega/Pages/Main.page","OnLaunch":["/zwaze_bodega/Actions/Services/OnInitialize_Online_ZOD_SD_BODEGA_SRV.action"],"OnWillUpdate":"/zwaze_bodega/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/zwaze_bodega/Actions/Services/OnInitialize_Online_ZOD_SD_BODEGA_SRV.action","Styles":"/zwaze_bodega/Styles/Styles.less","Localization":"/zwaze_bodega/i18n/i18n.properties","_SchemaVersion":"23.12","_Name":"zwaze_bodega","StyleSheets":{"Styles":{"css":"/zwaze_bodega/Styles/Styles.css","ios":"/zwaze_bodega/Styles/Styles.nss","android":"/zwaze_bodega/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/AppUpdate.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/AppUpdate.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/zwaze_bodega/Rules/Application/AppUpdateFailure.js","OnSuccess":"/zwaze_bodega/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/AppUpdateFailureMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/AppUpdateFailureMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/AppUpdateProgressBanner.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/AppUpdateProgressBanner.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/zwaze_bodega/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/AppUpdateSuccessMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/AppUpdateSuccessMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/Logout.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/Logout.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/NavToAbout.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/NavToAbout.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/zwaze_bodega/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/NavToActivityLog.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/NavToActivityLog.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/zwaze_bodega/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/NavToSupport.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/NavToSupport.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/zwaze_bodega/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/OnWillUpdate.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/OnWillUpdate.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/Reset.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/Reset.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/ResetMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/ResetMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/zwaze_bodega/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Application/UserMenuPopover.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Application/UserMenuPopover.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/zwaze_bodega/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/zwaze_bodega/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/zwaze_bodega/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/zwaze_bodega/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/zwaze_bodega/Actions/Application/Logout.action","Title":"Logout","Visible":"/zwaze_bodega/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/CloseModalPage_Complete.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/CloseModalPage_Complete.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/ClosePage.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/ClosePage.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/GenericBannerMessage.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/GenericBannerMessage.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/GenericMessageBox.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/GenericMessageBox.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/GenericNavigation.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/GenericNavigation.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/zwaze_bodega/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/GenericToastMessage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/GenericToastMessage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Logging/LogUploadFailure.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Logging/LogUploadFailure.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Logging/LogUploadSuccessful.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Logging/LogUploadSuccessful.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Logging/UploadLog.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Logging/UploadLog.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/zwaze_bodega/Actions/Logging/LogUploadFailure.action","OnSuccess":"/zwaze_bodega/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Logging/UploadLogProgress.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Logging/UploadLogProgress.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/zwaze_bodega/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/MessageDataNotFound.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/MessageDataNotFound.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"MessageDataNotFound"},"Message":"No se encontraron registros","CancelCaption":"OK"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/NavToDocumentoTransporte_Detail.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/NavToDocumentoTransporte_Detail.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToDocumentoTransporte_Detail"},"PageToOpen":"/zwaze_bodega/Pages/DocumentoTransporte_Detail.page","ModalPage":false}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/NavToDocumentoTransporte_List.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/NavToDocumentoTransporte_List.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToDocumentoTransporte_List"},"PageToOpen":"/zwaze_bodega/Pages/DocumentoTransporte_List.page","ModalPage":false,"NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Actions/Services/OnInitialize_Online_ZOD_SD_BODEGA_SRV.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Actions/Services/OnInitialize_Online_ZOD_SD_BODEGA_SRV.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.Initialize","ActionResult":{"_Name":"OnInitialize_Online_ZOD_SD_BODEGA_SRV"},"Service":"/zwaze_bodega/Services/Online_ZOD_SD_BODEGA_SRV.service"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Globals/Application/AppDefinition_Version.global":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Globals/Application/AppDefinition_Version.global ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Globals/Application/ApplicationName.global":
/*!***********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Globals/Application/ApplicationName.global ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Globals/Application/SupportEmail.global":
/*!********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Globals/Application/SupportEmail.global ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Globals/Application/SupportPhone.global":
/*!********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Globals/Application/SupportPhone.global ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Services/Online_ZOD_SD_BODEGA_SRV.service":
/*!**********************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Services/Online_ZOD_SD_BODEGA_SRV.service ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"dev_alcsa","PathSuffix":"/sap/opu/odata/sap/ZOD_SD_BODEGA_SRV","OfflineEnabled":false,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Pages/Application/About.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Pages/Application/About.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/zwaze_bodega/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/zwaze_bodega/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/zwaze_bodega/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/zwaze_bodega/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/zwaze_bodega/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Pages/Application/Support.page":
/*!***********************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Pages/Application/Support.page ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/zwaze_bodega/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/zwaze_bodega/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/zwaze_bodega/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/zwaze_bodega/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/zwaze_bodega/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Pages/Application/UserActivityLog.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Pages/Application/UserActivityLog.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/zwaze_bodega/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/zwaze_bodega/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/zwaze_bodega/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/zwaze_bodega/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/zwaze_bodega/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/zwaze_bodega/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/zwaze_bodega/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/zwaze_bodega/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Pages/DocumentoTransporte_Detail.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Pages/DocumentoTransporte_Detail.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"{Title}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":true,"Separator":true,"Caption":"Doc. Transporte","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty2","IsVisible":true,"Separator":true,"Caption":"Peso","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty3","IsVisible":true,"Separator":true,"Caption":"Camión","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty4","IsVisible":true,"Separator":true,"Caption":"Capacidad","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty5","IsVisible":true,"Separator":true,"Caption":"Utilización","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsVisible":true,"Separator":true,"Caption":"Ruta","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker0","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Yalero Asignado","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"FilterProperty":[],"PickerItems":["One","Two","Three"]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker1","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Preparador Asignado","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"FilterProperty":[],"PickerItems":["One","Two","Three"]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker4","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Piloto Asignado","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"FilterProperty":[],"PickerItems":["One","Two","Three"]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker2","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Ayudante Asignado","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"FilterProperty":[],"PickerItems":["One","Two","Three"]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"FormCellListPicker3","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Ayudante Asignado 2","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"FilterProperty":[],"PickerItems":["One","Two","Three"]}]}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"DocumentoTransporte_Detail","Caption":"DocumentoTransporte_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Pages/DocumentoTransporte_List.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Pages/DocumentoTransporte_List.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":true,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectCollection","Target":"/zwaze_bodega/Rules/SetDocumentoTransporteList.js","_Name":"SectionObjectCollection0","Visible":true,"EmptySection":{"FooterVisible":false},"DataPaging":{"ShowLoadingIndicator":false,"LoadingIndicatorText":"","PageSize":50},"ObjectCell":{"Title":"Doc. Transporte: {Title}","Subhead":"Peso: {Subhead}","Footnote":"Camión: {Footnote}","DisplayDescriptionInMobile":true,"StatusText":"{Status}","SubstatusText":"{Substatus}","AccessoryType":"DisclosureIndicator","PreserveIconStackSpacing":false,"OnPress":"/zwaze_bodega/Actions/NavToDocumentoTransporte_Detail.action","AvatarStack":{"Avatars":[],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":false}},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"DocumentoTransporte_List","Caption":"Lista de Documentos","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Pages/Main.page":
/*!********************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Pages/Main.page ***!
  \********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"DatePickerFechaDocTransporte","IsVisible":true,"Separator":false,"Caption":"Fecha del Documento de Transporte","IsEditable":true,"Mode":"Date"},{"validationProperties":{"ValidationMessage":"Hola","ValidationMessageColor":"#f40000","ValidationViewIsHidden":true},"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"SimplePropertyDocTransporte","IsVisible":true,"Separator":false,"Caption":"Documento de Transporte","KeyboardType":"Number","AlternateInput":"None","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.Button","_Name":"ButtonCleanFilters","IsVisible":true,"Separator":false,"Title":"Restablecer filtros","Alignment":"Center","ButtonType":"Secondary","Semantic":"Tint","Image":"sap-icon://clear-filter","ImagePosition":"Leading","Enabled":true,"OnPress":"/zwaze_bodega/Rules/TestingRule.js"},{"_Type":"Control.Type.FormCell.Button","_Name":"ButtonSearch","IsVisible":true,"Separator":false,"Title":"Iniciar búsqueda","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","Image":"sap-icon://search","ImagePosition":"Leading","Enabled":true,"OnPress":"/zwaze_bodega/Rules/GetDocumentoTransporteData.js"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"MainView","Caption":"Bodega","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/zwaze_bodega/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ }),

/***/ "./build.definitions/zwaze_bodega/Styles/Styles.json":
/*!***********************************************************!*\
  !*** ./build.definitions/zwaze_bodega/Styles/Styles.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/zwaze_bodega/jsconfig.json":
/*!******************************************************!*\
  !*** ./build.definitions/zwaze_bodega/jsconfig.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map