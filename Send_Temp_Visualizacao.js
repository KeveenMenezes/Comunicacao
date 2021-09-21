function onOpen()
{
    var ui=SpreadsheetApp.getUi();
    ui.createMenu("Email").addItem("Enviar emails", "sendMail").addToUi();
}

//SendMail
function sendMail()
{
    var app=SpreadsheetApp;
    var gmail=GmailApp;
    var spreadsheet=app.getActiveSpreadsheet();
    var sheet=spreadsheet.getSheetByName('Envio Email Fiat');
    var values=sheet.getRange("A2:I").getValues();
    var now=new Date();
  
  values.map(function(elem,ind,obj){
    if(elem[1] != ""){
      var draft = GmailApp.getDrafts()[0];
      var message = draft.getMessage();
      var corpo = message.getBody();        
      var mens1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Fiat').getRange('K2').getValue(); 
      var mens2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Fiat').getRange('L2').getValue(); 
      var mens3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Fiat').getRange('M2').getValue();  
      var mens4 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Fiat').getRange('N2').getValue(); 
      var mens5 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Fiat').getRange('O2').getValue(); 
      var mens6 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Fiat').getRange('P2').getValue(); 
      var mens7 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Fiat').getRange('Q2').getValue(); 
      
      message.forward(elem[2],{ 
          htmlBody: mens1 +elem[1]+ mens2 +elem[5] + mens3 +elem[3]+ mens4  +elem[4]+ mens5 +elem[4] + mens6 +elem[4]+ mens7
        });
    }
  });
    var app=SpreadsheetApp;
    var gmail=GmailApp;
    var spreadsheet=app.getActiveSpreadsheet();
    var sheet=spreadsheet.getSheetByName('Envio Email Jeep');
    var values=sheet.getRange("A2:I").getValues();
    var now=new Date();
  
  values.map(function(elem,ind,obj){
    if(elem[1] != ""){
      var draft = GmailApp.getDrafts()[0];
      var message = draft.getMessage();
      var corpo = message.getBody();        
      var mens1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Jeep').getRange('K2').getValue(); 
      var mens2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Jeep').getRange('L2').getValue(); 
      var mens3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Jeep').getRange('M2').getValue();  
      var mens4 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Jeep').getRange('N2').getValue(); 
      var mens5 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Jeep').getRange('O2').getValue(); 
      var mens6 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Jeep').getRange('P2').getValue(); 
      var mens7 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Envio Email Jeep').getRange('Q2').getValue();
      message.forward(elem[2],{ 
          htmlBody: mens1 +elem[1]+ mens2 +elem[5] + mens3 +elem[3]+ mens4  +elem[4]+ mens5 +elem[4] + mens6 +elem[4]+ mens7
        });
    }
  });
}
         

