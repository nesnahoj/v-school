/**
* Version: _V1472753947_
* Copyright 2011 Amazon.com, Inc., or its Affiliates.
**/

var ERROR_IN_SENDING_MESSAGE="Error while sending message without iframe bridge";var WINDOW="window";var STATUS_CODE={FAILED:"failed"};var LOG_LEVEL={ERROR:"ERROR"};var IMAGES={BLANK_GIF:"blank.gif",BLUE_PNG:"blue.png",LOADING_LARGE_LABELED:"loading-large_labeled.gif",AMAZON_PAYMENTS_LOGO:"logo_amazonpayments_overlay._V192259298_.gif"};var IMAGE_URL_PREFIX={PAYMENT_CARD_LOGO_SMALL:"https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/",LOGO:"https://images-na.ssl-images-amazon.com/images/G/01/cba/images/logos/",COMMON_WIDGET:"https://images-na.ssl-images-amazon.com/images/G/01/cba/images/widgets/common/",LOAD_INDICATOR:"https://images-na.ssl-images-amazon.com/images/G/01/ui/loadIndicators/"};var PAYMENT_INSTRUMENT={VISA:"Visa",MASTERCARD:"Mastercard",DISCOVER:"Discover",AMEX:"Amex",JCB:"Jcb",DINERSCLUB:"Diners"};PAYMENT_INSTRUMENT.REGEX={VISA:/^4/g,MASTERCARD:/^5[1-5]/g,DISCOVER:/^6011|^65/g,AMEX:/^34|^37/g,JCB:/^35|^2131|^1800/g,DINERSCLUB:/^30[0-5]|^36|^38/g};PAYMENT_INSTRUMENT.IMAGE={GIF:{VISA:"visa.gif",MASTERCARD:"mc.gif",DISCOVER:"discover.gif",AMEX:"amex.gif",JCB:"jcb.gif",DINERSCLUB:"diners.gif"}};if(!CBA||typeof(CBA)=="undefined"){var CBA={}}if(!CBA.Checkout||typeof(CBA.Checkout)=="undefined"){CBA.Checkout=new (function(){this.ASYNC=new (function(){this.Registry=new (function(){this.items=new Array();this.register=function(K,I,J){var L=K+"_"+I;this.putEntry(L,J)};this.getHandler=function(J,I){var K=J+"_"+I;return this.getEntry(K)};this.putEntry=function(I,J){this.items[I]=J};this.getEntry=function(I){return this.items[I]}});this.HandleJSONResponse=new (function(){this.handleJSONResponse=function(P){if(!P){return}var I=P.action;var K=P.pagelets;if(!(I&&K)){return}for(var J=0;J<K.length;J++){var N=K[J];var M=N.id;if(M){var O=N.data;if(O){var L=CBA.Checkout.ASYNC.Registry.getHandler(M,I);if(L){L(O)}}}}}})});this.Constants=function(){return{UCUI_COMMON_FIELDS_FORM_ID:"#UnifiedCheckoutCommonFieldsForm",UCUI_ADD_CC_FORM_ID:"#AddCreditCardForm_CreditCard",UCUI_ADD_DD_FORM_ID:"#AddBankAccountForm_BankAccount",UCUI_ADD_ADDRESS_FORM_ID:"#AddNewAddressForm_Address",UCUI_ADD_BILLING_ADDRESS_FORM_ID:"#AddNewAddressForm_BillingAddress",UCUI_EDIT_CC_FORM_ID:"#EditCCForm",UCUI_SAVE_CREDIT_CARD_FORM_ID:"#AddCCAndSetPaymentMethodForm",UCUI_SAVE_DIRECT_DEBIT_FORM_ID:"#AddDDAndSetPaymentMethodForm",UCUI_SPC_UPDATE_CC_EXPIRY_FORM_ID:"#SPCUpdateCCExpiryForm",UCUI_APA_CHECKBOX_INPUT_ID:"#apaCheckbox",UCUI_IS_APA_SELECTED_INPUT_NAME:"isAPASelected",POPUP_WIN_WIDTH:520,POPUP_WIN_HEIGHT:475,POPUP_WIN_NAME:"OffAmazonPaymentsPopupWindow",BRIDGE_IFRAME_NAME:"OffAmazonPaymentsBridgeIframe",MILLIS:1000,POPUP_LOADING_HTML:"                 <style>              a {color:#004B91;}             #headerSlots {padding-top: 0; height: 50px;}             #pageLoading #mainContentArea {height: 375px;overflow-y: auto;}              #imgLoading {text-align: center; padding-top: 120px;}             #footerSlots {width: 100%;height: 50px;position: fixed;bottom: 0px;left: 0px;}             #footerSlots #amazonPaymentsLogo {background: url("+IMAGE_URL_PREFIX.LOGO+IMAGES.AMAZON_PAYMENTS_LOGO+") no-repeat center top;margin-top: 4px;height: 17px;text-indent: -9999px;}             #footerSlots .AtoZ {font-size: 10px; padding-top: 1px;}             #footerSlots .ap_privacy_info {font-size: 9px;}             div#bottom-6 {left:auto;top:auto;text-align: center;border-top:1px solid #B3B3B3;}             .ap_privacy_info {font-family:Verdana;font-size:10px;font-weight:normal;}         </style>          <div id='pageLoading'>             <div id='wrapper'>                  <div id='headerSlots'></div>                  <div id='mainContentArea'>                      <div id='centerSlots'>                          <div id='center-1'>                              <div id='imgLoading'>                                  <img id='loadingImg' src='"+IMAGE_URL_PREFIX.LOAD_INDICATOR+IMAGES.LOADING_LARGE_LABELED+"'>                             </div>                          </div>                      </div>                  </div>                  <div id='footerSlots'>                      <div id='bottom-6'>                         <div class='amazonPaymentLogo' id='amazonPaymentsLogo'></div>                      </div>                 </div>             </div>         </div>"}}();this.commonFieldsFormHandler=function(T){var L=T.find("input");var R=jQuery(CBA.Checkout.Constants.UCUI_COMMON_FIELDS_FORM_ID).find("input");var O=R.length;var N="";var M=0;for(var P=0;P<O;P+=1){var J=jQuery(R[P]);var I=J.attr("type");var Q=J.attr("name");var K=J.attr("value");var S=L.filter('[name="'+Q+'"]');if(S.length==0){N+='<input type="'+I+'" name="'+Q+'" value="'+K+'" />'}}T.append(N)};this.submitWithCommonFields=function(J){var I=jQuery(J);CBA.Checkout.commonFieldsFormHandler(I);I.submit()};this.submitWithCommonFieldsASYNC=function(I){this.submitWithCommonFieldsASYNC(I,null,null)};this.submitWithCommonFieldsASYNC=function(M,L,K){var J=jQuery(M);this.commonFieldsFormHandler(J);var I={target:M,dataType:"json",success:function(N){CBA.Checkout.ASYNC.HandleJSONResponse.handleJSONResponse(N);if(L){L(N,K)}}};J.ajaxSubmit(I);return false};this.submitWithCommonFieldsUsingPopup=function(L,K){var J=jQuery(L);CBA.Checkout.commonFieldsFormHandler(J);var I=CBA.Checkout.Constants.POPUP_WIN_NAME+K;CBA.Checkout.openPopup(I);J.attr("target",I);J.submit()};this.submitWithCommonFieldsUsingWindow=function(M,L){var I=jQuery(M);CBA.Checkout.commonFieldsFormHandler(I);var K=WINDOW+L;var J=window.open("",K);I.attr("target",K);I.submit()};this.openPopupPrivacyPolicy=function(K){var J="width="+520+"height="+475+"resizable=1,scrollbars=1,toolbar=1,status=1";var I="AmazonHelp";var M=window.open(K,I,J);try{M.focus()}catch(L){}};this.openPopup=function(M){var L=(window.screen.width-CBA.Checkout.Constants.POPUP_WIN_WIDTH)/2;var K=(window.screen.height-CBA.Checkout.Constants.POPUP_WIN_HEIGHT)/2;if((L>0)&&(K>0)){var N="top="+K+",left="+L+",width="+CBA.Checkout.Constants.POPUP_WIN_WIDTH+",height="+CBA.Checkout.Constants.POPUP_WIN_HEIGHT+", resizable=yes,menubar=no,toolbar=no";N=N+",location=yes,status=yes";var J=window.open("",M,N);try{J.document.write(CBA.Checkout.Constants.POPUP_LOADING_HTML)}catch(I){J.close();J=window.open("",M,N);J.document.write(CBA.Checkout.Constants.POPUP_LOADING_HTML)}J.focus();return J}};this.toggleAPACheckbox=function(){var I=jQuery(CBA.Checkout.Constants.UCUI_APA_CHECKBOX_INPUT_ID+":checked").val();var J=(I!=null)?"true":"false";var K=jQuery(CBA.Checkout.Constants.UCUI_COMMON_FIELDS_FORM_ID).find(":input").filter('[name="'+CBA.Checkout.Constants.UCUI_IS_APA_SELECTED_INPUT_NAME+'"]');if(K.length==0){jQuery(CBA.Checkout.Constants.UCUI_COMMON_FIELDS_FORM_ID).append('<input type="hidden" name="'+CBA.Checkout.Constants.UCUI_IS_APA_SELECTED_INPUT_NAME+'" value="'+J+'">')}else{K.val(J)}};this.appendInputToForm=function(O,M,I){var K=jQuery(O);var L=(K.find("input")).filter('[name="'+M+'"]');var J=L.length;if(J!=0){for(var N=0;N<J;N++){L[N].value=I}return}K.append('<input type="hidden" name="'+M+'" value="'+I+'"/>')};this.handleTooltipOnHover=function(I,K){var L="#"+I+"Tooltip";var J=jQuery(L);jQuery("#"+I).hover(function(R){var S=jQuery(this).offset();var P=jQuery(this).height();var N=jQuery(this).width();var O=J.width();var M=(S.top+P)+"px";var Q=(S.left-O/2)+"px";J.css({top:M,left:Q,position:"absolute"}).show();if(K){K(R)}},function(M){J.hide();if(K){K(M)}})};this.handlePopoverOnHover=function(K,L){var J="#"+K+"Popover";var I=jQuery(J);jQuery("#"+K).hover(function(Q){var R=jQuery(this).offset();var T=jQuery(this).height();var N=jQuery(this).width();var M=I.width();var U=I.height();var S=jQuery(document).width();var O=(R.top-U-2*(T))+"px";var P=((S-M)/2)+"px";I.css({top:O,left:P,position:"absolute"}).show();if(L){L(Q)}},function(M){I.hide();if(L){L(M)}})};this.showA2ZGuarantee=function(){jQuery("#a2zBlurb").show()};this.setupSelectPaymentMethodPagelet=function(){jQuery("#cbaCCSelect").change(function(){var I=jQuery(this).val();if(I){var J=jQuery("#selectCCForm");CBA.Checkout.commonFieldsFormHandler(J);J.submit()}});jQuery("#ccBillingAddress").hide();jQuery("#cbaShowBillingLink").click(function(){jQuery("#ccBillingAddress").show();jQuery("#cbaBillingLink").hide()});jQuery("#cbaHideBillingLink").click(function(){jQuery("#ccBillingAddress").hide();jQuery("#cbaBillingLink").show()});jQuery("#setBillingToShippingAddressCB").change(function(){var J=jQuery(this).prop("checked");if(J){var I=jQuery("#SetBillingToShippingAddressForm");CBA.Checkout.commonFieldsFormHandler(I);I.submit()}});jQuery("#updateExpiryLink").click(function(){jQuery("#expiryMessage").hide();jQuery("#expiryUpdateForm").show()})};this.setupEditCreditCardPagelet=function(){jQuery("#setBillingToShippingAddressCB").change(function(){var J=jQuery(this).prop("checked");var I="";if(J){I=jQuery("#EditCCForm [name=newShipToAddressId]")}jQuery("#SetBillingToShippingAddress [name=billingAddressId]").val(I.val());CBA.Checkout.submitWithCommonFields("#SetBillingToShippingAddressForm")})};var b=null;var o=null;var w=null;var q=null;var d=null;var C=null;var x=10;var u="GB";this.createAddressInputFieldValidators=function(){if(jQuery(CBA.Checkout.Constants.UCUI_ADD_ADDRESS_FORM_ID).length||jQuery(CBA.Checkout.Constants.UCUI_ADD_BILLING_ADDRESS_FORM_ID).length){w=new B(jQuery(CBA.Checkout.Constants.UCUI_ADD_ADDRESS_FORM_ID));if(jQuery(CBA.Checkout.Constants.UCUI_ADD_BILLING_ADDRESS_FORM_ID).length){q=new B(jQuery(CBA.Checkout.Constants.UCUI_ADD_BILLING_ADDRESS_FORM_ID))}w.addValidator(new j({elementToValidate:jQuery("#address_name"),validateFunctionWrappers:[new c({validateFunction:l,errorIdentifier:"missingDataName"})]}));w.addValidator(new j({elementToValidate:jQuery("#address_phone"),validateFunctionWrappers:[new c({validateFunction:validateNumericWithHyphen,errorIdentifier:"missingDataPhone"})]}));countryCode=jQuery("#address_country").val();if(countryCode==u){if(u=="DE"){w.addValidator(new A({elementToValidate:[jQuery("#address_addressLine1"),jQuery("#address_addressLine2")],validateFunctionWrappers:[new c({validateFunction:m,errorIdentifier:"missingDataAddressLine1"})]}))}else{w.addValidator(new j({elementToValidate:jQuery("#address_addressLine1"),validateFunctionWrappers:[new c({validateFunction:n,errorIdentifier:"missingDataAddressLine1"})]}))}if(u!="JP"){w.addValidator(new j({elementToValidate:jQuery("#address_city"),validateFunctionWrappers:[new c({validateFunction:n,errorIdentifier:"missingDataCity"})]}))}if(u=="US"||u=="JP"){w.addValidator(new j({elementToValidate:jQuery("#address_state"),validateFunctionWrappers:[new c({validateFunction:n,errorIdentifier:"missingDataState"})]}))}w.addValidator(new j({elementToValidate:jQuery("#address_zip"),validateFunctionWrappers:[new c({validateFunction:n,errorIdentifier:"missingDataPostalCode"})]}))}else{w.addValidator(new j({elementToValidate:jQuery("#address_state")}));w.addValidator(new j({elementToValidate:jQuery("#address_phone")}));w.addValidator(new j({elementToValidate:jQuery("#address_zip")}));w.addValidator(new j({elementToValidate:jQuery("#address_addressLine1")}));w.addValidator(new j({elementToValidate:jQuery("#address_addressLine2")}))}if(q!=null){q.validators=w.validators.slice(0)}}};this.createDirectDebitCardInputFieldValidators=function(){if(jQuery(CBA.Checkout.Constants.UCUI_ADD_DD_FORM_ID).length){o=new B(jQuery(CBA.Checkout.Constants.UCUI_ADD_DD_FORM_ID));o.addValidator(new j({elementToValidate:jQuery("#bankAccountAccountNumber"),validateFunctionWrappers:[new c({validateFunction:n,errorIdentifier:"addBankAccount_BadAccountNumber"}),new c({validateFunction:a,errorIdentifier:"addBankAccount_BadAccountNumber"}),new c({validateFunction:f,errorIdentifier:"addBankAccount_BadAccountNumber"})]}));o.addValidator(new j({elementToValidate:jQuery("#bankAccountRoutingNumber"),validateFunctionWrappers:[new c({validateFunction:n,errorIdentifier:"addBankAccount_BadRoutingNumber"}),new c({validateFunction:k,errorIdentifier:"addBankAccount_BadRoutingNumber"}),new c({validateFunction:f,errorIdentifier:"addBankAccount_BadRoutingNumber"})]}));o.addValidator(new j({elementToValidate:jQuery("#bankAccountAccountName"),validateFunctionWrappers:[new c({validateFunction:n,errorIdentifier:"addBankAccount_BadAccountName"})]}))}};this.createCreditCardInputFieldValidators=function(){if(jQuery(CBA.Checkout.Constants.UCUI_ADD_CC_FORM_ID).length){b=new B(jQuery(CBA.Checkout.Constants.UCUI_ADD_CC_FORM_ID));b.addValidator(new j({elementToValidate:jQuery("#cardNumber"),validateFunctionWrappers:[new c({validateFunction:n,errorIdentifier:"addCreditCard_BadNumber"}),new c({validateFunction:e,errorIdentifier:"addCreditCard_BadNumber"}),new c({validateFunction:h,errorIdentifier:"addCreditCard_BadNumber"}),new c({validateFunction:g,errorIdentifier:"addCreditCard_TypeNotAccepted"})]}));b.addValidator(new j({elementToValidate:jQuery("#cardHolderName"),validateFunctionWrappers:[new c({validateFunction:n,errorIdentifier:"addCreditCard_NoName"})]}));b.addValidator(new j({elementToValidate:jQuery("#expirationmonthandyear"),elementsToHighlight:jQuery("#expirationmonthandyear select"),validateFunctionWrappers:[new c({validateFunction:D,errorIdentifier:"addCreditCard_BadExpiration"})]}))}};this.createSPCCreditCardUpdateValidators=function(){if(jQuery(CBA.Checkout.Constants.UCUI_SPC_UPDATE_CC_EXPIRY_FORM_ID).length){d=new B(jQuery(CBA.Checkout.Constants.UCUI_SPC_UPDATE_CC_EXPIRY_FORM_ID));d.addValidator(new j({elementToValidate:jQuery("#expiryUpdateForm"),elementsToHighlight:jQuery("#expiryUpdateForm select"),validateFunctionWrappers:[new c({validateFunction:D,errorIdentifier:"addCreditCard_BadExpiration"})]}))}};this.editCreditCardInputFieldValidators=function(){if(jQuery(CBA.Checkout.Constants.UCUI_EDIT_CC_FORM_ID).length){C=new B(jQuery(CBA.Checkout.Constants.UCUI_EDIT_CC_FORM_ID));C.addValidator(new j({elementToValidate:jQuery("#expiryUpdateForm"),validateFunctionWrappers:[new c({validateFunction:D,errorIdentifier:"editCreditCard_BadExpiration"})]}))}};var G;var v;this.actionAddCreditCard=function(J,I){G=J;v=I+1;this.hideImportantMessage();return p(b,CBA.Checkout.Constants.UCUI_SAVE_CREDIT_CARD_FORM_ID)};this.actionAddCreditCardMobile=function(J,I){G=J;v=I+1;this.hideImportantMessage();return E(b,CBA.Checkout.Constants.UCUI_SAVE_CREDIT_CARD_FORM_ID)};this.actionEditCreditCard=function(J,I){G=J;v=I+1;this.hideImportantMessage();return p(C,CBA.Checkout.Constants.UCUI_EDIT_CC_FORM_ID)};this.actionAddBankAccount=function(){this.hideImportantMessage();return p(o,CBA.Checkout.Constants.UCUI_SAVE_DIRECT_DEBIT_FORM_ID)};this.actionAddAddress=function(I){this.hideImportantMessage();CBA.Checkout.createAddressInputFieldValidators();return p(w,I)};this.actionAddAddressMobile=function(I){this.hideImportantMessage();CBA.Checkout.createAddressInputFieldValidators();return E(w,I)};this.actionAddBillingAddressMobile=function(I){this.hideImportantMessage();countryCode=jQuery("#address_country").val();if(countryCode!=u){CBA.Checkout.submitWithCommonFields(I);return true}else{return p(q,I)}};this.actionUpdateCreditCardExpiration=function(J,I){G=J;v=I+1;this.hideImportantMessage();return p(d,CBA.Checkout.Constants.UCUI_SPC_UPDATE_CC_EXPIRY_FORM_ID)};this.hideImportantMessage=function(){jQuery("div.importantMessageBox").hide()};function p(J,I){J.runAllValidators(true);if(J.hasErrors()){return false}CBA.Checkout.submitWithCommonFields(I);return true}function E(J,I){J.runAllValidators(true);if(J.hasErrors()){return false}CBA.Checkout.submitWithCommonFieldsASYNC(I);return true}function B(I){this.section=I;this.errorBlock=I.find(".errorblock");this.errorIdentifiers=[];this.validators=[];this.DEFAULT_PRIORITY=100;this.addError=function(J){this.errorIdentifiers[J]=this.DEFAULT_PRIORITY;this.refreshErrorBlock()};this.removeError=function(J){delete this.errorIdentifiers[J];this.refreshErrorBlock()};this.clearErrors=function(){this.errorIdentifiers=[];this.clearAllHighlighting();this.refreshErrorBlock()};this.runAllValidators=function(J){if(J){this.clearErrors()}for(var K in this.validators){this.validate(this.validators[K])}};this.clearAllHighlighting=function(){for(var J in this.validators){this.validators[J].refreshHighlight(true)}};this.hasErrors=function(){for(var J in this.errorIdentifiers){return true}return false};this.validate=function(M){var O=true;var N=[];var R=[];for(var K in M.validateFunctionWrappers){var Q=M.validateFunctionWrappers[K];var J=Q.invoke(M.elementToValidate);if(J){N[Q.errorIdentifier]=true}else{R[Q.errorIdentifier]=true}O=O&&J}for(var P in N){this.removeError(P)}for(var L in R){this.addError(L)}if(O&&M.onSuccess){M.onSuccess()}else{if(!O&&M.onFailure){M.onFailure()}}M.refreshHighlight(O)};this.addValidator=function(J){this.validators.push(J)};this.refreshErrorBlock=function(){this.errorBlock.find("[error]").hide();var K=0;for(var J in this.errorIdentifiers){var L="[error="+J+"]";this.errorBlock.find(L).show();K++}if(K>0){this.errorBlock.show();var M=jQuery.browser.msie?"tabIndex":"tabindex";this.errorBlock.attr(M,-1).focus()}else{this.errorBlock.hide()}}}function j(I){this.elementToValidate=I.elementToValidate;this.elementsToHighlight=I.elementsToHighlight||I.elementToValidate;this.validateFunctionWrappers=I.validateFunctionWrappers;this.onSuccess=I.onSuccess;this.onFailure=I.onFailure;this.refreshHighlight=function(J){if(J){this.elementsToHighlight.each(function(){jQuery(this).removeClass("redbox")})}else{this.elementsToHighlight.each(function(){jQuery(this).addClass("redbox")})}}}function A(I){this.elementToValidate=I.elementToValidate;this.elementsToHighlight=I.elementsToHighlight||I.elementToValidate[I.elementToValidate.length-1];this.validateFunctionWrappers=I.validateFunctionWrappers;this.onSuccess=I.onSuccess;this.onFailure=I.onFailure;this.refreshHighlight=function(J){if(J){this.elementsToHighlight.each(function(){jQuery(this).removeClass("redbox")})}else{this.elementsToHighlight.each(function(){jQuery(this).addClass("redbox")})}}}function c(I){this.validateFunction=I.validateFunction;this.errorIdentifier=I.errorIdentifier;this.invoke=function(J){return this.validateFunction(J)}}function z(I){var L="0123456789";var J=true;var K;for(i=0;i<I.length&&J==true;i++){K=I.charAt(i);if(L.indexOf(K)==-1){J=false}}return J}function r(I){return jQuery.trim(I)}function F(I){if(I.length===0){return false}var L=0;var J=false;for(var K=I.length-1;K>=0;--K){var M=parseInt(I.charAt(K),x);if(J){M*=2;if(M>9){M-=9}}L+=M;J=!J}return(L%10)===0}function H(I){if(!I||typeof(I)=="undefined"){return false}if(I==="Visa"||I==="Mastercard"||I==="Amex"||I==="Discover"||I==="Jcb"||I==="Diners"){return true}return false}function n(I){return I!=null&&r(I.val()).length>0}function a(I){return r(I.val()).length<=10}function k(I){return r(I.val()).length==8}function f(I){if(I==null){return false}else{return z(r(I.val()))}}function m(K){var J=false;for(var I=0;I<K.length;I++){J=J||(K[I]!=null&&r(K[I].val()).length>0)}return J}function l(I){return n(I)&&r(I.val()).length<=50}function e(I){return r(I.val()).length>=10}function h(I){var J=I.val().replace(/\D/g,"");return F(J)}function g(J){var K=J.val().replace(/\D/g,"");var I=y(K);if(typeof(I)=="undefined"||I==null){return false}return H(I.name)}function D(J){var K=J.find("[name=expirationMonth]").val();var I=J.find("[name=expirationYear]").val();return parseInt(I,10)>G||(parseInt(I,10)==G&&parseInt(K,10)>=v)}function s(){if(u=="US"){return{visa:{name:PAYMENT_INSTRUMENT.VISA,regex:PAYMENT_INSTRUMENT.REGEX.VISA,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.VISA},mastercard:{name:PAYMENT_INSTRUMENT.MASTERCARD,regex:PAYMENT_INSTRUMENT.REGEX.MASTERCARD,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.MASTERCARD},diners:{name:PAYMENT_INSTRUMENT.DINERSCLUB,regex:PAYMENT_INSTRUMENT.REGEX.DINERSCLUB,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.DINERSCLUB},amex:{name:PAYMENT_INSTRUMENT.AMEX,regex:PAYMENT_INSTRUMENT.REGEX.AMEX,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.AMEX},discover:{name:PAYMENT_INSTRUMENT.DISCOVER,regex:PAYMENT_INSTRUMENT.REGEX.DISCOVER,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.DISCOVER},jcb:{name:PAYMENT_INSTRUMENT.JCB,regex:PAYMENT_INSTRUMENT.REGEX.JCB,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.JCB}}}if(u=="GB"){return{visa:{name:PAYMENT_INSTRUMENT.VISA,regex:PAYMENT_INSTRUMENT.REGEX.VISA,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.VISA},mastercard:{name:PAYMENT_INSTRUMENT.MASTERCARD,regex:PAYMENT_INSTRUMENT.REGEX.MASTERCARD,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.MASTERCARD},amex:{name:PAYMENT_INSTRUMENT.AMEX,regex:PAYMENT_INSTRUMENT.REGEX.AMEX,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.AMEX}}}if(u=="DE"){return{visa:{name:PAYMENT_INSTRUMENT.VISA,regex:PAYMENT_INSTRUMENT.REGEX.VISA,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.VISA},mastercard:{name:PAYMENT_INSTRUMENT.MASTERCARD,regex:PAYMENT_INSTRUMENT.REGEX.MASTERCARD,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.MASTERCARD},amex:{name:PAYMENT_INSTRUMENT.AMEX,regex:PAYMENT_INSTRUMENT.REGEX.AMEX,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.AMEX}}}if(u=="JP"){return{visa:{name:PAYMENT_INSTRUMENT.VISA,regex:PAYMENT_INSTRUMENT.REGEX.VISA,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.VISA},mastercard:{name:PAYMENT_INSTRUMENT.MASTERCARD,regex:PAYMENT_INSTRUMENT.REGEX.MASTERCARD,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.MASTERCARD},amex:{name:PAYMENT_INSTRUMENT.AMEX,regex:PAYMENT_INSTRUMENT.REGEX.AMEX,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.AMEX},jcb:{name:PAYMENT_INSTRUMENT.JCB,regex:PAYMENT_INSTRUMENT.REGEX.JCB,img_src:IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+PAYMENT_INSTRUMENT.IMAGE.GIF.JCB}}}}function y(K){var L=s();for(var J in L){var I=L[J];if(K.match(I.regex)){return I}}return null}this.showCCType=function(I,J){this.showCCTypeCommon(I,J,IMAGE_URL_PREFIX.PAYMENT_CARD_LOGO_SMALL+IMAGES.BLANK_GIF)};this.showCCTypeMobile=function(I,J){this.showCCTypeCommon(I,J,IMAGE_URL_PREFIX.COMMON_WIDGET+IMAGES.BLUE_PNG)};this.showCCTypeCommon=function(J,L,M){var K=jQuery(J).val();var I=y(K);if(I&&H(I.name)){jQuery(L+" > img").attr("src",I.img_src)}else{jQuery(L+" > img").attr("src",M)}};this.getCCName=function(I){return y(I).name};this.bindRadioButtons=function(J){for(var K=0;K<J.length;K++){var I=J[K];jQuery(I).change(function(){var L=jQuery(this).attr("name");var M=jQuery(this).attr("id");if(jQuery(this).prop("checked")){jQuery('input[name="'+L+'"]').removeAttr("checked")}jQuery(this).prop("checked",true)})}};function t(){return navigator.userAgent.match(/Trident\/|MSIE|Edge\//i)?true:false}this.widgetSendErrMsg=function(M,J,I,K){var L="apay-OffAmazonPayments_mec_"+M+"="+J+";widgetId="+I;if(!t()){this.sendMessageToNonIEBrowsers(window.parent,L,K)}else{this.retryHandler_(window.parent,L,K,1)}};this.widgetSendMsg=function(M,J,I){var L=false;var K=M+";widgetId="+J;this.sendMsg(L,K,I)};this.redirectSendMsg=function(N,M,J,I){var L="apay-"+N+";widgetId="+I+";returnUrl="+M;var K=window.opener;if(!t()){this.sendMessageToNonIEBrowsers(K,L,J)}else{this.retryHandler_(K,L,J,1)}};this.sendMsg=function(J,M,I){var L="apay-"+M;var K=(J)?window.opener.parent:window.parent;if(!t()){this.sendMessageToNonIEBrowsers(K,L,I)}else{this.retryHandler_(K,L,I,1)}return true};this.sendMessageToNonIEBrowsers=function(K,L,I){try{if(typeof(I)!="string"){I=String(I)}K.postMessage(L,I)}catch(M){if(window.ueLogError){var J={logLevel:LOG_LEVEL.ERROR,attribution:"new-CommonWidgetLib.js",message:ERROR_IN_SENDING_MESSAGE};window.ueLogError(M,J)}}};this.retryHandler_=function(K,M,J,I){try{this.sendMessageToBridgeIframe(K,M,J)}catch(N){var L=this;if(I<5){setTimeout(function(){L.retryHandler_(K,M,J,I+1)},CBA.Checkout.Constants.MILLIS*Math.pow(2,I))}}};this.sendMessageToBridgeIframe=function(K,L,J){var I=K.frames[CBA.Checkout.Constants.BRIDGE_IFRAME_NAME];if(I&&typeof(I)!=="undefined"&&typeof(I.sendBridgeMessage)!=="undefined"){I.sendBridgeMessage(L,J)}};this.sendMessageToParent=function(M,J){if(typeof(J)!="string"){J=String(J)}var L=false;var I=window.parent;if(I&&typeof(I.postMessage)!=="undefined"){try{I.postMessage(M,J);L=true}catch(O){}}if(!L){I=window.top;var K=J.search(/#/);var N=(K!=-1&&K<=J.length)?J+M:J+"#"+M;if(I&&!I.closed){I.location=N}}};this.saveWidgetShippingAddress=function(I){if(I.status==STATUS_CODE.FAILED){displayErrorMessage(I.content);jQuery("#errorWidget").show();jQuery("#addressWidget").remove()}else{updateSelectedAddress(I.content);jQuery("#errorWidget").hide()}};this.saveWidgetPaymentMethod=function(I){if(I.status===STATUS_CODE.FAILED){displayErrorMessage(I.content);jQuery("#errorWidget").show();jQuery("#addressWidget").remove()}else{updateSelectedPaymentInstrument(I.content);jQuery("#errorWidget").hide()}}});function closePopup(){window.close()}function PopupWinWithDimension(c,e,f){var d="width="+e+"height="+f+"resizable=1,scrollbars=1,toolbar=1,status=1";var b="AmazonHelp";var a=window.open(c,b,d);a.focus();return false}}jQuery(document).ready(function(){CBA.Checkout.createCreditCardInputFieldValidators();CBA.Checkout.createDirectDebitCardInputFieldValidators();CBA.Checkout.createSPCCreditCardUpdateValidators();CBA.Checkout.editCreditCardInputFieldValidators()});function refitSelectedAddress(){var r=jQuery("#addressName");var q=jQuery("#addressLine1");var p=jQuery("#addressLine2");var j=jQuery("#addressLine3");var o=jQuery("#addressCity");var n=jQuery("#addressStateZip");var m=jQuery("#addressCountry");var l=jQuery("#addressPhone");var h=jQuery(r).text();var g=jQuery(q).text();var f=jQuery(p).text();var b=jQuery(j).text();var e=jQuery(o).text();var d=jQuery(n).text();var c=jQuery(m).text();refit(r,1);refit(q,1);refit(p,1);refit(j,1);refit(o,1);refit(n,1);refit(m,1);if(l!=undefined&&l!=null){refit(l,1)}var a=0;var s=8;if(l==undefined||l==null){s--}var k=num_rows(jQuery("#cba-v2-widget-preview"))-s;if(k>0){jQuery(q).text(g);a=refit(q,1+k);k-=(a-1)}if(k>0){jQuery(p).text(f);a=refit(q,1+k);k-=(a-1)}if(k>0){jQuery(j).text(b);a=refit(p,1+k);k-=(a-1)}if(k>0){jQuery(r).text(h);a=refit(r,1+k);k-=(a-1)}if(k>0){jQuery(n).text(d);a=refit(n,1+k);k-=(a-1)}}function num_rows(c){var a=jQuery(c).height();jQuery(c).append("<div id='cba-v2-widget-temp-div' style='position:absolute; visibility:hidden'>H</div>");var b=jQuery("#cba-v2-widget-temp-div").height();jQuery("#cba-v2-widget-temp-div").remove();return Math.round(a/b)}function refit(c,a){if(num_rows(c)>a){var b=jQuery(c).html();jQuery(c).html("<span>"+b+"</span><span>...</span>")}while(num_rows(c)>a){if(b.length>0){b=b.substr(0,b.length-5);jQuery(c).html("<span>"+b+"</span><span>...</span>")}else{break}}return num_rows(c)};